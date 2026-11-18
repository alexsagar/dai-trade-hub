import Link from "next/link";
import { Info } from "lucide-react";
import { stegaClean } from "next-sanity";
import { CtaBand, Heading, JsonLd, PageHero, Photo, Section } from "@/components/ui";
import { cmsMetadata, getPage, getProductCategories } from "@/lib/cms";
import type { ProductCategory, ProductsPage as Copy } from "@/lib/cms/types";
import { breadcrumbJsonLd } from "@/lib/site";

export const generateMetadata = cmsMetadata("productsPage", "/products");

const inquiryHref = (category: string) =>
  `/contact?type=Product%20Sourcing&interest=${encodeURIComponent(stegaClean(category))}`;

const STATUS_KEY = { available: "available", "on-request": "onRequest", "in-development": "inDevelopment" } as const;

// Detail rows appear only when the field has been filled in (i.e. confirmed by the company).
function details(c: ProductCategory, l: Copy["detailLabels"]): [string, string][] {
  const rows: [string, string | undefined][] = [
    [l.origin, c.origin],
    [l.specifications, c.specifications?.join(", ")],
    [l.packaging, c.packaging],
    [l.moq, c.moq],
    [l.certifications, c.certifications?.join(", ")],
    [l.supplyAvailability, c.supplyAvailability],
    [l.exportStatus, c.exportStatus],
  ];
  const filled = rows.filter((r): r is [string, string] => Boolean(r[1]));
  if (!c.packaging && !c.moq) filled.push([l.moqPackaging, l.confirmedPerInquiry]);
  return filled;
}

export default async function ProductsPage() {
  const [p, categories] = await Promise.all([getPage("productsPage"), getProductCategories()]);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Products", path: "/products" }])} />
      <PageHero {...p.hero}>
        <Link href={p.heroCta.href} className="btn-gold">{p.heroCta.label}</Link>
      </PageHero>

      <Section>
        <Heading eyebrow={p.intro.eyebrow} title={p.intro.title} intro={p.intro.intro} />

        <div className="mt-8 flex gap-3 rounded-sm border border-gold/40 bg-gold-pale/40 p-5 text-sm leading-relaxed">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" aria-hidden />
          <p>
            <strong className="text-ink">{p.availabilityLabel}</strong> {p.availabilityNote}
          </p>
        </div>

        <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {categories.map((c) => (
            <li key={c.slug} id={c.slug} className="scroll-mt-28">
              {c.photo && <Photo photo={c.photo} className="aspect-[16/9]" sizes="(min-width: 768px) 50vw, 100vw" />}
              <div className={c.photo ? "mt-6" : "border-t border-line pt-6"}>
                <span className="inline-block rounded-full border border-ink/15 px-3 py-1 text-xs font-semibold text-ink">
                  {p.statusLabels[STATUS_KEY[c.status] ?? "onRequest"]}
                </span>
                <h2 className="mt-4 text-2xl">{c.title}</h2>
                <p className="mt-2 leading-relaxed text-muted">{c.description}</p>
                <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                  {details(c, p.detailLabels).map(([k, v]) => (
                    <div key={k} className="contents">
                      <dt className="text-muted">{k}</dt>
                      <dd className="text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
                <Link href={inquiryHref(c.title)} className="btn-outline mt-6 !px-5 !py-2.5">
                  {p.inquireLabel} {c.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand {...p.cta} />
    </>
  );
}
