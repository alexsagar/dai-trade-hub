import { Mail, MapPin, Phone } from "lucide-react";
import { JsonLd, PageHero, Section } from "@/components/ui";
import { cmsMetadata, getPage, getSiteSettings } from "@/lib/cms";
import { SITE_URL, breadcrumbJsonLd, telHref } from "@/lib/site";
import ContactForm from "./ContactForm";

export const generateMetadata = cmsMetadata("contactPage", "/contact");

export default async function ContactPage() {
  const [p, s] = await Promise.all([getPage("contactPage"), getSiteSettings()]);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact Us", path: "/contact" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${SITE_URL}/contact`,
          name: "Contact DAI Trade Hub",
          about: { "@id": `${SITE_URL}/#organization` },
        }}
      />
      <PageHero {...p.hero} />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.7fr]">
          <aside>
            <h2 className="text-2xl">{p.infoTitle}</h2>
            <address className="mt-8 space-y-7 not-italic">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-deep" aria-hidden />
                <div>
                  <p className="font-semibold text-ink">{s.name}</p>
                  <p>{s.street}, {s.city} {s.postalCode}, {s.country}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold-deep" aria-hidden />
                <div>
                  <p className="font-semibold text-ink">{p.phoneLabel}</p>
                  <a href={telHref(s.phoneIntl)} className="hover:text-gold-deep">{s.phoneDisplay} {s.phoneNote}</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-gold-deep" aria-hidden />
                <div>
                  <p className="font-semibold text-ink">{p.generalEmailLabel}</p>
                  <a href={`mailto:${s.email}`} className="hover:text-gold-deep">{s.email}</a>
                  <p className="mt-3 font-semibold text-ink">{p.tradeEmailLabel}</p>
                  <a href={`mailto:${s.tradeEmail}`} className="hover:text-gold-deep">{s.tradeEmail}</a>
                </div>
              </div>
            </address>
          </aside>

          <div className="relative">
            <h2 className="text-2xl">{p.formTitle}</h2>
            <div className="mt-8">
              <ContactForm successTitle={p.successTitle} successMessage={p.successMessage} copy={p.form} email={s.email} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
