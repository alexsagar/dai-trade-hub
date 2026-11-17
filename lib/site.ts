import type { Metadata } from "next";
import { SITE_SETTINGS } from "./cms/defaults";
import type { Photo } from "./cms/types";

// Production URL is configurable; falls back to the current Vercel production domain.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://dai-trade-hub.vercel.app").replace(/\/$/, "");

// Only the production deployment may be indexed. Previews and local builds are noindex.
export const IS_INDEXABLE = process.env.VERCEL_ENV === "production";

// Static company details: used where content must not depend on the CMS (API routes,
// legal pages). Public pages read the editable copy via getSiteSettings().
export const COMPANY = SITE_SETTINGS;

export const telHref = (phoneIntl: string) => `tel:${phoneIntl.replace(/[^+\d]/g, "")}`;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Global Trade", href: "/global-trade" },
  { label: "Retail Branding", href: "/retail-branding" },
  { label: "Services", href: "/services" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const OG_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630, alt: "DAI Trade Hub — international trading and business development" };

export function pageMetadata({
  path,
  title,
  description,
  noindex = false,
  ogImage,
}: {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
  ogImage?: Photo | null;
}): Metadata {
  const image = ogImage ? { url: ogImage.src, width: ogImage.width, height: ogImage.height, alt: ogImage.alt } : OG_IMAGE;
  return {
    title,
    description,
    alternates: { canonical: path },
    // openGraph/twitter objects replace (not merge with) the layout's, so repeat the shared fields.
    openGraph: { title, description, url: path, type: "website", siteName: COMPANY.shortName, locale: "en_US", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
