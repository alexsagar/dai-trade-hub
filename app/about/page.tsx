import { CtaBand, Heading, JsonLd, PageHero, Photo, Section } from "@/components/ui";
import { CORE_VALUES, PHOTOS } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/about",
  title: "About Us",
  description:
    "Learn about DAI Trade Hub Pvt. Ltd., a Nepal-based trading and business development company: our vision, mission, business philosophy, values and commitment.",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About Us", path: "/about" }])} />
      <PageHero
        eyebrow="About us"
        title="About DAI Trade Hub"
        subtitle="Connecting Businesses, Products, and Markets Through International Trade."
        photo={PHOTOS.kathmandu}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow="Who we are" title="A Nepal-based trading and business development company" />
            <div className="mt-6 space-y-4 leading-relaxed">
              <p>
                DAI Trade Hub Pvt. Ltd. is a Nepal-based trading and business development company focused on creating
                international business connections and market opportunities.
              </p>
              <p>
                Our activities include product sourcing, import and export coordination, retail branding, private-label
                development, wholesale trading, and distribution partnerships.
              </p>
              <p>
                We aim to serve as a reliable local business partner for international companies interested in Nepal
                and for Nepalese businesses looking to explore international markets.
              </p>
            </div>
          </div>
          <Photo photo={PHOTOS.tea} className="aspect-[4/3]" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-sm border border-line bg-white p-8 sm:p-10">
            <p className="eyebrow">Our vision</p>
            <p className="mt-4 font-heading text-2xl leading-snug text-ink">
              To become a trusted international trading partner connecting Nepal and global markets.
            </p>
          </div>
          <div className="rounded-sm border border-line bg-white p-8 sm:p-10">
            <p className="eyebrow">Our mission</p>
            <p className="mt-4 font-heading text-2xl leading-snug text-ink">
              To develop reliable business connections, identify quality products, coordinate efficient supply
              channels, and create sustainable opportunities for our business partners.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow="Our business philosophy" title="Trade built on trust" />
            <p className="lead mt-6">
              We believe that successful trading is not only about buying and selling products. It is about building
              trust, understanding markets, maintaining quality, and developing long-term relationships.
            </p>
          </div>
          <div>
            <h2 className="h-section">Our Core Values</h2>
            <ul className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3">
              {CORE_VALUES.map((v) => (
                <li key={v} className="bg-white px-5 py-6 font-heading text-lg text-ink">{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Our commitment</p>
          <p className="mt-4 font-heading text-2xl leading-snug text-ink sm:text-3xl">
            We are committed to developing business opportunities through responsible sourcing, transparent
            communication, professional coordination, and mutually beneficial partnerships.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Let's start a business conversation."
        text="Tell us about your products, target market and objectives. Our team will review your inquiry."
        primary={{ label: "Contact Our Team", href: "/contact" }}
        secondary={{ label: "Partnership Opportunities", href: "/partnerships" }}
      />
    </>
  );
}
