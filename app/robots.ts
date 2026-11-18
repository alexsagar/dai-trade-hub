import type { MetadataRoute } from "next";
import { IS_INDEXABLE, SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // While noindex, crawlers must still be allowed to fetch pages, or they never see the noindex directive.
  if (!IS_INDEXABLE) return { rules: { userAgent: "*", allow: "/", disallow: "/api/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
