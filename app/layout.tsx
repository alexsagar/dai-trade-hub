import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import "./globals.css";
import DraftModeBanner from "@/components/DraftModeBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { JsonLd } from "@/components/ui";
import { getSiteSettings } from "@/lib/cms";
import type { SiteSettings } from "@/lib/cms/types";
import { IS_INDEXABLE, OG_IMAGE, SITE_URL } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const viewport: Viewport = { themeColor: "#0f1d2b" };

export async function generateMetadata(): Promise<Metadata> {
  const s = await getSiteSettings({ stega: false });
  const og = s.ogImage ? { url: s.ogImage.src, width: s.ogImage.width, height: s.ogImage.height, alt: s.ogImage.alt } : OG_IMAGE;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: `${s.shortName} | International Trading & Business Development, Nepal`, template: `%s | ${s.shortName}` },
    description: s.description,
    applicationName: s.shortName,
    robots: IS_INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: { type: "website", siteName: s.shortName, locale: "en_US", images: [og] },
    twitter: { card: "summary_large_image", images: [og.url] },
  };
}

function orgJsonLd(s: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: s.name,
        alternateName: s.shortName,
        url: SITE_URL,
        logo: `${SITE_URL}/icon.png`,
        description: s.description,
        email: s.email,
        telephone: s.phoneIntl,
        address: {
          "@type": "PostalAddress",
          streetAddress: s.street,
          addressLocality: s.city,
          postalCode: s.postalCode,
          addressCountry: s.countryCode,
        },
        contactPoint: [
          { "@type": "ContactPoint", contactType: "customer service", email: s.email, telephone: s.phoneIntl },
          { "@type": "ContactPoint", contactType: "sales", email: s.tradeEmail },
        ],
      },
      { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: s.shortName, publisher: { "@id": `${SITE_URL}/#organization` } },
    ],
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [settings, cleanSettings, { isEnabled: isDraft }] = await Promise.all([
    getSiteSettings(),
    getSiteSettings({ stega: false }), // structured data must not contain stega characters
    draftMode(),
  ]);
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`} data-scroll-behavior="smooth">
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only z-[100] bg-gold px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <JsonLd data={orgJsonLd(cleanSettings)} />
        <Header primaryCta={settings.headerPrimaryCta} secondaryCta={settings.headerSecondaryCta} />
        <main id="main">{children}</main>
        <Footer />
        {isDraft && (
          <>
            <VisualEditing />
            <DraftModeBanner />
          </>
        )}
      </body>
    </html>
  );
}
