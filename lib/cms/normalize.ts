// Pure helpers (no Next.js imports) so they can be unit-tested with node:test.
import { stegaClean } from "@sanity/client/stega";
import type { Photo } from "./types.ts";

// Image asset ids encode their dimensions: image-<hash>-<w>x<h>-<ext>
const ASSET_RE = /^image-([a-f0-9]+)-(\d+)x(\d+)-(\w+)$/;

export function assetToPhoto(
  value: { asset?: { _ref?: string }; alt?: string; credit?: string; licence?: string; sourceUrl?: string },
  projectId: string,
  dataset: string,
): Photo | null {
  const m = stegaClean(value.asset?._ref ?? "").match(ASSET_RE);
  if (!m) return null;
  const [, hash, w, h, ext] = m;
  return {
    src: `https://cdn.sanity.io/images/${projectId}/${dataset}/${hash}-${w}x${h}.${ext}`,
    width: Number(w),
    height: Number(h),
    alt: value.alt ?? "",
    credit: value.credit,
    licence: value.licence,
    sourceUrl: value.sourceUrl,
  };
}

// Values used in URLs, ids or comparisons must not carry invisible stega characters.
const CLEAN_KEYS = new Set(["href", "slug", "status", "delivery", "countryCode", "phoneIntl", "email", "tradeEmail", "sourceUrl"]);
const SYSTEM_KEYS = new Set(["_id", "_type", "_rev", "_key", "_createdAt", "_updatedAt", "_system", "_originalId"]);

/** Converts raw Sanity documents into the plain shapes in types.ts. */
export function normalize(value: unknown, projectId: string, dataset: string): unknown {
  if (Array.isArray(value)) return value.map((v) => normalize(v, projectId, dataset)).filter((v) => v != null);
  if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>;
    if (obj._type === "photo") return assetToPhoto(obj, projectId, dataset);
    if (obj._type === "slug" && typeof obj.current === "string") return stegaClean(obj.current);
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(obj)) {
      if (SYSTEM_KEYS.has(k)) continue;
      out[k] = CLEAN_KEYS.has(k) && typeof v === "string" ? stegaClean(v) : normalize(v, projectId, dataset);
    }
    return out;
  }
  return value;
}

/**
 * Fills fields the CMS left empty (null/undefined/"") with the approved default.
 * Arrays from the CMS replace defaults entirely unless empty.
 */
export function withDefaults<T>(fallback: T, cms: unknown): T {
  if (cms == null || cms === "") return fallback;
  if (Array.isArray(fallback)) return (Array.isArray(cms) && cms.length ? cms : fallback) as T;
  if (fallback && typeof fallback === "object" && typeof cms === "object" && !Array.isArray(cms)) {
    const out: Record<string, unknown> = { ...(cms as Record<string, unknown>) };
    for (const [k, v] of Object.entries(fallback as Record<string, unknown>)) {
      out[k] = withDefaults(v, (cms as Record<string, unknown>)[k]);
    }
    return out as T;
  }
  return cms as T;
}
