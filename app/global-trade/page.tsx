import { CheckList, CtaBand, Heading, JsonLd, PageHero, Photo, Section } from "@/components/ui";
import { COOPERATION_MODELS, COORDINATION_ROLE, FROM_NEPAL, PHOTOS, TO_NEPAL } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/global-trade",
  title: "Global Trade & Business Cooperation",
  description:
    "Two-way international trade between Nepal and global markets: cooperation models, sourcing, import and export coordination and DAI Trade Hub's coordination role.",
});

export default function GlobalTradePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Global Trade", path: "/global-trade" }])} />
      <PageHero
        eyebrow="Global trade"
        title="Global Trade & Business Cooperation"
        subtitle="Creating New Opportunities Through Two-Way International Trade."
        photo={PHOTOS.coffee}
      />

      <Section>
        <Heading
          eyebrow="Two-way trade"
          title="Bridging Business Opportunities"
          intro="DAI Trade Hub aims to facilitate two-way trading opportunities by connecting Nepalese suppliers with global buyers and introducing selected international products to the Nepalese market."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-sm bg-cream p-8 sm:p-10">
            <p className="eyebrow">Export</p>
            <h3 className="mt-2 text-2xl">From Nepal</h3>
            <div className="mt-6"><CheckList items={FROM_NEPAL} /></div>
          </div>
          <div className="rounded-sm bg-ink p-8 text-white sm:p-10">
            <p className="eyebrow !text-gold">Import</p>
            <h3 className="mt-2 text-2xl !text-white">To Nepal</h3>
            <ul className="mt-6 grid gap-3">
              {TO_NEPAL.map((i) => (
                <li key={i} className="border-b border-white/10 pb-3 text-white/85">{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow="How we cooperate" title="Business Cooperation Models" />
            <ol className="mt-8 divide-y divide-line border-y border-line">
              {COOPERATION_MODELS.map((m, i) => (
                <li key={m} className="flex items-baseline gap-5 py-4">
                  <span className="font-heading text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg text-ink">{m}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <Heading eyebrow="What we do" title="Our Coordination Role" />
            <div className="mt-8"><CheckList items={COORDINATION_ROLE} /></div>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Freight, customs brokerage and similar regulated services are carried out by licensed service providers;
              DAI Trade Hub coordinates the commercial and documentation side with them.
            </p>
            <Photo photo={PHOTOS.packaging} className="mt-8 aspect-[16/9]" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </Section>

      <CtaBand
        title="Let's Build a Stronger Trade Relationship."
        text="Tell us whether you are buying from Nepal, selling into Nepal, or exploring a longer-term cooperation."
        primary={{ label: "Start a Trade Inquiry", href: "/contact?type=Export%20Inquiry" }}
        secondary={{ label: "Explore Products", href: "/products" }}
      />
    </>
  );
}
