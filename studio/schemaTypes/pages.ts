import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons/Document";
import { HomeIcon } from "@sanity/icons/Home";
import { cardList, section, stringList, textList } from "./objects";

const seoField = defineField({ name: "seo", title: "Search & sharing", type: "seo", validation: (Rule) => Rule.required() });
const heroField = defineField({ name: "hero", title: "Page banner", type: "hero", validation: (Rule) => Rule.required() });
const ctaField = (name = "cta", title = "Call-to-action band") => defineField({ name, title, type: "ctaBand", validation: (Rule) => Rule.required() });
const ctaButton = (name: string, title: string, description?: string) =>
  defineField({ name, title, type: "cta", description, validation: (Rule) => Rule.required() });
const photoField = (name = "photo", title = "Photo") => defineField({ name, title, type: "photo", validation: (Rule) => Rule.required() });
const textField = (name: string, title: string, description?: string) =>
  defineField({ name, title, type: "text", rows: 3, description, validation: (Rule) => Rule.required() });
const label = (name: string, title: string, description?: string) =>
  defineField({ name, title, type: "string", description, validation: (Rule) => Rule.required() });
const labels = (name: string, title: string, fields: [string, string][], description?: string) =>
  defineField({
    name,
    title,
    type: "object",
    description,
    options: { collapsible: true, collapsed: true },
    fields: fields.map(([n, t]) => label(n, t)),
  });

function pageType(name: string, title: string, path: string, fields: ReturnType<typeof defineField>[], icon = DocumentIcon) {
  return defineType({
    name,
    title,
    type: "document",
    icon,
    fields: [...fields, seoField],
    preview: { prepare: () => ({ title, subtitle: path }) },
  });
}

export const homePage = pageType(
  "homePage",
  "Homepage",
  "/",
  [
    defineField({
      name: "hero",
      title: "Top banner",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Small label", type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "title", title: "Main heading (H1)", type: "string", validation: (Rule) => Rule.required() }),
        textField("subtitle", "Subheading"),
        textField("supportingText", "Supporting text"),
        photoField("photo", "Background photo"),
        ctaButton("primaryCta", "Main button"),
        ctaButton("secondaryCta", "Second button"),
      ],
    }),
    section("intro", "Company introduction", [
      textList("paragraphs", "Paragraphs"),
      stringList("highlights", "Highlights (tick list)"),
      photoField(),
      ctaButton("cta", "Button"),
    ]),
    section("core", "Core business", [
      cardList("items", "Business areas"),
      defineField({ name: "linkLabel", title: "Link text to the Services page", type: "string", validation: (Rule) => Rule.required() }),
    ]),
    section("categories", "Product categories", [ctaButton("cta", "Button")], {
      description: "The categories shown here are the Product categories with “Show on homepage” switched on.",
    }),
    section("globalTrade", "Global trade", [ctaButton("cta", "Button")], {
      description: "The “From Nepal” and “To Nepal” lists come from the Global Trade page.",
    }),
    section("privateLabel", "Retail branding & private label", [
      stringList("capabilities", "Capabilities"),
      defineField({ name: "exampleTitle", title: "Example heading", type: "string", validation: (Rule) => Rule.required() }),
      textField("exampleText", "Example text", "Keep this clearly illustrative — do not describe it as a real client project."),
      photoField(),
      ctaButton("cta", "Button"),
    ]),
    section("process", "Business process", [label("stepLabel", "Step label", "Shown before each step number, e.g. “Step 01”."), cardList("steps", "Steps")], { intro: false }),
    section("why", "Why work with us", [stringList("items", "Reasons")]),
    section("partnership", "Strategic partnership", [
      textList("paragraphs", "Paragraphs"),
      photoField(),
      ctaButton("primaryCta", "Main button"),
      ctaButton("secondaryCta", "Second button"),
    ], { intro: false }),
    ctaField("finalCta", "Final call to action"),
  ],
  HomeIcon,
);

export const aboutPage = pageType("aboutPage", "About Us", "/about", [
  heroField,
  section("who", "Who we are", [textList("paragraphs", "Paragraphs"), photoField()], { intro: false }),
  label("visionLabel", "Vision label"),
  textField("vision", "Vision"),
  label("missionLabel", "Mission label"),
  textField("mission", "Mission"),
  section("philosophy", "Business philosophy", [textField("text", "Text")], { intro: false }),
  defineField({ name: "valuesTitle", title: "Core values heading", type: "string", validation: (Rule) => Rule.required() }),
  stringList("values", "Core values"),
  label("commitmentLabel", "Commitment label"),
  textField("commitment", "Our commitment"),
  ctaField(),
]);

export const productsPage = pageType("productsPage", "Products page", "/products", [
  heroField,
  ctaButton("heroCta", "Banner button"),
  section("intro", "Introduction"),
  label("availabilityLabel", "Availability note — bold start"),
  textField("availabilityNote", "Availability note", "Explains that categories are sourcing opportunities, not confirmed stock. Keep this note."),
  labels("statusLabels", "Availability badges", [
    ["available", "Available"],
    ["onRequest", "Sourcing on request"],
    ["inDevelopment", "Under development"],
  ], "Wording of the badge on each product. Which badge a product shows is chosen on the product itself."),
  labels("detailLabels", "Product detail labels", [
    ["origin", "Origin"],
    ["specifications", "Specifications"],
    ["packaging", "Packaging"],
    ["moq", "Minimum order"],
    ["certifications", "Certifications"],
    ["supplyAvailability", "Supply availability"],
    ["exportStatus", "Export status"],
    ["moqPackaging", "Shown when MOQ and packaging are empty — label"],
    ["confirmedPerInquiry", "Shown when MOQ and packaging are empty — text"],
  ]),
  label("inquireLabel", "Product button text", "Followed by the product name, e.g. “Inquire about Herbs & Spices”."),
  ctaField(),
]);

export const globalTradePage = pageType("globalTradePage", "Global Trade", "/global-trade", [
  heroField,
  section("twoWay", "Two-way trade", [
    label("fromEyebrow", "Export box — small label"),
    label("fromTitle", "Export box — heading", "Also used on the homepage."),
    stringList("fromNepal", "From Nepal (export)", "Also used on the homepage."),
    label("toEyebrow", "Import box — small label"),
    label("toTitle", "Import box — heading", "Also used on the homepage."),
    stringList("toNepal", "To Nepal (import)", "Also used on the homepage."),
  ]),
  section("models", "Cooperation models", [stringList("items", "Models")], { intro: false }),
  section("role", "Coordination role", [
    stringList("items", "Activities"),
    textField("note", "Note on external providers"),
    photoField(),
  ], { intro: false }),
  ctaField(),
]);

export const retailBrandingPage = pageType("retailBrandingPage", "Retail Branding", "/retail-branding", [
  heroField,
  section("intro", "Introduction", [textList("paragraphs", "Paragraphs"), photoField()], { intro: false }),
  section("services", "Service areas", [cardList("items", "Service areas"), textField("note", "Note on partners")], { intro: false }),
  section("example", "Example project", [
    textField("disclaimer", "Disclaimer", "Must state that the example is illustrative and not an existing client or project."),
    stringList("steps", "Workflow steps"),
    photoField(),
  ], { intro: false }),
  ctaField(),
]);

export const servicesPage = pageType("servicesPage", "Services page", "/services", [
  heroField,
  defineField({
    name: "intro",
    title: "Introduction",
    type: "object",
    description: "The services themselves are edited under “Services”.",
    fields: [
      defineField({ name: "title", title: "Heading", type: "string", validation: (Rule) => Rule.required() }),
      textField("intro", "Introduction"),
    ],
  }),
  labels("deliveryLabels", "Delivery badges", [
    ["direct", "Coordinated by DAI Trade Hub"],
    ["partners", "Delivered with external providers"],
  ], "Wording of the badge on each service. Which badge a service shows is chosen on the service itself."),
  ctaField(),
]);

export const partnershipsPage = pageType("partnershipsPage", "Partnership Opportunities", "/partnerships", [
  heroField,
  ctaButton("heroCta", "Banner button"),
  section("models", "Partnership models", [stringList("items", "Models")], { intro: false }),
  defineField({
    name: "audiences",
    title: "Who can partner",
    type: "object",
    fields: [
      defineField({ name: "title", title: "Heading", type: "string", validation: (Rule) => Rule.required() }),
      stringList("items", "Partner types"),
    ],
  }),
  ctaField(),
]);

export const contactPage = pageType("contactPage", "Contact page", "/contact", [
  heroField,
  defineField({
    name: "infoTitle",
    title: "Contact details heading",
    type: "string",
    description: "The address, phone number and emails themselves are edited in Site settings → Contact details.",
    validation: (Rule) => Rule.required(),
  }),
  label("phoneLabel", "Phone label"),
  label("generalEmailLabel", "General email label"),
  label("tradeEmailLabel", "Trade email label"),
  defineField({ name: "formTitle", title: "Form heading", type: "string", validation: (Rule) => Rule.required() }),
  labels(
    "form",
    "Form wording",
    [
      ["requiredNote", "Required fields note"],
      ["nameLabel", "Full name label"],
      ["companyLabel", "Company label"],
      ["countryLabel", "Country label"],
      ["emailLabel", "Email label"],
      ["phoneLabel", "Phone label"],
      ["inquiryTypeLabel", "Inquiry type label"],
      ["inquiryTypePlaceholder", "Inquiry type — placeholder"],
      ["interestLabel", "Product or service interest label"],
      ["quantityLabel", "Order quantity label"],
      ["optionalNote", "“Optional” note"],
      ["messageLabel", "Message label"],
      ["consentText", "Consent sentence (before the link)"],
      ["consentLinkLabel", "Consent link text (opens Privacy Policy)"],
      ["submitLabel", "Send button"],
      ["sendingLabel", "Send button while sending"],
      ["sendAnotherLabel", "“Send another” button"],
      ["errorEmailPrompt", "Error box — text before the email address"],
      ["networkError", "Error when the connection fails"],
    ],
    "Visible wording only. Required fields (marked *), the inquiry types, validation and spam protection are fixed in the website code so they cannot be weakened by accident. The consent sentence must keep its meaning.",
  ),
  defineField({ name: "successTitle", title: "Message after sending — heading", type: "string", validation: (Rule) => Rule.required() }),
  textField("successMessage", "Message after sending — text", "Shown only after the inquiry email has actually been delivered."),
]);

export const pageTypes = [homePage, aboutPage, productsPage, globalTradePage, retailBrandingPage, servicesPage, partnershipsPage, contactPage];
