import { CtaBand, Heading, JsonLd, PageHero, Photo, Section } from "@/components/ui";
import { cmsMetadata, getPage } from "@/lib/cms";
import { breadcrumbJsonLd } from "@/lib/site";

export const generateMetadata = cmsMetadata("retailBrandingPage", "/retail-branding");

export default async function RetailBrandingPage() {
  const p = await getPage("retailBrandingPage");
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Retail Branding", path: "/retail-branding" }])} />
      <PageHero {...p.hero} />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow={p.intro.eyebrow} title={p.intro.title} />
            <div className="mt-6 space-y-4 leading-relaxed">
              {p.intro.paragraphs.map((t) => <p key={t}>{t}</p>)}
            </div>
          </div>
          <Photo photo={p.intro.photo} className="aspect-[4/3]" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </Section>

      <Section tone="cream">
        <Heading eyebrow={p.services.eyebrow} title={p.services.title} />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {p.services.items.map((s) => (
            <li key={s.title} className="bg-white p-8">
              <h3 className="text-xl">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">{p.services.note}</p>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{p.example.eyebrow}</p>
            <h2 className="h-section mt-3">{p.example.title}</h2>
            <p className="lead mt-4">{p.example.disclaimer}</p>
            <Photo photo={p.example.photo} className="mt-8 aspect-[16/10]" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <ol className="space-y-0 self-center">
            {p.example.steps.map((step, i) => (
              <li key={step} className="flex gap-5 border-b border-line py-5 first:border-t">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-heading text-sm text-gold">
                  {i + 1}
                </span>
                <span className="pt-1.5 text-lg text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <CtaBand {...p.cta} />
    </>
  );
}
