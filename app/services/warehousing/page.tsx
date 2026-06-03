import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Warehouse, ThermometerSnowflake, ShieldAlert, Truck, BarChart3 } from "lucide-react";
import { Reveal } from "@/components/Animations";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Warehousing & Cold Storage | DAI Trade Hub",
  description: "Temperature-controlled storage facilities and modern warehousing solutions ensuring product freshness and safety.",
};

export default function WarehousingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-forest-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/service-cold-storage.png" alt="Warehousing" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white/60">Warehousing</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="w-16 h-16 rounded bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-sm">
              <Warehouse className="w-8 h-8" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading text-[3rem] md:text-[4rem] text-white leading-[1.05] mb-6 max-w-3xl">
              Warehousing & Cold Storage
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              Preserving the quality and extending the shelf life of agricultural goods through state-of-the-art climate-controlled storage infrastructure.
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
                  Safeguarding Your Harvest
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Post-harvest loss is a significant challenge in agriculture. Our modern warehousing and cold storage facilities provide the critical infrastructure needed to preserve the quality and market value of perishable goods.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-muted text-lg leading-relaxed mb-10">
                  With over 50,000 sq. ft. of dedicated storage space strategically located near major transit hubs, we offer both ambient and temperature-controlled storage solutions tailored to grains, fresh produce, and dairy products.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="space-y-4">
                  {[
                    "Advanced multi-zone cold storage units",
                    "24/7 climate monitoring and security",
                    "Inventory management and digital tracking",
                    "Strategic locations for rapid distribution",
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
                  <ThermometerSnowflake className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Climate Control</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Precision temperature and humidity control tailored to specific produce requirements.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="bg-surface p-8 rounded-lg h-full">
                  <ShieldAlert className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">24/7 Security</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Round-the-clock surveillance, fire protection systems, and backup power generators.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-surface p-8 rounded-lg h-full">
                  <BarChart3 className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Inventory Tracking</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Digital WMS (Warehouse Management System) for real-time stock visibility and reporting.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="bg-surface p-8 rounded-lg h-full">
                  <Truck className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Cross-Docking</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Efficient loading bays designed for rapid transfer from storage to transport vehicles.
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
            title="Our Storage Infrastructure"
            subtitle="Massive capacity built for security and preservation."
          />
          <div className="grid md:grid-cols-3 gap-4">
            <Reveal className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/infra-warehouse.png" alt="Warehouse" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </Reveal>
            <Reveal delay={0.1} className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/service-cold-storage.png" alt="Cold Storage" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
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
              Need Storage Space?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg text-white/60 mb-10 max-w-lg mx-auto">
              We offer flexible, secure, and climate-controlled leasing options for your agricultural inventory.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-forest px-8 py-3.5 text-[13.5px] font-semibold tracking-wide rounded hover:bg-white/90 transition-colors"
            >
              Inquire About Space
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
