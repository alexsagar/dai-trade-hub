import { defineLocations, type PresentationPluginOptions } from "sanity/presentation";

const page = (title: string, href: string) => defineLocations({ locations: [{ title, href }] });

// Tells the Presentation tool which website page shows each document.
export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    homePage: page("Homepage", "/"),
    aboutPage: page("About Us", "/about"),
    productsPage: page("Products", "/products"),
    globalTradePage: page("Global Trade", "/global-trade"),
    retailBrandingPage: page("Retail Branding", "/retail-branding"),
    servicesPage: page("Services", "/services"),
    partnershipsPage: page("Partnerships", "/partnerships"),
    contactPage: page("Contact", "/contact"),
    siteSettings: page("Every page (header & footer)", "/"),
    productCategory: defineLocations({
      select: { title: "title", slug: "slug.current", showOnHome: "showOnHome" },
      resolve: (doc) => ({
        locations: [
          { title: doc?.title || "Product category", href: `/products#${doc?.slug ?? ""}` },
          ...(doc?.showOnHome ? [{ title: "Homepage", href: "/" }] : []),
        ],
      }),
    }),
    service: defineLocations({ select: { title: "title" }, resolve: (doc) => ({ locations: [{ title: doc?.title || "Service", href: "/services" }] }) }),
  },
};
