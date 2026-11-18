import { defineArrayMember, defineField, defineType } from "sanity";

// Internal links must be site paths (e.g. /contact or /products#herbs-spices); external
// links are allowed so a CTA can point to a document or partner page if ever needed.
const linkRule = (Rule: any) =>
  Rule.required().custom((v: string | undefined) =>
    !v || /^\/[^\s]*$/.test(v) || /^https:\/\/[^\s]+$/.test(v) || /^mailto:[^\s]+$/.test(v)
      ? true
      : "Use a site path starting with / (for example /contact), or a full https:// address.",
  );

export const photo = defineType({
  name: "photo",
  title: "Photograph",
  type: "image",
  options: { hotspot: true },
  description: "Use only photos the company owns or is licensed to use. Fill in the credit fields for third-party images.",
  fields: [
    defineField({
      name: "alt",
      title: "Description for screen readers (alt text)",
      type: "string",
      description: "Describe what the photo shows, e.g. “Tea garden in Ilam, eastern Nepal”. Do not imply facilities or partners that are not real.",
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({ name: "credit", title: "Photographer / owner", type: "string", description: "Shown on the Image Credits page." }),
    defineField({ name: "licence", title: "Licence", type: "string", description: "For example “CC BY-SA 4.0”, “CC0 1.0” or “Owned by DAI Trade Hub”." }),
    defineField({ name: "sourceUrl", title: "Source link", type: "url", description: "Where the image came from (required by most Creative Commons licences)." }),
  ],
  validation: (Rule) =>
    Rule.custom((value: any) =>
      value?.asset && !value?.licence ? { message: "Add the licence so the image can be credited correctly.", level: "warning" } as any : true,
    ),
});

export const cta = defineType({
  name: "cta",
  title: "Button",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Button text", type: "string", validation: (Rule) => Rule.required().max(60) }),
    defineField({
      name: "href",
      title: "Link",
      type: "string",
      description: "A page on this site, e.g. /contact or /contact?type=Product%20Sourcing to pre-select the inquiry type.",
      validation: linkRule,
    }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});

export const card = defineType({
  name: "card",
  title: "Item",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "text", title: "Description", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
  ],
});

export const seo = defineType({
  name: "seo",
  title: "Search & sharing",
  type: "object",
  description: "Controls how this page appears in Google and when shared on social media.",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: "title",
      title: "Page title",
      type: "string",
      description: "Shown in the browser tab and search results. “| DAI Trade Hub” is added automatically (except on the homepage).",
      validation: (Rule) => Rule.required().max(70).warning("Keep titles under about 60 characters."),
    }),
    defineField({
      name: "description",
      title: "Search description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().min(50).max(170).warning("Aim for 120–160 characters."),
    }),
    defineField({ name: "ogImage", title: "Social sharing image", type: "photo", description: "Optional. 1200 × 630 px works best. Defaults to the site sharing image." }),
    defineField({
      name: "noindex",
      title: "Hide from search engines",
      type: "boolean",
      initialValue: false,
      description: "Only switch on for pages that should not appear in Google.",
    }),
  ],
});

const headingFields = [
  defineField({ name: "eyebrow", title: "Small label above heading", type: "string" }),
  defineField({ name: "title", title: "Heading", type: "string", validation: (Rule) => Rule.required() }),
  defineField({ name: "intro", title: "Introduction", type: "text", rows: 3 }),
];

export const hero = defineType({
  name: "hero",
  title: "Page banner",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Small label", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "title", title: "Main heading (H1)", type: "string", description: "One clear heading per page.", validation: (Rule) => Rule.required() }),
    defineField({ name: "subtitle", title: "Subheading", type: "text", rows: 2, validation: (Rule) => Rule.required() }),
    defineField({ name: "photo", title: "Background photo", type: "photo", validation: (Rule) => Rule.required() }),
  ],
});

export const ctaBand = defineType({
  name: "ctaBand",
  title: "Call-to-action band",
  type: "object",
  description: "The dark band near the bottom of the page.",
  fields: [
    defineField({ name: "title", title: "Heading", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "text", title: "Text", type: "text", rows: 2, validation: (Rule) => Rule.required() }),
    defineField({ name: "primary", title: "Main button", type: "cta", validation: (Rule) => Rule.required() }),
    defineField({ name: "secondary", title: "Second button (optional)", type: "cta" }),
  ],
});

/** A titled section with optional label/intro plus extra fields. */
export function section(name: string, title: string, extra: ReturnType<typeof defineField>[] = [], opts: { intro?: boolean; description?: string } = {}) {
  return defineField({
    name,
    title,
    type: "object",
    description: opts.description,
    options: { collapsible: true, collapsed: false },
    fields: [...(opts.intro === false ? headingFields.slice(0, 2) : headingFields), ...extra],
  });
}

export const stringList = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    type: "array",
    description,
    of: [defineArrayMember({ type: "string" })],
    validation: (Rule) => Rule.required().min(1),
  });

export const textList = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    type: "array",
    description,
    of: [defineArrayMember({ type: "text", rows: 3 } as any)],
    validation: (Rule) => Rule.required().min(1),
  });

export const cardList = (name: string, title: string) =>
  defineField({ name, title, type: "array", of: [defineArrayMember({ type: "card" })], validation: (Rule) => Rule.required().min(1) });

export const objectTypes = [photo, cta, card, seo, hero, ctaBand];
