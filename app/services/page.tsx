import { CtaBand, Heading, JsonLd, PageHero, Section } from "@/components/ui";
import { cmsMetadata, getPage, getServices } from "@/lib/cms";
import { breadcrumbJsonLd } from "@/lib/site";

export const generateMetadata = cmsMetadata("servicesPage", "/services");

const DELIVERY_CLASS = {
  direct: "border-ink/20 text-ink",
  partners: "border-gold/50 bg-gold-pale/50 text-gold-deep",
};

export default async function ServicesPage() {
  const [p, services] = await Promise.all([getPage("servicesPage"), getServices()]);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", path: "/services" }])} />
      <PageHero {...p.hero} />

      <Section>
        <Heading title={p.intro.title} intro={p.intro.intro} />
        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const kind = s.delivery === "partners" ? "partners" : "direct";
            return (
              <li key={s.title} className="flex flex-col rounded-sm border border-line p-8">
                <span className="font-heading text-2xl text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 text-xl">{s.title}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{s.text}</p>
                <span className={`mt-6 self-start rounded-full border px-3 py-1 text-xs font-semibold ${DELIVERY_CLASS[kind]}`}>{p.deliveryLabels[kind]}</span>
              </li>
            );
          })}
        </ol>
      </Section>

      <CtaBand {...p.cta} />
    </>
  );
}
