import Link from "next/link";
import { Info } from "lucide-react";
import { CtaBand, Heading, JsonLd, PageHero, Photo, Section } from "@/components/ui";
import { PHOTOS, PRODUCT_CATEGORIES, STATUS_LABEL, slugify } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/products",
  title: "Products & Sourcing Opportunities",
  description:
    "Product categories DAI Trade Hub sources on request: Himalayan tea and coffee, herbs and spices, handicrafts, pashmina and textiles, food, retail and selected industrial products.",
});

const inquiryHref = (category: string) =>
  `/contact?type=Product%20Sourcing&interest=${encodeURIComponent(category)}`;

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Products", path: "/products" }])} />
      <PageHero
        eyebrow="Products"
        title="Our Products & Sourcing Opportunities"
        subtitle="Exploring Quality Products from Nepal and International Markets."
        photo={PHOTOS.spices}
      >
        <Link href="/contact?type=Product%20Sourcing" className="btn-gold">Request Product Information</Link>
      </PageHero>

      <Section>
        <Heading
          eyebrow="Product categories"
          title="Categories we explore with buyers"
          intro="We connect international buyers with potential suppliers across the categories below. Specific products, packaging, minimum order quantities and supply availability are confirmed per inquiry."
        />

        <div className="mt-8 flex gap-3 rounded-sm border border-gold/40 bg-gold-pale/40 p-5 text-sm leading-relaxed">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" aria-hidden />
          <p>
            <strong className="text-ink">About availability:</strong> categories listed here are sourcing opportunities,
            not a statement of ready stock. Each is marked <em>available</em>, <em>sourcing on request</em> or{" "}
            <em>under development</em>. Certifications, MOQ, supply capacity and export readiness are shared only once
            confirmed with the relevant supplier.
          </p>
        </div>

        <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {PRODUCT_CATEGORIES.map((c) => (
            <li key={c.title} id={slugify(c.title)} className="scroll-mt-28">
              {c.photo && <Photo photo={c.photo} className="aspect-[16/9]" sizes="(min-width: 768px) 50vw, 100vw" />}
              <div className={c.photo ? "mt-6" : "border-t border-line pt-6"}>
                <span className="inline-block rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold text-ink">
                  {STATUS_LABEL[c.status]}
                </span>
                <h2 className="mt-4 text-2xl">{c.title}</h2>
                <p className="mt-2 leading-relaxed text-muted">{c.text}</p>
                <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                  <dt className="text-muted">Origin</dt>
                  <dd className="text-ink">{c.origin}</dd>
                  <dt className="text-muted">MOQ &amp; packaging</dt>
                  <dd className="text-ink">Confirmed per inquiry</dd>
                </dl>
                <Link href={inquiryHref(c.title)} className="btn-outline mt-6 !px-5 !py-2.5">
                  Inquire about {c.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Looking for a specific product?"
        text="Share your specifications, target market and estimated quantities. We will coordinate with potential suppliers and respond with what can be confirmed."
        primary={{ label: "Request Product Information", href: "/contact?type=Product%20Sourcing" }}
      />
    </>
  );
}
