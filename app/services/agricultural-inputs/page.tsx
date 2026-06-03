import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Sprout, ShieldCheck, Factory, Truck } from "lucide-react";
import { Reveal } from "@/components/Animations";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Agricultural Inputs & Fertilizers | DAI Trade Hub",
  description: "Premium quality fertilizers, seeds, and crop protection products sourced from trusted manufacturers worldwide.",
};

export default function AgriculturalInputsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-forest-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/service-fertilizers.png" alt="Agricultural Inputs" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white/60">Agricultural Inputs</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="w-16 h-16 rounded bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-sm">
              <Sprout className="w-8 h-8" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading text-[3rem] md:text-[4rem] text-white leading-[1.05] mb-6 max-w-3xl">
              Agricultural Inputs & Fertilizers
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              Empowering farmers with premium seeds, advanced crop protection, and high-yield fertilizers sourced from trusted global manufacturers.
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
                  Foundation for a Bountiful Harvest
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  At DAI Trade Hub, we understand that a successful harvest begins long before the seed is planted. It starts with choosing the right agricultural inputs. We supply farming communities across Nepal with the highest quality fertilizers, certified seeds, and safe crop protection solutions.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-muted text-lg leading-relaxed mb-10">
                  By partnering with industry-leading international manufacturers, we guarantee that every product we distribute meets strict quality and environmental standards. Our technical teams also work directly with farmers to ensure these inputs are used efficiently, maximizing yield while preserving soil health.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="space-y-4">
                  {[
                    "Premium organic and synthetic fertilizers",
                    "High-yield, climate-resilient seed varieties",
                    "Safe and effective crop protection chemicals",
                    "Soil testing and nutrient management advisory",
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
                  <ShieldCheck className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Certified Quality</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    All our inputs undergo rigorous quality assurance testing and comply with national agricultural standards.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="bg-surface p-8 rounded-lg h-full">
                  <Factory className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Global Partners</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Sourced directly from trusted international manufacturers to ensure consistent availability.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-surface p-8 rounded-lg h-full">
                  <Truck className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Nationwide Delivery</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    A robust distribution network ensuring essential inputs reach remote farming communities on time.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="bg-surface p-8 rounded-lg h-full">
                  <Sprout className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Yield Optimization</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Expert advisory services to help farmers select the right inputs for their specific soil type.
                  </p>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Image Gallery / Process */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <SectionHeader
            label="In Action"
            title="Empowering the Fields"
            subtitle="Seeing our premium inputs transforming farms across the region."
          />
          <div className="grid md:grid-cols-3 gap-4">
            <Reveal className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/hero-agriculture.png" alt="Agriculture" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </Reveal>
            <Reveal delay={0.1} className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/service-fertilizers.png" alt="Fertilizers" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </Reveal>
            <Reveal delay={0.2} className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/gallery-harvest.png" alt="Harvest" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-heading text-[2.25rem] md:text-[2.75rem] text-white mb-4 leading-tight">
              Secure Your Supply for the Next Season
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg text-white/60 mb-10 max-w-lg mx-auto">
              Contact our sales team to discuss bulk orders, distribution partnerships, or technical consultation.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-forest px-8 py-3.5 text-[13.5px] font-semibold tracking-wide rounded hover:bg-white/90 transition-colors"
            >
              Request a Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
