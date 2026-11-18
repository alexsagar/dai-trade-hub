import { defineArrayMember, defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons/Cog";
import { PackageIcon } from "@sanity/icons/Package";
import { WrenchIcon } from "@sanity/icons/Wrench";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

const STATUS_OPTIONS = [
  { title: "Available (confirmed)", value: "available" },
  { title: "Sourcing on request", value: "on-request" },
  { title: "Under development", value: "in-development" },
];

const VERIFIED = "Leave empty unless confirmed with the supplier. Empty fields are not shown on the website.";

export const productCategory = defineType({
  name: "productCategory",
  title: "Product category",
  type: "document",
  icon: PackageIcon,
  orderings: [orderRankOrdering],
  groups: [
    { name: "main", title: "Main", default: true },
    { name: "verified", title: "Verified details" },
  ],
  fields: [
    orderRankField({ type: "productCategory" }),
    defineField({ name: "title", title: "Name", type: "string", group: "main", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Link anchor",
      type: "slug",
      group: "main",
      description: "Used in links such as /products#herbs-spices. Click Generate after setting the name.",
      options: { source: "title", maxLength: 60 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Availability status",
      type: "string",
      group: "main",
      options: { list: STATUS_OPTIONS, layout: "radio" },
      initialValue: "on-request",
      description: "Only choose “Available” when stock or supply is confirmed.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "origin", title: "Country of origin", type: "string", group: "main", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3, group: "main", validation: (Rule) => Rule.required() }),
    defineField({ name: "photo", title: "Photo", type: "photo", group: "main" }),
    defineField({ name: "showOnHome", title: "Show on homepage", type: "boolean", group: "main", initialValue: false }),
    defineField({ name: "homeTitle", title: "Homepage name (optional)", type: "string", group: "main", description: "Use when the homepage should show a different name." }),
    defineField({ name: "specifications", title: "Specifications", type: "array", group: "verified", of: [defineArrayMember({ type: "string" })], description: VERIFIED }),
    defineField({ name: "packaging", title: "Available packaging", type: "string", group: "verified", description: VERIFIED }),
    defineField({ name: "moq", title: "Minimum order quantity (MOQ)", type: "string", group: "verified", description: VERIFIED }),
    defineField({ name: "certifications", title: "Certifications", type: "array", group: "verified", of: [defineArrayMember({ type: "string" })], description: `${VERIFIED} Only list certificates you hold copies of.` }),
    defineField({ name: "supplyAvailability", title: "Supply availability", type: "string", group: "verified", description: VERIFIED }),
    defineField({ name: "exportStatus", title: "Export status", type: "string", group: "verified", description: VERIFIED }),
  ],
  preview: {
    select: { title: "title", status: "status", media: "photo" },
    prepare: ({ title, status, media }) => ({ title, subtitle: STATUS_OPTIONS.find((o) => o.value === status)?.title, media }),
  },
});

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: WrenchIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "service" }),
    defineField({ name: "title", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "text", title: "Description", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
    defineField({
      name: "delivery",
      title: "Who delivers it?",
      type: "string",
      options: {
        list: [
          { title: "Coordinated by DAI Trade Hub", value: "direct" },
          { title: "Delivered with external providers", value: "partners" },
        ],
        layout: "radio",
      },
      description: "Choose external providers when freight, customs, manufacturing or production is done by another company.",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "company", title: "Company", default: true },
    { name: "contact", title: "Contact details" },
    { name: "header", title: "Header" },
    { name: "footer", title: "Footer" },
    { name: "seo", title: "Search & sharing" },
  ],
  fields: [
    defineField({ name: "name", title: "Legal company name", type: "string", group: "company", validation: (Rule) => Rule.required() }),
    defineField({ name: "shortName", title: "Short name", type: "string", group: "company", validation: (Rule) => Rule.required() }),
    defineField({ name: "tagline", title: "Tagline (footer)", type: "string", group: "company", validation: (Rule) => Rule.required() }),
    defineField({ name: "street", title: "Street", type: "string", group: "contact", validation: (Rule) => Rule.required() }),
    defineField({ name: "city", title: "City", type: "string", group: "contact", validation: (Rule) => Rule.required() }),
    defineField({ name: "postalCode", title: "Postal code", type: "string", group: "contact" }),
    defineField({ name: "country", title: "Country", type: "string", group: "contact", validation: (Rule) => Rule.required() }),
    defineField({ name: "countryCode", title: "Country code (2 letters)", type: "string", group: "contact", validation: (Rule) => Rule.required().length(2).uppercase() }),
    defineField({ name: "phoneDisplay", title: "Phone (as displayed)", type: "string", group: "contact", validation: (Rule) => Rule.required() }),
    defineField({ name: "phoneIntl", title: "Phone (international format)", type: "string", group: "contact", description: "Used for click-to-call, e.g. +977-1-5107439.", validation: (Rule) => Rule.required().regex(/^\+[\d\s-]+$/, { name: "international phone" }) }),
    defineField({ name: "email", title: "General email", type: "string", group: "contact", validation: (Rule) => Rule.required().email() }),
    defineField({ name: "tradeEmail", title: "Trade inquiries email", type: "string", group: "contact", validation: (Rule) => Rule.required().email() }),
    defineField({ name: "phoneNote", title: "Text after phone number", type: "string", group: "contact", description: "For example “(Nepal)”. Shown in the footer and on the Contact page." }),
    defineField({
      name: "navigation",
      title: "Menu links",
      type: "array",
      group: "header",
      of: [defineArrayMember({ type: "cta" })],
      description: "The main menu, in order. Drag to reorder. Keep labels short so the menu fits on one line.",
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
    defineField({ name: "headerPrimaryCta", title: "Gold header button", type: "cta", group: "header", validation: (Rule) => Rule.required() }),
    defineField({ name: "headerSecondaryCta", title: "Outlined header button", type: "cta", group: "header", validation: (Rule) => Rule.required() }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "object",
      group: "footer",
      description: "The company name, tagline, address, phone and emails come from the Company and Contact details tabs.",
      fields: [
        defineField({
          name: "columns",
          title: "Link columns",
          type: "array",
          description: "The layout is designed for three columns.",
          of: [
            defineArrayMember({
              name: "footerColumn",
              title: "Column",
              type: "object",
              fields: [
                defineField({ name: "title", title: "Column heading", type: "string", validation: (Rule) => Rule.required() }),
                defineField({ name: "links", title: "Links", type: "array", of: [defineArrayMember({ type: "cta" })], validation: (Rule) => Rule.required().min(1) }),
              ],
              preview: { select: { title: "title" } },
            }),
          ],
          validation: (Rule) => Rule.required().min(1).max(3),
        }),
        defineField({ name: "contactTitle", title: "Contact column heading", type: "string", validation: (Rule) => Rule.required() }),
        defineField({ name: "copyright", title: "Copyright text", type: "string", description: "Shown after “© year Company name.”", validation: (Rule) => Rule.required() }),
        defineField({ name: "legalLinks", title: "Bottom links", type: "array", of: [defineArrayMember({ type: "cta" })], description: "Privacy Policy, Terms and Image Credits. Keep these pages linked." }),
      ],
    }),
    defineField({ name: "description", title: "Default search description", type: "text", rows: 3, group: "seo", validation: (Rule) => Rule.required().max(200) }),
    defineField({ name: "ogImage", title: "Default social sharing image", type: "photo", group: "seo", description: "Optional. 1200 × 630 px." }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});

export const documentTypes = [productCategory, service, siteSettings];
