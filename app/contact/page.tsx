import { Mail, MapPin, Phone } from "lucide-react";
import { JsonLd, PageHero, Section } from "@/components/ui";
import { PHOTOS } from "@/lib/content";
import { COMPANY, SITE_URL, breadcrumbJsonLd, pageMetadata } from "@/lib/site";
import ContactForm from "./ContactForm";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact Us",
  description:
    "Contact DAI Trade Hub in Kathmandu, Nepal for import, export, product sourcing, private label, distribution and partnership inquiries.",
});

export default function ContactPage() {
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
      <PageHero
        eyebrow="Contact us"
        title="Let's Start a Business Conversation"
        subtitle="Whether you are interested in importing, exporting, product sourcing, retail branding, distribution, or business partnerships, our team welcomes your inquiry."
        photo={PHOTOS.kathmandu}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.7fr]">
          <aside>
            <h2 className="text-2xl">Contact Information</h2>
            <address className="mt-8 space-y-7 not-italic">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-deep" aria-hidden />
                <div>
                  <p className="font-semibold text-ink">{COMPANY.name}</p>
                  <p>{COMPANY.street}, {COMPANY.city} {COMPANY.postalCode}, {COMPANY.country}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold-deep" aria-hidden />
                <div>
                  <p className="font-semibold text-ink">Phone</p>
                  <a href={COMPANY.phoneHref} className="hover:text-gold-deep">{COMPANY.phoneDisplay} (Nepal)</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-gold-deep" aria-hidden />
                <div>
                  <p className="font-semibold text-ink">General inquiries</p>
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-gold-deep">{COMPANY.email}</a>
                  <p className="mt-3 font-semibold text-ink">Trade inquiries</p>
                  <a href={`mailto:${COMPANY.tradeEmail}`} className="hover:text-gold-deep">{COMPANY.tradeEmail}</a>
                </div>
              </div>
            </address>
          </aside>

          <div className="relative">
            <h2 className="text-2xl">Send a Business Inquiry</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
