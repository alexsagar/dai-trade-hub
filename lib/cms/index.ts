import { draftMode } from "next/headers";
import { createClient, type QueryParams } from "next-sanity";
import * as D from "./defaults";
import { normalize, withDefaults } from "./normalize";
import type { PageDocs, Photo, ProductCategory, Service, SiteSettings } from "./types";
import { pageMetadata } from "../site";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "development";
export const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "";
const readToken = process.env.SANITY_API_READ_TOKEN || "";

/** Until a project id is supplied the site renders the approved static content. */
export const cmsEnabled = Boolean(projectId);

// One tag for all CMS content: the site is small, so a publish revalidates every page.
export const CMS_TAG = "sanity";

const client = cmsEnabled
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2026-02-01",
      useCdn: false, // Next.js caches responses; the CDN could re-serve stale data right after a webhook.
      perspective: "published",
      stega: { studioUrl: studioUrl || undefined, enabled: false },
    })
  : null;

/**
 * Published content is cached under CMS_TAG and refreshed by the signed webhook
 * (/api/revalidate), with an hourly fallback. Draft mode bypasses the cache and
 * reads drafts with the server-only viewer token.
 */
async function cmsFetch<T>(query: string, params: QueryParams = {}, { stega = true } = {}): Promise<T | null> {
  if (!client) return null;
  const isDraft = (await draftMode()).isEnabled && Boolean(readToken);
  const raw = isDraft
    ? await client.fetch(query, params, {
        perspective: "drafts",
        token: readToken,
        stega: stega && Boolean(studioUrl),
        cache: "no-store",
      })
    : await client.fetch(query, params, { next: { tags: [CMS_TAG], revalidate: 3600 } });
  return normalize(raw, projectId, dataset) as T | null;
}

export async function getPage<K extends keyof PageDocs>(id: K, opts?: { stega?: boolean }): Promise<PageDocs[K]> {
  const doc = await cmsFetch<Partial<PageDocs[K]>>(`*[_id == $id][0]`, { id }, opts);
  return withDefaults(D.PAGES[id], doc);
}

export async function getSiteSettings(opts?: { stega?: boolean }): Promise<SiteSettings> {
  const doc = await cmsFetch<Partial<SiteSettings>>(`*[_id == "siteSettings"][0]`, {}, opts);
  return withDefaults(D.SITE_SETTINGS, doc);
}

export async function getProductCategories(): Promise<ProductCategory[]> {
  const docs = await cmsFetch<ProductCategory[]>(`*[_type == "productCategory"] | order(orderRank asc, title asc)`);
  return docs?.length ? docs : D.PRODUCT_CATEGORIES;
}

export async function getServices(): Promise<Service[]> {
  const docs = await cmsFetch<Service[]>(`*[_type == "service"] | order(orderRank asc, title asc)`);
  return docs?.length ? docs : D.SERVICES;
}

/** Every distinct photograph currently used on public pages, for the attribution page. */
export async function getUsedPhotos(): Promise<Photo[]> {
  const pages = await Promise.all((Object.keys(D.PAGES) as (keyof PageDocs)[]).map((id) => getPage(id, { stega: false })));
  const [settings, categories] = await Promise.all([getSiteSettings({ stega: false }), getProductCategories()]);
  const found = new Map<string, Photo>();
  const walk = (v: unknown) => {
    if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") {
      const o = v as Record<string, unknown>;
      if (typeof o.src === "string" && typeof o.width === "number") found.set(o.src, o as Photo);
      else Object.values(o).forEach(walk);
    }
  };
  walk([pages, settings, categories]);
  return [...found.values()];
}

/** generateMetadata for a CMS-backed page. Stega is off so no invisible characters reach <head>. */
export function cmsMetadata(id: keyof PageDocs, path: string) {
  return async () => {
    const { seo } = await getPage(id, { stega: false });
    return pageMetadata({ path, title: seo.title, description: seo.description, ogImage: seo.ogImage, noindex: seo.noindex });
  };
}
