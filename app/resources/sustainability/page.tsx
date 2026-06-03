import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Leaf, Recycle, Wind, Droplets } from "lucide-react";
import { Reveal } from "@/components/Animations";

export const metadata: Metadata = {
  title: "Sustainability | DAI Trade Hub",
  description: "Our commitment to eco-friendly practices, carbon footprint reduction, and environmental stewardship.",
};

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-forest-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/service-organic.png" alt="Sustainability" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-white/70 transition-colors">Resources</Link>
              <span>/</span>
              <span className="text-white/60">Sustainability</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="w-16 h-16 rounded bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-sm">
              <Leaf className="w-8 h-8" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading text-[3rem] md:text-[4rem] text-white leading-[1.05] mb-6 max-w-3xl">
              Our Commitment to Sustainability
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              We are dedicated to building an agricultural ecosystem that thrives today without compromising the environment of tomorrow.
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
                  Nurturing the Earth
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Agriculture is deeply intertwined with the health of our planet. At DAI Trade Hub, sustainability isn&apos;t just a buzzword; it&apos;s a core operational metric. We actively seek out and promote farming practices that restore soil vitality, conserve water, and reduce carbon emissions.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-muted text-lg leading-relaxed mb-10">
                  From expanding our portfolio of organic fertilizers to implementing zero-waste protocols in our processing facilities, every decision we make is evaluated through an environmental lens. Our goal is to lead Nepal&apos;s transition to a truly circular agricultural economy.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="space-y-4">
                  {[
                    "Promotion of organic and bio-fertilizers",
                    "Zero-waste food processing initiatives",
                    "Energy-efficient cold storage facilities",
                    "Water conservation and smart irrigation training",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-forest flex-shrink-0" />
                      <span className="text-charcoal font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Side - Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Reveal delay={0.1}>
                <div className="bg-surface p-8 rounded-lg h-full border border-border">
                  <Recycle className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Circular Economy</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Repurposing agricultural by-products into animal feed and biomass energy.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="bg-surface p-8 rounded-lg h-full border border-border">
                  <Wind className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Carbon Reduction</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Optimizing logistics routes and transitioning to renewable energy in our warehouses.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-surface p-8 rounded-lg h-full border border-border">
                  <Droplets className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Water Stewardship</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Training farmers in drip irrigation and rainwater harvesting techniques.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-heading text-[2.25rem] md:text-[2.75rem] text-white mb-4 leading-tight">
              Join Our Green Initiative
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg text-white/60 mb-10 max-w-lg mx-auto">
              Learn more about our organic product lines and how we can help your farm transition to sustainable practices.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-forest px-8 py-3.5 text-[13.5px] font-semibold tracking-wide rounded hover:bg-white/90 transition-colors"
            >
              Learn More
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
