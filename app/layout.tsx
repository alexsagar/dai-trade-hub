import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/ui";
import { COMPANY, IS_INDEXABLE, OG_IMAGE, SITE_URL } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

const DESCRIPTION =
  "DAI Trade Hub Pvt. Ltd. is a Nepal-based international trading and business development company for product sourcing, import and export coordination, private label, retail branding and distribution partnerships.";

export const viewport: Viewport = { themeColor: "#0f1d2b" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DAI Trade Hub | International Trading & Business Development, Nepal",
    template: "%s | DAI Trade Hub",
  },
  description: DESCRIPTION,
  applicationName: COMPANY.shortName,
  robots: IS_INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: COMPANY.shortName,
    locale: "en_US",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY.name,
      alternateName: COMPANY.shortName,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      description: DESCRIPTION,
      email: COMPANY.email,
      telephone: COMPANY.phoneIntl,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.street,
        addressLocality: COMPANY.city,
        postalCode: COMPANY.postalCode,
        addressCountry: COMPANY.countryCode,
      },
      contactPoint: [
        { "@type": "ContactPoint", contactType: "customer service", email: COMPANY.email, telephone: COMPANY.phoneIntl },
        { "@type": "ContactPoint", contactType: "sales", email: COMPANY.tradeEmail },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: COMPANY.shortName,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`} data-scroll-behavior="smooth">
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only z-[100] bg-gold px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <JsonLd data={orgJsonLd} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
