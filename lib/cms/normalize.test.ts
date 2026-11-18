import { test } from "node:test";
import assert from "node:assert/strict";
import { stegaEncodeSourceMap } from "@sanity/client/stega";
import { assetToPhoto, normalize, withDefaults } from "./normalize.ts";
import { PAGES, PRODUCT_CATEGORIES, SERVICES, SITE_SETTINGS } from "./defaults.ts";

const REF = "image-abc123-1600x900-jpg";

test("asset refs become CDN photos with intrinsic size", () => {
  const p = assetToPhoto({ asset: { _ref: REF }, alt: "Tea", credit: "A", licence: "CC0" }, "proj", "development");
  assert.deepEqual(p, {
    src: "https://cdn.sanity.io/images/proj/development/abc123-1600x900.jpg",
    width: 1600,
    height: 900,
    alt: "Tea",
    credit: "A",
    licence: "CC0",
    sourceUrl: undefined,
  });
  assert.equal(assetToPhoto({}, "proj", "development"), null);
});

test("normalize strips system keys, flattens slugs and photos, drops empty images", () => {
  const raw = {
    _id: "x",
    _type: "productCategory",
    slug: { _type: "slug", current: "herbs-spices" },
    photo: { _type: "photo", asset: { _ref: REF }, alt: "Spices" },
    gallery: [{ _type: "photo", _key: "1" }],
    items: [{ _key: "a", title: "T" }],
  };
  assert.deepEqual(normalize(raw, "p", "d"), {
    slug: "herbs-spices",
    photo: { src: "https://cdn.sanity.io/images/p/d/abc123-1600x900.jpg", width: 1600, height: 900, alt: "Spices", credit: undefined, licence: undefined, sourceUrl: undefined },
    gallery: [],
    items: [{ title: "T" }],
  });
});

test("normalize removes stega characters from link and id fields only", () => {
  const encoded = stegaEncodeSourceMap(
    { href: "/contact", title: "Hello" },
    { documents: [{ _id: "d", _type: "t" }], paths: ["$['href']", "$['title']"], mappings: { "$['href']": { type: "value", source: { type: "documentValue", document: 0, path: 0 } }, "$['title']": { type: "value", source: { type: "documentValue", document: 0, path: 1 } } } },
    { enabled: true, studioUrl: "https://example.sanity.studio", filter: () => true },
  ) as { href: string; title: string };
  const out = normalize(encoded, "p", "d") as { href: string; title: string };
  assert.equal(out.href, "/contact");
  assert.notEqual(out.title, "Hello"); // titles keep stega so overlays work
});

test("withDefaults fills missing fields but keeps CMS values", () => {
  const merged = withDefaults(PAGES.aboutPage, { vision: "New vision", values: [], hero: { title: "New" } });
  assert.equal(merged.vision, "New vision");
  assert.equal(merged.hero.title, "New");
  assert.equal(merged.hero.subtitle, PAGES.aboutPage.hero.subtitle);
  assert.deepEqual(merged.values, PAGES.aboutPage.values); // empty list falls back
  assert.equal(withDefaults(PAGES.aboutPage, null), PAGES.aboutPage);
});

test("default content stays faithful to the approved source", () => {
  assert.equal(Object.keys(PAGES).length, 8);
  assert.equal(SERVICES.length, 8);
  assert.equal(PRODUCT_CATEGORIES.length, 8);
  // No category may claim stock or confirmed commercial terms without verification.
  for (const c of PRODUCT_CATEGORIES) {
    assert.equal(c.status, "on-request", c.title);
    assert.equal(c.moq ?? c.certifications ?? c.exportStatus, undefined, c.title);
  }
  assert.equal(SITE_SETTINGS.email, "info@dainepal.com");
  assert.equal(new Set(PRODUCT_CATEGORIES.map((c) => c.slug)).size, PRODUCT_CATEGORIES.length);
});

test("seed documents round-trip back to the approved content", async () => {
  const { localPhotos, seedDocuments } = await import("./seed.ts");
  const ids = Object.fromEntries(localPhotos().map((p, i) => [p.src, `image-${"a".repeat(8)}${i}-${p.width}x${p.height}-jpg`]));
  const docs = seedDocuments(ids);
  assert.equal(new Set(docs.map((d) => d._id)).size, docs.length);
  assert.equal(docs.filter((d) => d._type === "productCategory").length, 8);
  // Every array item that is an object needs a _key for the Studio.
  const missingKey = docs.map((d) => JSON.stringify(d)).join("").match(/\[\{(?!"_key")/g);
  assert.equal(missingKey, null);
  // Normalising the seeded About page yields the original copy (photos become CDN urls).
  const about = normalize(docs.find((d) => d._id === "aboutPage"), "p", "development") as typeof PAGES.aboutPage;
  assert.equal(about.vision, PAGES.aboutPage.vision);
  assert.deepEqual(about.values, PAGES.aboutPage.values);
  assert.equal(about.hero.photo.alt, PAGES.aboutPage.hero.photo.alt);
  assert.match(about.hero.photo.src, /^https:\/\/cdn\.sanity\.io\/images\/p\/development\//);
});

test("--fill-missing only targets new fields, and each has a seed value", async () => {
  const { ADDED_FIELDS, addedFieldValues, localPhotos, seedDocuments } = await import("./seed.ts");
  const values = addedFieldValues(seedDocuments(Object.fromEntries(localPhotos().map((p) => [p.src, "unused"]))));
  assert.deepEqual(Object.keys(values).sort(), Object.keys(ADDED_FIELDS).sort());
  for (const [id, fields] of Object.entries(values)) {
    for (const [path, v] of Object.entries(fields)) assert.ok(v != null && v !== "", `${id}.${path}`);
  }
  const nav = values.siteSettings.navigation as { _type: string; href: string }[];
  assert.equal(nav[0]._type, "cta");
  assert.equal(nav.length, 8);
});
