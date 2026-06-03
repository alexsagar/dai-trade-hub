import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#1B4332",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://daitradehub.com"), // Example domain
  title: {
    default: "DAI Trade Hub — Agricultural Trading & Industrial Solutions",
    template: "%s | DAI Trade Hub",
  },
  description:
    "DAI Trade Hub is a leading agricultural trading and industrial company specializing in agricultural inputs, food processing, warehousing, import-export, and farmer support services across Nepal.",
  keywords: [
    "agriculture",
    "trading",
    "fertilizers",
    "food processing",
    "warehousing",
    "cold storage",
    "import export",
    "Nepal",
    "DAI Trade Hub",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "DAI Trade Hub — Connecting Agriculture, Trade & Sustainable Growth",
    description:
      "Leading agricultural trading and industrial company providing comprehensive solutions from farm to market in Nepal.",
    url: "https://daitradehub.com",
    siteName: "DAI Trade Hub",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-agriculture.png",
        width: 1200,
        height: 630,
        alt: "DAI Trade Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DAI Trade Hub — Agricultural Trading Solutions",
    description: "Leading agricultural trading and industrial company in Nepal.",
    images: ["/images/hero-agriculture.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DAI Trade Hub",
    url: "https://daitradehub.com",
    logo: "https://daitradehub.com/images/logo.png",
    description: "Leading agricultural trading and industrial company in Nepal.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Panchakanya Marga",
      addressLocality: "Kathmandu",
      postalCode: "44600",
      addressCountry: "NP"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "01-5107439",
      contactType: "customer service"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased bg-white text-dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
