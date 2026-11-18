import type { MetadataRoute } from "next";
import { IS_INDEXABLE, NAV_LINKS, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!IS_INDEXABLE) return []; // nothing to submit while the site is noindex
  return NAV_LINKS.map(({ href }) => ({
    url: `${SITE_URL}${href === "/" ? "" : href}`,
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
