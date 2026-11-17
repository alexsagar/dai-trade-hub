// Shapes the pages render. CMS queries project into exactly these shapes,
// and lib/cms/defaults.ts provides the same shapes from the approved static copy.

export type Photo = { src: string; width: number; height: number; alt: string; credit?: string; licence?: string; sourceUrl?: string };
export type Cta = { label: string; href: string };
export type Card = { title: string; text: string };
export type Seo = { title: string; description: string; ogImage?: Photo | null; noindex?: boolean };
export type Hero = { eyebrow: string; title: string; subtitle: string; photo: Photo };
export type CtaBand = { title: string; text: string; primary: Cta; secondary?: Cta | null };
export type Heading = { eyebrow?: string; title: string; intro?: string };

export type SourcingStatus = "available" | "on-request" | "in-development";

export type ProductCategory = {
  slug: string;
  title: string;
  homeTitle?: string;
  showOnHome: boolean;
  status: SourcingStatus;
  origin: string;
  description: string;
  photo?: Photo | null;
  // Only shown when confirmed — leave empty otherwise.
  specifications?: string[];
  packaging?: string;
  moq?: string;
  certifications?: string[];
  supplyAvailability?: string;
  exportStatus?: string;
};

export type Service = { title: string; text: string; delivery: "direct" | "partners" };

export type SiteSettings = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  countryCode: string;
  phoneDisplay: string;
  phoneIntl: string;
  email: string;
  tradeEmail: string;
  headerPrimaryCta: Cta;
  headerSecondaryCta: Cta;
  ogImage?: Photo | null;
};

export type HomePage = {
  seo: Seo;
  hero: Hero & { supportingText: string; primaryCta: Cta; secondaryCta: Cta };
  intro: Heading & { paragraphs: string[]; highlights: string[]; photo: Photo; cta: Cta };
  core: Heading & { items: Card[]; linkLabel: string };
  categories: Heading & { cta: Cta };
  globalTrade: Heading & { cta: Cta };
  privateLabel: Heading & { capabilities: string[]; exampleTitle: string; exampleText: string; photo: Photo; cta: Cta };
  process: Heading & { steps: Card[] };
  why: Heading & { items: string[] };
  partnership: Heading & { paragraphs: string[]; photo: Photo; primaryCta: Cta; secondaryCta: Cta };
  finalCta: CtaBand;
};

export type AboutPage = {
  seo: Seo;
  hero: Hero;
  who: Heading & { paragraphs: string[]; photo: Photo };
  vision: string;
  mission: string;
  philosophy: Heading & { text: string };
  valuesTitle: string;
  values: string[];
  commitment: string;
  cta: CtaBand;
};

export type ProductsPage = {
  seo: Seo;
  hero: Hero;
  heroCta: Cta;
  intro: Heading;
  availabilityNote: string;
  cta: CtaBand;
};

export type GlobalTradePage = {
  seo: Seo;
  hero: Hero;
  twoWay: Heading & { fromNepal: string[]; toNepal: string[] };
  models: Heading & { items: string[] };
  role: Heading & { items: string[]; note: string; photo: Photo };
  cta: CtaBand;
};

export type RetailBrandingPage = {
  seo: Seo;
  hero: Hero;
  intro: Heading & { paragraphs: string[]; photo: Photo };
  services: Heading & { items: Card[]; note: string };
  example: Heading & { disclaimer: string; steps: string[]; photo: Photo };
  cta: CtaBand;
};

export type ServicesPage = { seo: Seo; hero: Hero; intro: Heading; cta: CtaBand };

export type PartnershipsPage = {
  seo: Seo;
  hero: Hero;
  heroCta: Cta;
  models: Heading & { items: string[] };
  audiences: { title: string; items: string[] };
  cta: CtaBand;
};

export type ContactPage = {
  seo: Seo;
  hero: Hero;
  infoTitle: string;
  formTitle: string;
  successTitle: string;
  successMessage: string;
};

export type PageDocs = {
  homePage: HomePage;
  aboutPage: AboutPage;
  productsPage: ProductsPage;
  globalTradePage: GlobalTradePage;
  retailBrandingPage: RetailBrandingPage;
  servicesPage: ServicesPage;
  partnershipsPage: PartnershipsPage;
  contactPage: ContactPage;
};
