import Link from "next/link";
import { CheckList, CtaBand, Heading, JsonLd, PageHero, Section } from "@/components/ui";
import { cmsMetadata, getPage } from "@/lib/cms";
import { breadcrumbJsonLd } from "@/lib/site";

export const generateMetadata = cmsMetadata("partnershipsPage", "/partnerships");

export default async function PartnershipsPage() {
  const p = await getPage("partnershipsPage");
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Partnership Opportunities", path: "/partnerships" }])} />
      <PageHero {...p.hero}>
        <Link href={p.heroCta.href} className="btn-gold">{p.heroCta.label}</Link>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow={p.models.eyebrow} title={p.models.title} />
            <ol className="mt-8 divide-y divide-line border-y border-line">
              {p.models.items.map((m, i) => (
                <li key={m} className="flex items-baseline gap-5 py-4">
                  <span className="font-heading text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg text-ink">{m}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-sm bg-cream p-8 sm:p-10">
            <h2 className="h-section">{p.audiences.title}</h2>
            <div className="mt-8"><CheckList items={p.audiences.items} /></div>
          </div>
        </div>
      </Section>

      <CtaBand {...p.cta} />
    </>
  );
}
