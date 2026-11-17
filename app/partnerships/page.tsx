import Link from "next/link";
import { CheckList, CtaBand, Heading, JsonLd, PageHero, Section } from "@/components/ui";
import { PARTNER_AUDIENCES, PARTNERSHIP_MODELS, PHOTOS } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/partnerships",
  title: "Partnership Opportunities",
  description:
    "Partner with DAI Trade Hub: trading, sourcing, exclusive distribution, private-label, manufacturing, joint business development and investment cooperation.",
});

const CTA_HREF = "/contact?type=Investment%20%2F%20Strategic%20Partnership";

export default function PartnershipsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Partnership Opportunities", path: "/partnerships" }])} />
      <PageHero
        eyebrow="Partnership opportunities"
        title="Grow Your Business with DAI Trade Hub"
        subtitle="We welcome opportunities to collaborate with international buyers, manufacturers, retail companies, distributors, wholesalers, and strategic business partners."
        photo={PHOTOS.meeting}
      >
        <Link href={CTA_HREF} className="btn-gold">Submit Partnership Inquiry</Link>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow="Partnership models" title="Ways we can work together" />
            <ol className="mt-8 divide-y divide-line border-y border-line">
              {PARTNERSHIP_MODELS.map((m, i) => (
                <li key={m} className="flex items-baseline gap-5 py-4">
                  <span className="font-heading text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg text-ink">{m}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-sm bg-cream p-8 sm:p-10">
            <h2 className="h-section">Who Can Partner With Us?</h2>
            <div className="mt-8"><CheckList items={PARTNER_AUDIENCES} /></div>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Partnership Inquiry"
        text="Tell us about your company, products, target market, and proposed business cooperation."
        primary={{ label: "Submit Partnership Inquiry", href: CTA_HREF }}
        secondary={{ label: "Contact Our Team", href: "/contact" }}
      />
    </>
  );
}
