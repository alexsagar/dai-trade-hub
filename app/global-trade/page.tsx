import { CheckList, CtaBand, Heading, JsonLd, PageHero, Photo, Section } from "@/components/ui";
import { cmsMetadata, getPage } from "@/lib/cms";
import { breadcrumbJsonLd } from "@/lib/site";

export const generateMetadata = cmsMetadata("globalTradePage", "/global-trade");

export default async function GlobalTradePage() {
  const p = await getPage("globalTradePage");
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Global Trade", path: "/global-trade" }])} />
      <PageHero {...p.hero} />

      <Section>
        <Heading eyebrow={p.twoWay.eyebrow} title={p.twoWay.title} intro={p.twoWay.intro} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-sm bg-cream p-8 sm:p-10">
            <p className="eyebrow">{p.twoWay.fromEyebrow}</p>
            <h3 className="mt-2 text-2xl">{p.twoWay.fromTitle}</h3>
            <div className="mt-6"><CheckList items={p.twoWay.fromNepal} /></div>
          </div>
          <div className="rounded-sm bg-ink p-8 text-white sm:p-10">
            <p className="eyebrow !text-gold">{p.twoWay.toEyebrow}</p>
            <h3 className="mt-2 text-2xl !text-white">{p.twoWay.toTitle}</h3>
            <ul className="mt-6 grid gap-3">
              {p.twoWay.toNepal.map((i) => (
                <li key={i} className="border-b border-white/10 pb-3 text-white/85">{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="cream">
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
          <div>
            <Heading eyebrow={p.role.eyebrow} title={p.role.title} />
            <div className="mt-8"><CheckList items={p.role.items} /></div>
            <p className="mt-6 text-sm leading-relaxed text-muted">{p.role.note}</p>
            <Photo photo={p.role.photo} className="mt-8 aspect-[16/9]" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </Section>

      <CtaBand {...p.cta} />
    </>
  );
}
