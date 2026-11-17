import { CtaBand, Heading, JsonLd, PageHero, Section } from "@/components/ui";
import { PHOTOS, SERVICES } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/services",
  title: "Our Services",
  description:
    "Eight service areas: import and export, product sourcing, retail branding and packaging, wholesale and distribution, product development, logistics coordination, market research and partnership coordination.",
});

const DELIVERY = {
  direct: { label: "Coordinated by DAI Trade Hub", className: "border-ink/20 text-ink" },
  partners: { label: "Delivered with external providers", className: "border-gold/50 bg-gold-pale/50 text-gold-deep" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", path: "/services" }])} />
      <PageHero
        eyebrow="Services"
        title="Our Services"
        subtitle="Trading, sourcing, branding and business development services connecting Nepal with international markets."
        photo={PHOTOS.meeting}
      />

      <Section>
        <Heading
          title="Eight service areas"
          intro="Each service notes how it is delivered. Where an activity requires specialist or licensed providers — such as freight, customs clearance, manufacturing or packaging production — DAI Trade Hub coordinates the work and the provider performs it."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <li key={s.title} className="flex flex-col rounded-sm border border-line p-8">
              <span className="font-heading text-2xl text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 text-xl">{s.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{s.text}</p>
              <span className={`mt-6 self-start rounded-full border px-3 py-1 text-xs font-semibold ${DELIVERY[s.delivery].className}`}>
                {DELIVERY[s.delivery].label}
              </span>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand
        title="Discuss your requirements"
        text="Tell us which service you need and what you want to achieve. We will explain what we coordinate directly and which partners would be involved."
        primary={{ label: "Send a Business Inquiry", href: "/contact" }}
        secondary={{ label: "Global Trade", href: "/global-trade" }}
      />
    </>
  );
}
