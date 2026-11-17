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
    section("process", "Business process", [cardList("steps", "Steps")], { intro: false }),
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
  textField("vision", "Vision"),
  textField("mission", "Mission"),
  section("philosophy", "Business philosophy", [textField("text", "Text")], { intro: false }),
  defineField({ name: "valuesTitle", title: "Core values heading", type: "string", validation: (Rule) => Rule.required() }),
  stringList("values", "Core values"),
  textField("commitment", "Our commitment"),
  ctaField(),
]);

export const productsPage = pageType("productsPage", "Products page", "/products", [
  heroField,
  ctaButton("heroCta", "Banner button"),
  section("intro", "Introduction"),
  textField("availabilityNote", "Availability note", "Explains that categories are sourcing opportunities, not confirmed stock. Keep this note."),
  ctaField(),
]);

export const globalTradePage = pageType("globalTradePage", "Global Trade", "/global-trade", [
  heroField,
  section("twoWay", "Two-way trade", [stringList("fromNepal", "From Nepal (export)"), stringList("toNepal", "To Nepal (import)")]),
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
  defineField({ name: "infoTitle", title: "Contact details heading", type: "string", validation: (Rule) => Rule.required() }),
  defineField({ name: "formTitle", title: "Form heading", type: "string", validation: (Rule) => Rule.required() }),
  defineField({ name: "successTitle", title: "Message after sending — heading", type: "string", validation: (Rule) => Rule.required() }),
  textField("successMessage", "Message after sending — text", "Shown only after the inquiry email has actually been delivered."),
]);

export const pageTypes = [homePage, aboutPage, productsPage, globalTradePage, retailBrandingPage, servicesPage, partnershipsPage, contactPage];
