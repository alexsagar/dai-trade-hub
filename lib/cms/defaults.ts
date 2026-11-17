// Approved copy transcribed from DAI_TRADE_HUB_CONTENT_SOURCE.md.
// Used (1) as the fallback when the CMS is not configured or a document is missing, and
// (2) as the seed for the Sanity development dataset (scripts/seed-sanity.ts).
// Do not add suppliers, statistics, certifications or stock claims that are not in the source.
import type * as T from "./types.ts";

const CC_BY_SA_4 = "CC BY-SA 4.0";

export const PHOTOS = {
  meeting: { src: "/images/photos/hero-meeting.jpg", width: 1600, height: 1071, alt: "Two business professionals shaking hands across a table during a meeting", credit: "rawpixel.com", licence: "CC0 1.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Business_agreement_handshake_at_coffee_shop.jpg" },
  tea: { src: "/images/photos/tea-garden.jpg", width: 1600, height: 1200, alt: "Rolling tea garden in Ilam, eastern Nepal, under low clouds", credit: "Pravinchapagain", licence: CC_BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Ilam_tea_garden.jpg" },
  coffee: { src: "/images/photos/coffee-nepal.jpg", width: 1600, height: 911, alt: "Ripening coffee cherries on a coffee plant in rural Nepal", credit: "Elina Parajuli", licence: CC_BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Coffee_beans_in_rural_areas_of_Nepal.jpg" },
  spices: { src: "/images/photos/spices.jpg", width: 1600, height: 1067, alt: "Black and green cardamom pods side by side", credit: "Ronald van der Graaf", licence: "CC BY 2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Black_vs_green_cardamom_-_Flickr_-_Ronald_van_der_Graaf.jpg" },
  crafts: { src: "/images/photos/singing-bowls.jpg", width: 1600, height: 1067, alt: "Hand-hammered metal singing bowls", credit: "Magicalbowls", licence: CC_BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:2Old_Singing_bowls.jpg" },
  textile: { src: "/images/photos/pashmina.jpg", width: 1600, height: 1067, alt: "Close-up of a woven pashmina scarf", credit: "Kritzolina", licence: CC_BY_SA_4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Pashmina_scarf_with_woven_elephant_design_02.jpg" },
  packaging: { src: "/images/photos/packaging.jpg", width: 1600, height: 1067, alt: "Stacked corrugated cardboard sheets used for packaging", credit: "Henry Söderlund", licence: "CC BY 2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Cardboard_boxes_by_Henry_S%C3%B6derlund.jpg" },
  kathmandu: { src: "/images/photos/kathmandu.jpg", width: 1600, height: 1200, alt: "View across the Kathmandu Valley from the Chandragiri hills", credit: "Saddam Hussain Ansari", licence: "CC BY 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Panoramic_view_of_Kathmandu_Valley_from_the_Chandragiri_Cable_Car_(9).jpg" },
} satisfies Record<string, T.Photo>;

export const STATUS_LABEL: Record<T.SourcingStatus, string> = {
  available: "Available",
  "on-request": "Sourcing on request",
  "in-development": "Under development",
};

export const SITE_SETTINGS: T.SiteSettings = {
  name: "DAI Trade Hub Pvt. Ltd.",
  shortName: "DAI Trade Hub",
  tagline: "Connecting Markets. Creating Opportunities. Building Global Partnerships.",
  description:
    "DAI Trade Hub Pvt. Ltd. is a Nepal-based international trading and business development company for product sourcing, import and export coordination, private label, retail branding and distribution partnerships.",
  street: "Panchakanya Marga",
  city: "Kathmandu",
  postalCode: "44600",
  country: "Nepal",
  countryCode: "NP",
  phoneDisplay: "01-5107439",
  phoneIntl: "+977-1-5107439",
  email: "info@dainepal.com",
  tradeEmail: "trade@dainepal.com",
  headerPrimaryCta: { label: "Become a Partner", href: "/partnerships" },
  headerSecondaryCta: { label: "Explore Products", href: "/products" },
  ogImage: null,
};

const FROM_NEPAL = ["Tea and Coffee", "Herbs and Spices", "Handicrafts", "Selected Agricultural Products", "Textile and Lifestyle Products"];
const TO_NEPAL = ["Food and Consumer Products", "Retail and Lifestyle Products", "Packaging Solutions", "Machinery and Equipment", "Selected Industrial Products"];
const PRIVATE_LABEL_HREF = "/contact?type=Retail%20Branding%20%2F%20Private%20Label";
const PARTNERSHIP_HREF = "/contact?type=Investment%20%2F%20Strategic%20Partnership";

export const PRODUCT_CATEGORIES: T.ProductCategory[] = [
  { slug: "himalayan-tea-coffee", title: "Himalayan Tea & Coffee", showOnHome: true, status: "on-request", origin: "Nepal", description: "Premium tea, specialty coffee, and selected beverage products.", photo: PHOTOS.tea },
  { slug: "herbs-spices", title: "Herbs & Spices", showOnHome: true, status: "on-request", origin: "Nepal", description: "Selected natural herbs, spices, and agricultural products.", photo: PHOTOS.spices },
  { slug: "natural-agricultural-products", title: "Natural & Agricultural Products", homeTitle: "Natural & Organic Products", showOnHome: true, status: "on-request", origin: "Nepal", description: "Potentially suitable natural products and specialty goods, subject to quality and regulatory requirements.", photo: PHOTOS.coffee },
  { slug: "handmade-handicrafts", title: "Handmade & Handicrafts", showOnHome: true, status: "on-request", origin: "Nepal", description: "Traditional handmade products, artistic crafts, and locally developed lifestyle goods.", photo: PHOTOS.crafts },
  { slug: "pashmina-textile-products", title: "Pashmina & Textile Products", showOnHome: true, status: "on-request", origin: "Nepal", description: "Selected textile, pashmina, and lifestyle products.", photo: PHOTOS.textile },
  { slug: "food-beverage-products", title: "Food & Beverage Products", showOnHome: false, status: "on-request", origin: "Nepal and international markets", description: "Food and beverage products sourced according to buyer specifications and the regulatory requirements of the target market." },
  { slug: "retail-products", title: "Retail Products", homeTitle: "International Retail Products", showOnHome: true, status: "on-request", origin: "International markets", description: "Selected international products for Nepalese markets.", photo: PHOTOS.packaging },
  { slug: "selected-industrial-lifestyle-products", title: "Selected Industrial & Lifestyle Products", showOnHome: false, status: "on-request", origin: "International markets", description: "Packaging solutions, machinery and equipment, and selected industrial products for the Nepalese market.", photo: PHOTOS.packaging },
];

// delivery: "direct" = DAI Trade Hub coordinates it itself; "partners" = performed by external providers.
export const SERVICES: T.Service[] = [
  { title: "International Import & Export", text: "Commercial coordination for importing and exporting selected products between Nepal and international markets.", delivery: "direct" },
  { title: "Product Sourcing & Procurement", text: "Identifying suitable products, suppliers, and manufacturers according to buyer requirements.", delivery: "direct" },
  { title: "Retail Branding & Packaging", text: "Coordination of brand presentation, product packaging, private-label development, and retail readiness.", delivery: "partners" },
  { title: "Wholesale Trading & Distribution", text: "Connecting buyers, wholesalers, retailers, and distribution partners.", delivery: "direct" },
  { title: "Product Development & Manufacturing Coordination", text: "Coordinating with potential production partners to develop products based on commercial specifications.", delivery: "partners" },
  { title: "Logistics & Supply Chain Coordination", text: "Supporting freight, shipping documentation, customs-related coordination, and delivery arrangements through relevant service providers.", delivery: "partners" },
  { title: "Market Research & Business Development", text: "Supporting companies with local market information, potential supplier identification, and business introductions.", delivery: "direct" },
  { title: "Strategic Partnership & Investment Coordination", text: "Facilitating discussions and business connections for joint projects and long-term cooperation.", delivery: "direct" },
];

export const PAGES: T.PageDocs = {
  homePage: {
    seo: {
      title: "DAI Trade Hub | International Trading & Business Development, Nepal",
      description: "Nepal-based partner for international product sourcing, import and export coordination, private-label development, retail branding and distribution partnerships.",
    },
    hero: {
      eyebrow: "Connecting Markets. Creating Opportunities.",
      title: "Connecting Nepal Through International Trade",
      subtitle: "Your trusted partner for international product sourcing, import and export, private-label development, retail branding, and global distribution.",
      supportingText: "We connect businesses with quality products, reliable suppliers, and new market opportunities. From Nepal and beyond, we help create meaningful and sustainable international business partnerships.",
      photo: PHOTOS.meeting,
      primaryCta: { label: "Explore Trade Opportunities", href: "/global-trade" },
      secondaryCta: { label: "Partner With Us", href: "/partnerships" },
    },
    intro: {
      eyebrow: "Who we are",
      title: "Your Strategic Partner in International Trade",
      paragraphs: [
        "DAI Trade Hub Pvt. Ltd. is a Nepal-based trading and business development company working to connect local products, manufacturers, suppliers, and international markets.",
        "Our business approach goes beyond traditional import and export. We focus on identifying business opportunities, developing product supply channels, coordinating private-label projects, supporting retail branding, and building distribution partnerships.",
        "With a focus on global trade cooperation, we aim to support businesses seeking reliable local connections and international market opportunities.",
      ],
      highlights: ["International Product Sourcing", "Import & Export Coordination", "Retail Branding & Private Label", "Wholesale & Distribution", "Global Business Development"],
      photo: PHOTOS.kathmandu,
      cta: { label: "Discover DAI Trade Hub", href: "/about" },
    },
    core: {
      eyebrow: "Our core business",
      title: "Comprehensive Trading & Business Solutions",
      linkLabel: "View all services",
      items: [
        { title: "International Trading", text: "Import and export coordination connecting suppliers, manufacturers, buyers, and international markets." },
        { title: "Product Sourcing", text: "Identification and coordination of suitable products and suppliers based on buyer requirements, specifications, and market expectations." },
        { title: "Retail Branding", text: "Brand identity, packaging development, private-label coordination, and retail product presentation." },
        { title: "Wholesale & Distribution", text: "Business-to-business supply, wholesale trading, distribution coordination, and market development." },
        { title: "Product Development", text: "Coordination with local manufacturers and production partners to develop products for specific market requirements." },
        { title: "Business Development", text: "Local market research, supplier identification, business introductions, and international partnership development." },
      ],
    },
    categories: {
      eyebrow: "Product categories",
      title: "Discover Products from Nepal and Global Markets",
      intro: "We explore opportunities across selected product categories, connecting international buyers with potential suppliers and market-ready products.",
      cta: { label: "View Product Catalogue", href: "/products" },
    },
    globalTrade: {
      eyebrow: "Global trade",
      title: "Bridging Business Opportunities",
      intro: "We see significant potential for business cooperation. DAI Trade Hub aims to facilitate two-way trading opportunities by connecting Nepalese suppliers with global buyers and introducing selected international products to the Nepalese market.",
      cta: { label: "Let's Explore Global Business Opportunities", href: "/global-trade" },
    },
    privateLabel: {
      eyebrow: "Retail branding & private label",
      title: "Transforming Products into Market-Ready Brands",
      intro: "We support retail branding and private-label business opportunities by coordinating product sourcing, packaging development, brand presentation, and production partnerships.",
      capabilities: ["Private Label Development", "Product Branding Coordination", "Packaging Design Coordination", "OEM / ODM Project Coordination", "Product Specification Development", "Retail Market Adaptation", "Supplier and Manufacturer Coordination"],
      exampleTitle: "Illustrative business example",
      exampleText: "A global retail company interested in launching a Nepal-origin tea or coffee brand can explore supplier identification, product selection, packaging coordination, and export arrangements through DAI Trade Hub.",
      photo: PHOTOS.tea,
      cta: { label: "Discuss a Private Label Project", href: PRIVATE_LABEL_HREF },
    },
    process: {
      eyebrow: "Our business process",
      title: "From Business Idea to Market Opportunity",
      steps: [
        { title: "Understand Requirements", text: "We understand the buyer's needs, product specifications, target market, and business objectives." },
        { title: "Identify Suppliers", text: "We coordinate with potential manufacturers, producers, and suppliers." },
        { title: "Product Evaluation", text: "We coordinate samples, specifications, quality information, and commercial discussions." },
        { title: "Branding & Packaging", text: "We coordinate suitable branding and packaging development with relevant partners." },
        { title: "Trade Coordination", text: "We support commercial documentation, logistics coordination, and export or import arrangements." },
        { title: "Distribution & Growth", text: "We support business partners in developing long-term supply and distribution opportunities." },
      ],
    },
    why: {
      eyebrow: "Why work with DAI Trade Hub?",
      title: "A Practical Partner for International Business",
      intro: "We believe successful international trade depends on trust, communication, reliable suppliers, and a clear understanding of both markets.",
      items: ["Nepal-Based Business Coordination", "Global Market Understanding", "Flexible Product Sourcing", "Business-to-Business Cooperation", "Private-Label Project Coordination", "Long-Term Partnership Approach"],
    },
    partnership: {
      eyebrow: "Strategic partnership",
      title: "Let's Build Something Together",
      paragraphs: [
        "We welcome cooperation with global companies, international buyers, manufacturers, retail brands, distributors, wholesalers, and investment partners.",
        "Whether you are looking for Nepalese products, exploring the Nepalese market, developing private-label products, or establishing a new international supply channel, we welcome the opportunity to discuss your business objectives.",
      ],
      photo: PHOTOS.crafts,
      primaryCta: { label: "Become Our Business Partner", href: "/partnerships" },
      secondaryCta: { label: "Contact Our Team", href: "/contact" },
    },
    finalCta: {
      title: "Your Next Business Opportunity Starts Here.",
      text: "Connect with DAI Trade Hub to explore international trading, product sourcing, retail branding, and global business opportunities.",
      primary: { label: "Start a Business Discussion", href: "/contact" },
    },
  },

  aboutPage: {
    seo: { title: "About Us", description: "Learn about DAI Trade Hub Pvt. Ltd., a Nepal-based trading and business development company: our vision, mission, business philosophy, values and commitment." },
    hero: { eyebrow: "About us", title: "About DAI Trade Hub", subtitle: "Connecting Businesses, Products, and Markets Through International Trade.", photo: PHOTOS.kathmandu },
    who: {
      eyebrow: "Who we are",
      title: "A Nepal-based trading and business development company",
      paragraphs: [
        "DAI Trade Hub Pvt. Ltd. is a Nepal-based trading and business development company focused on creating international business connections and market opportunities.",
        "Our activities include product sourcing, import and export coordination, retail branding, private-label development, wholesale trading, and distribution partnerships.",
        "We aim to serve as a reliable local business partner for international companies interested in Nepal and for Nepalese businesses looking to explore international markets.",
      ],
      photo: PHOTOS.tea,
    },
    vision: "To become a trusted international trading partner connecting Nepal and global markets.",
    mission: "To develop reliable business connections, identify quality products, coordinate efficient supply channels, and create sustainable opportunities for our business partners.",
    philosophy: {
      eyebrow: "Our business philosophy",
      title: "Trade built on trust",
      text: "We believe that successful trading is not only about buying and selling products. It is about building trust, understanding markets, maintaining quality, and developing long-term relationships.",
    },
    valuesTitle: "Our Core Values",
    values: ["Integrity", "Partnership", "Quality", "Innovation", "Transparency", "Sustainability"],
    commitment: "We are committed to developing business opportunities through responsible sourcing, transparent communication, professional coordination, and mutually beneficial partnerships.",
    cta: {
      title: "Let's start a business conversation.",
      text: "Tell us about your products, target market and objectives. Our team will review your inquiry.",
      primary: { label: "Contact Our Team", href: "/contact" },
      secondary: { label: "Partnership Opportunities", href: "/partnerships" },
    },
  },

  productsPage: {
    seo: { title: "Products & Sourcing Opportunities", description: "Product categories DAI Trade Hub sources on request: Himalayan tea and coffee, herbs and spices, handicrafts, pashmina and textiles, food, retail and selected industrial products." },
    hero: { eyebrow: "Products", title: "Our Products & Sourcing Opportunities", subtitle: "Exploring Quality Products from Nepal and International Markets.", photo: PHOTOS.spices },
    heroCta: { label: "Request Product Information", href: "/contact?type=Product%20Sourcing" },
    intro: {
      eyebrow: "Product categories",
      title: "Categories we explore with buyers",
      intro: "We connect international buyers with potential suppliers across the categories below. Specific products, packaging, minimum order quantities and supply availability are confirmed per inquiry.",
    },
    availabilityNote:
      "Categories listed here are sourcing opportunities, not a statement of ready stock. Each is marked available, sourcing on request or under development. Certifications, MOQ, supply capacity and export readiness are shared only once confirmed with the relevant supplier.",
    cta: {
      title: "Looking for a specific product?",
      text: "Share your specifications, target market and estimated quantities. We will coordinate with potential suppliers and respond with what can be confirmed.",
      primary: { label: "Request Product Information", href: "/contact?type=Product%20Sourcing" },
    },
  },

  globalTradePage: {
    seo: { title: "Global Trade & Business Cooperation", description: "Two-way international trade between Nepal and global markets: cooperation models, sourcing, import and export coordination and DAI Trade Hub's coordination role." },
    hero: { eyebrow: "Global trade", title: "Global Trade & Business Cooperation", subtitle: "Creating New Opportunities Through Two-Way International Trade.", photo: PHOTOS.coffee },
    twoWay: {
      eyebrow: "Two-way trade",
      title: "Bridging Business Opportunities",
      intro: "DAI Trade Hub aims to facilitate two-way trading opportunities by connecting Nepalese suppliers with global buyers and introducing selected international products to the Nepalese market.",
      fromNepal: FROM_NEPAL,
      toNepal: TO_NEPAL,
    },
    models: { eyebrow: "How we cooperate", title: "Business Cooperation Models", items: ["Direct Import & Export", "Product Sourcing Agreements", "Exclusive Distribution", "Private-Label Projects", "Joint Product Development", "Strategic Business Partnerships"] },
    role: {
      eyebrow: "What we do",
      title: "Our Coordination Role",
      items: ["Local Supplier Identification", "Product Information Collection", "Sample Coordination", "Commercial Communication", "Import/Export Documentation Coordination", "Local Market Development Support"],
      note: "Freight, customs brokerage and similar regulated services are carried out by licensed service providers; DAI Trade Hub coordinates the commercial and documentation side with them.",
      photo: PHOTOS.packaging,
    },
    cta: {
      title: "Let's Build a Stronger Trade Relationship.",
      text: "Tell us whether you are buying from Nepal, selling into Nepal, or exploring a longer-term cooperation.",
      primary: { label: "Start a Trade Inquiry", href: "/contact?type=Export%20Inquiry" },
      secondary: { label: "Explore Products", href: "/products" },
    },
  },

  retailBrandingPage: {
    seo: { title: "Retail Branding & Private Label Solutions", description: "Private-label and retail branding coordination from Nepal: brand development, packaging, OEM/ODM coordination and market adaptation, with an illustrative Nepal tea project." },
    hero: { eyebrow: "Retail branding", title: "Retail Branding & Private Label Solutions", subtitle: "Developing Products for Modern Retail Markets.", photo: PHOTOS.textile },
    intro: {
      eyebrow: "Introduction",
      title: "From product concept to commercial opportunity",
      paragraphs: [
        "DAI Trade Hub aims to support companies seeking to develop, source, package, and introduce products under their own brands.",
        "Through coordination with suppliers, manufacturers, designers, and packaging partners, we seek to connect product concepts with commercial opportunities.",
      ],
      photo: PHOTOS.packaging,
    },
    services: {
      eyebrow: "Our service areas",
      title: "What we coordinate",
      items: [
        { title: "Brand Development", text: "Coordination of brand concepts, product identity, and market positioning." },
        { title: "Private Label", text: "Support in identifying suitable manufacturing and sourcing partners for private-label projects." },
        { title: "Packaging Development", text: "Coordination of packaging materials, design requirements, labeling, and product presentation." },
        { title: "OEM / ODM Coordination", text: "Business coordination with potential manufacturers for customized products." },
        { title: "Market Adaptation", text: "Support in identifying product and packaging requirements for target markets." },
      ],
      note: "Design, manufacturing and packaging production are carried out by partner companies; DAI Trade Hub coordinates the project between you and them.",
    },
    example: {
      eyebrow: "Example project · illustrative",
      title: "Nepal-Origin Premium Tea – Global Retail Market",
      disclaimer: "This is a hypothetical workflow showing how a private-label project could run. It does not describe an existing client, product or completed project.",
      steps: [
        "Identify Nepalese tea suppliers.",
        "Select suitable product grades.",
        "Coordinate samples and specifications.",
        "Develop global-market packaging with the brand partner.",
        "Review relevant food and labeling requirements.",
        "Coordinate export and distribution.",
      ],
      photo: PHOTOS.tea,
    },
    cta: {
      title: "Start Your Private Label Project",
      text: "Share your product concept, target market and brand requirements, and we will discuss how the project could be coordinated.",
      primary: { label: "Start Your Private Label Project", href: PRIVATE_LABEL_HREF },
    },
  },

  servicesPage: {
    seo: { title: "Our Services", description: "Eight service areas: import and export, product sourcing, retail branding and packaging, wholesale and distribution, product development, logistics coordination, market research and partnership coordination." },
    hero: { eyebrow: "Services", title: "Our Services", subtitle: "Trading, sourcing, branding and business development services connecting Nepal with international markets.", photo: PHOTOS.meeting },
    intro: {
      title: "Eight service areas",
      intro: "Each service notes how it is delivered. Where an activity requires specialist or licensed providers — such as freight, customs clearance, manufacturing or packaging production — DAI Trade Hub coordinates the work and the provider performs it.",
    },
    cta: {
      title: "Discuss your requirements",
      text: "Tell us which service you need and what you want to achieve. We will explain what we coordinate directly and which partners would be involved.",
      primary: { label: "Send a Business Inquiry", href: "/contact" },
      secondary: { label: "Global Trade", href: "/global-trade" },
    },
  },

  partnershipsPage: {
    seo: { title: "Partnership Opportunities", description: "Partner with DAI Trade Hub: trading, sourcing, exclusive distribution, private-label, manufacturing, joint business development and investment cooperation." },
    hero: {
      eyebrow: "Partnership opportunities",
      title: "Grow Your Business with DAI Trade Hub",
      subtitle: "We welcome opportunities to collaborate with international buyers, manufacturers, retail companies, distributors, wholesalers, and strategic business partners.",
      photo: PHOTOS.meeting,
    },
    heroCta: { label: "Submit Partnership Inquiry", href: PARTNERSHIP_HREF },
    models: {
      eyebrow: "Partnership models",
      title: "Ways we can work together",
      items: ["International Trading Partnership", "Product Sourcing Partnership", "Exclusive Distribution Partnership", "Private-Label Development Partnership", "Manufacturing & Production Partnership", "Joint Business Development", "Investment and Strategic Cooperation"],
    },
    audiences: {
      title: "Who Can Partner With Us?",
      items: ["Global Retail Companies", "International Trading Companies", "Product Manufacturers", "Wholesale Distributors", "Retail Brand Owners", "Nepalese Producers and Suppliers", "International Investors"],
    },
    cta: {
      title: "Partnership Inquiry",
      text: "Tell us about your company, products, target market, and proposed business cooperation.",
      primary: { label: "Submit Partnership Inquiry", href: PARTNERSHIP_HREF },
      secondary: { label: "Contact Our Team", href: "/contact" },
    },
  },

  contactPage: {
    seo: { title: "Contact Us", description: "Contact DAI Trade Hub in Kathmandu, Nepal for import, export, product sourcing, private label, distribution and partnership inquiries." },
    hero: {
      eyebrow: "Contact us",
      title: "Let's Start a Business Conversation",
      subtitle: "Whether you are interested in importing, exporting, product sourcing, retail branding, distribution, or business partnerships, our team welcomes your inquiry.",
      photo: PHOTOS.kathmandu,
    },
    infoTitle: "Contact Information",
    formTitle: "Send a Business Inquiry",
    successTitle: "Inquiry sent",
    successMessage: "Thank you for contacting DAI Trade Hub. Your inquiry has been received. Our team will review your message and respond as soon as possible.",
  },
};
