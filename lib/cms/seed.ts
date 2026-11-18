// Turns the approved static content (defaults.ts) into Sanity documents.
// Pure and deterministic so the seed is repeatable and testable.
import { PAGES, PRODUCT_CATEGORIES, SERVICES, SITE_SETTINGS } from "./defaults.ts";
import type { Photo } from "./types.ts";

export type SeedDoc = { _id: string; _type: string; [k: string]: unknown };

const isPhoto = (v: unknown): v is Photo =>
  !!v && typeof v === "object" && typeof (v as Photo).src === "string" && typeof (v as Photo).width === "number";

const slugify = (s: string) => s.toLowerCase().replace(/&/g, " ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Valid LexoRank values so @sanity/orderable-document-list can reorder seeded items later.
export const rank = (i: number) => `0|${(100000 + i * 1000).toString(36).padStart(6, "0")}:`;

// Schema type of an object inside an array (see studio/schemaTypes).
const itemType = (o: object) => ("links" in o ? "footerColumn" : "href" in o ? "cta" : "card");

/** assetIds maps a local photo path (/images/photos/x.jpg) to an uploaded Sanity asset id. */
export function toSanity(value: unknown, assetIds: Record<string, string>, key = "k"): unknown {
  if (isPhoto(value)) {
    const ref = assetIds[value.src];
    if (!ref) throw new Error(`No uploaded asset for ${value.src}`);
    const { alt, credit, licence, sourceUrl } = value;
    return { _type: "photo", asset: { _type: "reference", _ref: ref }, alt, credit, licence, sourceUrl };
  }
  if (Array.isArray(value)) {
    return value.map((v, i) => {
      const out = toSanity(v, assetIds, `${key}${i}`);
      return out && typeof out === "object" ? { _key: `${key}${i}`, _type: itemType(out), ...out } : out;
    });
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) if (v != null) out[k] = toSanity(v, assetIds, k);
    return out;
  }
  return value;
}

export function localPhotos(): Photo[] {
  const found = new Map<string, Photo>();
  const walk = (v: unknown) => {
    if (isPhoto(v)) found.set(v.src, v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") Object.values(v).forEach(walk);
  };
  walk([PAGES, SITE_SETTINGS, PRODUCT_CATEGORIES]);
  return [...found.values()];
}

// Fields added after the first seed. `--fill-missing` writes only these paths, and only where
// they are empty, so content already edited in the Studio is never overwritten.
export const ADDED_FIELDS: Record<string, string[]> = {
  siteSettings: ["phoneNote", "navigation", "footer"],
  homePage: ["process.stepLabel"],
  aboutPage: ["visionLabel", "missionLabel", "commitmentLabel"],
  productsPage: ["availabilityLabel", "statusLabels", "detailLabels", "inquireLabel"],
  globalTradePage: ["twoWay.fromEyebrow", "twoWay.fromTitle", "twoWay.toEyebrow", "twoWay.toTitle"],
  servicesPage: ["deliveryLabels"],
  contactPage: ["phoneLabel", "generalEmailLabel", "tradeEmailLabel", "form"],
};

/** setIfMissing values per document id, taken from the seed documents. */
export function addedFieldValues(docs: SeedDoc[]): Record<string, Record<string, unknown>> {
  const get = (o: unknown, path: string) => path.split(".").reduce((v, k) => (v as Record<string, unknown>)?.[k], o);
  return Object.fromEntries(
    docs
      .filter((d) => ADDED_FIELDS[d._id])
      .map((d) => [d._id, Object.fromEntries(ADDED_FIELDS[d._id].map((p) => [p, get(d, p)]))]),
  );
}

export function seedDocuments(assetIds: Record<string, string>): SeedDoc[] {
  const t = (v: unknown) => toSanity(v, assetIds) as Record<string, unknown>;
  return [
    { _id: "siteSettings", _type: "siteSettings", ...t(SITE_SETTINGS) },
    ...Object.entries(PAGES).map(([id, page]) => ({ _id: id, _type: id, ...t(page) })),
    ...PRODUCT_CATEGORIES.map((c, i) => ({
      _id: `productCategory-${c.slug}`,
      _type: "productCategory",
      orderRank: rank(i),
      ...t(c),
      slug: { _type: "slug", current: c.slug },
    })),
    ...SERVICES.map((s, i) => ({ _id: `service-${slugify(s.title)}`, _type: "service", orderRank: rank(i), ...t(s) })),
  ];
}
