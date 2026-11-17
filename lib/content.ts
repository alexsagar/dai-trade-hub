// Approved copy, transcribed from DAI_TRADE_HUB_CONTENT_SOURCE.md.
// Do not add suppliers, statistics, certifications or stock claims that are not in the source.

export const PHOTOS = {
  meeting: { src: "/images/photos/hero-meeting.jpg", width: 1600, height: 1071, alt: "Two business professionals shaking hands across a table during a meeting" },
  tea: { src: "/images/photos/tea-garden.jpg", width: 1600, height: 1200, alt: "Rolling tea garden in Ilam, eastern Nepal, under low clouds" },
  coffee: { src: "/images/photos/coffee-nepal.jpg", width: 1600, height: 911, alt: "Ripening coffee cherries on a coffee plant in rural Nepal" },
  spices: { src: "/images/photos/spices.jpg", width: 1600, height: 1067, alt: "Black and green cardamom pods side by side" },
  crafts: { src: "/images/photos/singing-bowls.jpg", width: 1600, height: 1067, alt: "Hand-hammered metal singing bowls" },
  textile: { src: "/images/photos/pashmina.jpg", width: 1600, height: 1067, alt: "Close-up of a woven pashmina scarf" },
  packaging: { src: "/images/photos/packaging.jpg", width: 1600, height: 1067, alt: "Stacked corrugated cardboard sheets used for packaging" },
  kathmandu: { src: "/images/photos/kathmandu.jpg", width: 1600, height: 1200, alt: "View across the Kathmandu Valley from the Chandragiri hills" },
} as const;

export type Photo = (typeof PHOTOS)[keyof typeof PHOTOS];

export const CORE_BUSINESS = [
  { title: "International Trading", text: "Import and export coordination connecting suppliers, manufacturers, buyers, and international markets." },
  { title: "Product Sourcing", text: "Identification and coordination of suitable products and suppliers based on buyer requirements, specifications, and market expectations." },
  { title: "Retail Branding", text: "Brand identity, packaging development, private-label coordination, and retail product presentation." },
  { title: "Wholesale & Distribution", text: "Business-to-business supply, wholesale trading, distribution coordination, and market development." },
  { title: "Product Development", text: "Coordination with local manufacturers and production partners to develop products for specific market requirements." },
  { title: "Business Development", text: "Local market research, supplier identification, business introductions, and international partnership development." },
];

export const HIGHLIGHTS = [
  "International Product Sourcing",
  "Import & Export Coordination",
  "Retail Branding & Private Label",
  "Wholesale & Distribution",
  "Global Business Development",
];

export type SourcingStatus = "available" | "on-request" | "in-development";

export const STATUS_LABEL: Record<SourcingStatus, string> = {
  available: "Available",
  "on-request": "Sourcing on request",
  "in-development": "Under development",
};

// No product-level stock, MOQ, certification or export data has been verified,
// so every category is listed as sourcing-on-request until the company confirms otherwise.
export const PRODUCT_CATEGORIES: {
  title: string;
  text: string;
  origin: string;
  status: SourcingStatus;
  photo?: Photo;
}[] = [
  { title: "Himalayan Tea & Coffee", text: "Premium tea, specialty coffee, and selected beverage products.", origin: "Nepal", status: "on-request", photo: PHOTOS.tea },
  { title: "Herbs & Spices", text: "Selected natural herbs, spices, and agricultural products.", origin: "Nepal", status: "on-request", photo: PHOTOS.spices },
  { title: "Natural & Agricultural Products", text: "Potentially suitable natural products and specialty goods, subject to quality and regulatory requirements.", origin: "Nepal", status: "on-request", photo: PHOTOS.coffee },
  { title: "Handmade & Handicrafts", text: "Traditional handmade products, artistic crafts, and locally developed lifestyle goods.", origin: "Nepal", status: "on-request", photo: PHOTOS.crafts },
  { title: "Pashmina & Textile Products", text: "Selected textile, pashmina, and lifestyle products.", origin: "Nepal", status: "on-request", photo: PHOTOS.textile },
  { title: "Food & Beverage Products", text: "Food and beverage products sourced according to buyer specifications and the regulatory requirements of the target market.", origin: "Nepal and international markets", status: "on-request" },
  { title: "Retail Products", text: "Selected international products for Nepalese markets.", origin: "International markets", status: "on-request" },
  { title: "Selected Industrial & Lifestyle Products", text: "Packaging solutions, machinery and equipment, and selected industrial products for the Nepalese market.", origin: "International markets", status: "on-request", photo: PHOTOS.packaging },
];

export const FROM_NEPAL = ["Tea and Coffee", "Herbs and Spices", "Handicrafts", "Selected Agricultural Products", "Textile and Lifestyle Products"];
export const TO_NEPAL = ["Food and Consumer Products", "Retail and Lifestyle Products", "Packaging Solutions", "Machinery and Equipment", "Selected Industrial Products"];

export const PRIVATE_LABEL_CAPABILITIES = [
  "Private Label Development",
  "Product Branding Coordination",
  "Packaging Design Coordination",
  "OEM / ODM Project Coordination",
  "Product Specification Development",
  "Retail Market Adaptation",
  "Supplier and Manufacturer Coordination",
];

export const PROCESS = [
  { title: "Understand Requirements", text: "We understand the buyer's needs, product specifications, target market, and business objectives." },
  { title: "Identify Suppliers", text: "We coordinate with potential manufacturers, producers, and suppliers." },
  { title: "Product Evaluation", text: "We coordinate samples, specifications, quality information, and commercial discussions." },
  { title: "Branding & Packaging", text: "We coordinate suitable branding and packaging development with relevant partners." },
  { title: "Trade Coordination", text: "We support commercial documentation, logistics coordination, and export or import arrangements." },
  { title: "Distribution & Growth", text: "We support business partners in developing long-term supply and distribution opportunities." },
];

export const VALUE_PROPOSITION = [
  "Nepal-Based Business Coordination",
  "Global Market Understanding",
  "Flexible Product Sourcing",
  "Business-to-Business Cooperation",
  "Private-Label Project Coordination",
  "Long-Term Partnership Approach",
];

export const CORE_VALUES = ["Integrity", "Partnership", "Quality", "Innovation", "Transparency", "Sustainability"];

export const COOPERATION_MODELS = [
  "Direct Import & Export",
  "Product Sourcing Agreements",
  "Exclusive Distribution",
  "Private-Label Projects",
  "Joint Product Development",
  "Strategic Business Partnerships",
];

export const COORDINATION_ROLE = [
  "Local Supplier Identification",
  "Product Information Collection",
  "Sample Coordination",
  "Commercial Communication",
  "Import/Export Documentation Coordination",
  "Local Market Development Support",
];

export const BRANDING_SERVICES = [
  { title: "Brand Development", text: "Coordination of brand concepts, product identity, and market positioning." },
  { title: "Private Label", text: "Support in identifying suitable manufacturing and sourcing partners for private-label projects." },
  { title: "Packaging Development", text: "Coordination of packaging materials, design requirements, labeling, and product presentation." },
  { title: "OEM / ODM Coordination", text: "Business coordination with potential manufacturers for customized products." },
  { title: "Market Adaptation", text: "Support in identifying product and packaging requirements for target markets." },
];

export const TEA_PROJECT_STEPS = [
  "Identify Nepalese tea suppliers.",
  "Select suitable product grades.",
  "Coordinate samples and specifications.",
  "Develop global-market packaging with the brand partner.",
  "Review relevant food and labeling requirements.",
  "Coordinate export and distribution.",
];

// delivery: who performs the work. "direct" = DAI Trade Hub coordinates it itself;
// "partners" = carried out by external providers, coordinated by DAI Trade Hub.
export const SERVICES: { title: string; text: string; delivery: "direct" | "partners" }[] = [
  { title: "International Import & Export", text: "Commercial coordination for importing and exporting selected products between Nepal and international markets.", delivery: "direct" },
  { title: "Product Sourcing & Procurement", text: "Identifying suitable products, suppliers, and manufacturers according to buyer requirements.", delivery: "direct" },
  { title: "Retail Branding & Packaging", text: "Coordination of brand presentation, product packaging, private-label development, and retail readiness.", delivery: "partners" },
  { title: "Wholesale Trading & Distribution", text: "Connecting buyers, wholesalers, retailers, and distribution partners.", delivery: "direct" },
  { title: "Product Development & Manufacturing Coordination", text: "Coordinating with potential production partners to develop products based on commercial specifications.", delivery: "partners" },
  { title: "Logistics & Supply Chain Coordination", text: "Supporting freight, shipping documentation, customs-related coordination, and delivery arrangements through relevant service providers.", delivery: "partners" },
  { title: "Market Research & Business Development", text: "Supporting companies with local market information, potential supplier identification, and business introductions.", delivery: "direct" },
  { title: "Strategic Partnership & Investment Coordination", text: "Facilitating discussions and business connections for joint projects and long-term cooperation.", delivery: "direct" },
];

export const PARTNERSHIP_MODELS = [
  "International Trading Partnership",
  "Product Sourcing Partnership",
  "Exclusive Distribution Partnership",
  "Private-Label Development Partnership",
  "Manufacturing & Production Partnership",
  "Joint Business Development",
  "Investment and Strategic Cooperation",
];

export const PARTNER_AUDIENCES = [
  "Global Retail Companies",
  "International Trading Companies",
  "Product Manufacturers",
  "Wholesale Distributors",
  "Retail Brand Owners",
  "Nepalese Producers and Suppliers",
  "International Investors",
];

export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, " ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
