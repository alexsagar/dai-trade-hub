import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Factory, ShieldCheck, Box, Zap } from "lucide-react";
import { Reveal } from "@/components/Animations";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Food Processing & Packaging | DAI Trade Hub",
  description: "State-of-the-art processing facilities for grains, fruits, vegetables, and dairy products with quality packaging.",
};

export default function FoodProcessingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-forest-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/service-food-processing.png" alt="Food Processing" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white/60">Food Processing</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="w-16 h-16 rounded bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-sm">
              <Factory className="w-8 h-8" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading text-[3rem] md:text-[4rem] text-white leading-[1.05] mb-6 max-w-3xl">
              Food Processing & Packaging
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              Adding value to raw agricultural produce through modern, hygienic processing lines and export-grade packaging solutions.
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
                  From Farm to Shelf
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Transforming raw agricultural harvest into high-value consumer goods requires state-of-the-art facilities and uncompromising hygiene standards. Our food processing division bridges the gap between local farmers and global supermarket shelves.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-muted text-lg leading-relaxed mb-10">
                  We process grains, pulses, fruits, and vegetables using automated sorting, cleaning, and milling equipment. Our operations are fully certified to meet international food safety regulations, ensuring every packed product retains its maximum nutritional value and shelf life.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="space-y-4">
                  {[
                    "Automated grain milling and sorting",
                    "Fruit and vegetable grading and preservation",
                    "ISO and HACCP certified hygiene standards",
                    "Eco-friendly, export-ready packaging solutions",
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
                  <h3 className="font-heading text-xl text-charcoal mb-3">Food Safety</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Strict adherence to international food safety protocols in controlled environments.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="bg-surface p-8 rounded-lg h-full">
                  <Zap className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Modern Tech</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Utilizing automated European machinery for precision sorting and milling.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-surface p-8 rounded-lg h-full">
                  <Box className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Custom Packaging</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Retail-ready and bulk packaging options tailored to buyer specifications.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="bg-surface p-8 rounded-lg h-full">
                  <CheckCircle2 className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Zero Waste</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Commitment to minimizing processing waste by converting by-products into livestock feed.
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
            title="Our Facilities"
            subtitle="Take a look inside our modern processing plants."
          />
          <div className="grid md:grid-cols-3 gap-4">
            <Reveal className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/service-food-processing.png" alt="Processing" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </Reveal>
            <Reveal delay={0.1} className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/gallery-produce.png" alt="Produce" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </Reveal>
            <Reveal delay={0.2} className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/images/service-cold-storage.png" alt="Storage" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-heading text-[2.25rem] md:text-[2.75rem] text-white mb-4 leading-tight">
              Looking for a Processing Partner?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg text-white/60 mb-10 max-w-lg mx-auto">
              We offer white-label processing and contract packaging for agricultural businesses of all sizes.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-forest px-8 py-3.5 text-[13.5px] font-semibold tracking-wide rounded hover:bg-white/90 transition-colors"
            >
              Contact Our Team
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
