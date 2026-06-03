import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Microscope, Dna, Lightbulb, LineChart } from "lucide-react";
import { Reveal } from "@/components/Animations";

export const metadata: Metadata = {
  title: "Research & Innovation | DAI Trade Hub",
  description: "Dedicated R&D in crop science, soil management, and agricultural technology to advance farming practices.",
};

export default function ResearchInnovationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-forest-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/service-research.png" alt="Research and Innovation" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-white/70 transition-colors">Resources</Link>
              <span>/</span>
              <span className="text-white/60">Research & Innovation</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="w-16 h-16 rounded bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-sm">
              <Microscope className="w-8 h-8" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading text-[3rem] md:text-[4rem] text-white leading-[1.05] mb-6 max-w-3xl">
              Research & Innovation
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              Pioneering advancements in crop science, soil management, and precision agriculture to future-proof Nepal&apos;s farming sector.
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
                  Innovating for Tomorrow&apos;s Harvest
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  Climate change, soil degradation, and resource scarcity demand new agricultural solutions. At DAI Trade Hub, our dedicated Research and Development teams work tirelessly to evaluate and adapt global agricultural innovations for the unique topography and climate of Nepal.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-muted text-lg leading-relaxed mb-10">
                  Through experimental farms, soil analysis labs, and partnerships with agricultural universities, we test new seed varieties, optimize fertilizer formulations, and explore smart-farming technologies.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="space-y-4">
                  {[
                    "Climate-resilient seed adaptation trials",
                    "Precision agriculture and IoT monitoring",
                    "Biological pest control alternatives",
                    "Data-driven soil nutrient mapping",
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
                  <Dna className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Crop Science</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Evaluating high-yield, drought-resistant varieties suited for local microclimates.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="bg-surface p-8 rounded-lg h-full border border-border">
                  <LineChart className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Data Analytics</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Analyzing weather patterns and yield data to provide predictive planting insights.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-surface p-8 rounded-lg h-full border border-border">
                  <Lightbulb className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Smart Tech</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Piloting drone spraying, automated irrigation, and sensor-based soil monitoring.
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
              Collaborate With Us
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg text-white/60 mb-10 max-w-lg mx-auto">
              Are you an ag-tech startup, researcher, or institution looking to trial agricultural innovations?
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-forest px-8 py-3.5 text-[13.5px] font-semibold tracking-wide rounded hover:bg-white/90 transition-colors"
            >
              Partner on R&D
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
