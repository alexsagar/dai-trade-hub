import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Ship, Globe, FileText, Anchor } from "lucide-react";
import { Reveal } from "@/components/Animations";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Import & Export Services | DAI Trade Hub",
  description: "End-to-end international trade facilitation with customs clearance, documentation, and global logistics management.",
};

export default function ImportExportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-forest-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/service-import-export.png" alt="Import Export" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white/60">Import & Export</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="w-16 h-16 rounded bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-sm">
              <Ship className="w-8 h-8" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading text-[3rem] md:text-[4rem] text-white leading-[1.05] mb-6 max-w-3xl">
              Import & Export Logistics
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              Connecting Nepal to global markets through seamless international trade facilitation, meticulous documentation, and robust supply chain management.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Content */}
            <div>
              <Reveal>
                <h2 className="font-heading text-[2.25rem] text-charcoal leading-snug mb-6">
                  Bridging Borders, Building Trade
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Navigating the complexities of international trade requires expertise, precision, and reliable networks. DAI Trade Hub serves as your trusted partner for importing critical agricultural inputs and exporting Nepal&apos;s finest produce to the world.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-muted text-lg leading-relaxed mb-10">
                  We handle the entire logistics pipeline—from freight forwarding and customs brokerage to compliance and final delivery. By eliminating cross-border friction, we allow local farmers and businesses to compete on a global scale.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="space-y-4">
                  {[
                    "Comprehensive customs clearance and brokerage",
                    "Air, sea, and land freight forwarding",
                    "Trade compliance and regulatory documentation",
                    "International market research and sourcing",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-forest flex-shrink-0" />
                      <span className="text-charcoal font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Side - Value Props Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Reveal delay={0.1}>
                <div className="bg-surface p-8 rounded-lg h-full">
                  <Globe className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Global Reach</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Active partnerships in multiple countries across Asia, Europe, and the Americas.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="bg-surface p-8 rounded-lg h-full">
                  <FileText className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Compliance Experts</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Specialized teams dedicated to navigating international tariffs, taxes, and trade laws.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-surface p-8 rounded-lg h-full">
                  <Anchor className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Secure Transit</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    End-to-end cargo insurance and real-time tracking for peace of mind.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="bg-surface p-8 rounded-lg h-full">
                  <Ship className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Multi-Modal</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Optimized routes utilizing a combination of sea, air, and land transportation.
                  </p>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <SectionHeader
            label="In Action"
            title="Logistics in Motion"
            subtitle="Moving critical goods across borders every single day."
          />
          <div className="grid md:grid-cols-3 gap-4">
            <Reveal className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/service-import-export.png" alt="Shipping" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </Reveal>
            <Reveal delay={0.1} className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/gallery-logistics.png" alt="Logistics" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </Reveal>
            <Reveal delay={0.2} className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/infra-distribution.png" alt="Distribution" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-heading text-[2.25rem] md:text-[2.75rem] text-white mb-4 leading-tight">
              Ready to Expand Your Markets?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg text-white/60 mb-10 max-w-lg mx-auto">
              Whether importing essential equipment or exporting raw goods, our logistics team is ready to assist.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-forest px-8 py-3.5 text-[13.5px] font-semibold tracking-wide rounded hover:bg-white/90 transition-colors"
            >
              Consult an Expert
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
