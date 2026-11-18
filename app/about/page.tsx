import { CtaBand, Heading, JsonLd, PageHero, Photo, Section } from "@/components/ui";
import { cmsMetadata, getPage } from "@/lib/cms";
import { breadcrumbJsonLd } from "@/lib/site";

export const generateMetadata = cmsMetadata("aboutPage", "/about");

export default async function AboutPage() {
  const p = await getPage("aboutPage");
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About Us", path: "/about" }])} />
      <PageHero {...p.hero} />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow={p.who.eyebrow} title={p.who.title} />
            <div className="mt-6 space-y-4 leading-relaxed">
              {p.who.paragraphs.map((t) => <p key={t}>{t}</p>)}
            </div>
          </div>
          <Photo photo={p.who.photo} className="aspect-[4/3]" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-sm border border-line bg-white p-8 sm:p-10">
            <p className="eyebrow">{p.visionLabel}</p>
            <p className="mt-4 font-heading text-2xl leading-snug text-ink">{p.vision}</p>
          </div>
          <div className="rounded-sm border border-line bg-white p-8 sm:p-10">
            <p className="eyebrow">{p.missionLabel}</p>
            <p className="mt-4 font-heading text-2xl leading-snug text-ink">{p.mission}</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow={p.philosophy.eyebrow} title={p.philosophy.title} />
            <p className="lead mt-6">{p.philosophy.text}</p>
          </div>
          <div>
            <h2 className="h-section">{p.valuesTitle}</h2>
            <ul className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3">
              {p.values.map((v) => (
                <li key={v} className="bg-white px-5 py-6 font-heading text-lg text-ink">{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{p.commitmentLabel}</p>
          <p className="mt-4 font-heading text-2xl leading-snug text-ink sm:text-3xl">{p.commitment}</p>
        </div>
      </Section>

      <CtaBand {...p.cta} />
    </>
  );
}
