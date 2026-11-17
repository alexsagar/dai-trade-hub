import type { Metadata } from "next";

// Production URL is configurable; falls back to the current Vercel production domain.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://dai-trade-hub.vercel.app").replace(/\/$/, "");

// Only the production deployment may be indexed. Previews and local builds are noindex.
export const IS_INDEXABLE = process.env.VERCEL_ENV === "production";

export const COMPANY = {
  name: "DAI Trade Hub Pvt. Ltd.",
  shortName: "DAI Trade Hub",
  tagline: "Connecting Markets. Creating Opportunities. Building Global Partnerships.",
  street: "Panchakanya Marga",
  city: "Kathmandu",
  postalCode: "44600",
  country: "Nepal",
  countryCode: "NP",
  phoneDisplay: "01-5107439",
  phoneHref: "tel:+97715107439",
  phoneIntl: "+977-1-5107439",
  email: "info@dainepal.com",
  tradeEmail: "trade@dainepal.com",
} as const;

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
}: {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    // openGraph/twitter objects replace (not merge with) the layout's, so repeat the shared fields.
    openGraph: { title, description, url: path, type: "website", siteName: COMPANY.shortName, locale: "en_US", images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
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
