import { CtaBand, Heading, JsonLd, PageHero, Photo, Section } from "@/components/ui";
import { BRANDING_SERVICES, PHOTOS, TEA_PROJECT_STEPS } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/retail-branding",
  title: "Retail Branding & Private Label Solutions",
  description:
    "Private-label and retail branding coordination from Nepal: brand development, packaging, OEM/ODM coordination and market adaptation, with an illustrative Nepal tea project.",
});

const CTA_HREF = "/contact?type=Retail%20Branding%20%2F%20Private%20Label";

export default function RetailBrandingPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Retail Branding", path: "/retail-branding" }])} />
      <PageHero
        eyebrow="Retail branding"
        title="Retail Branding & Private Label Solutions"
        subtitle="Developing Products for Modern Retail Markets."
        photo={PHOTOS.textile}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow="Introduction" title="From product concept to commercial opportunity" />
            <div className="mt-6 space-y-4 leading-relaxed">
              <p>
                DAI Trade Hub aims to support companies seeking to develop, source, package, and introduce products under
                their own brands.
              </p>
              <p>
                Through coordination with suppliers, manufacturers, designers, and packaging partners, we seek to connect
                product concepts with commercial opportunities.
              </p>
            </div>
          </div>
          <Photo photo={PHOTOS.packaging} className="aspect-[4/3]" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </Section>

      <Section tone="cream">
        <Heading eyebrow="Our service areas" title="What we coordinate" />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {BRANDING_SERVICES.map((s) => (
            <li key={s.title} className="bg-white p-8">
              <h3 className="text-xl">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          Design, manufacturing and packaging production are carried out by partner companies; DAI Trade Hub coordinates
          the project between you and them.
        </p>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Example project · illustrative</p>
            <h2 className="h-section mt-3">Nepal-Origin Premium Tea – Global Retail Market</h2>
            <p className="lead mt-4">
              This is a hypothetical workflow showing how a private-label project could run. It does not describe an
              existing client, product or completed project.
            </p>
            <Photo photo={PHOTOS.tea} className="mt-8 aspect-[16/10]" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <ol className="space-y-0 self-center">
            {TEA_PROJECT_STEPS.map((step, i) => (
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

      <CtaBand
        title="Start Your Private Label Project"
        text="Share your product concept, target market and brand requirements, and we will discuss how the project could be coordinated."
        primary={{ label: "Start Your Private Label Project", href: CTA_HREF }}
      />
    </>
  );
}
