import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, GraduationCap, Users, BookOpen, Tractor } from "lucide-react";
import { Reveal } from "@/components/Animations";

export const metadata: Metadata = {
  title: "Farmer Training & Support | DAI Trade Hub",
  description: "Comprehensive training programs, field demonstrations, and technical advisory services for farming communities.",
};

export default function FarmerTrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-forest-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/service-training.png" alt="Farmer Training" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-white/70 transition-colors">Resources</Link>
              <span>/</span>
              <span className="text-white/60">Farmer Training</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="w-16 h-16 rounded bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-sm">
              <GraduationCap className="w-8 h-8" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading text-[3rem] md:text-[4rem] text-white leading-[1.05] mb-6 max-w-3xl">
              Farmer Training & Support
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              Empowering local communities with the knowledge, techniques, and support needed to build a resilient agricultural future.
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
                  Knowledge is the Best Fertilizer
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  We believe that the key to sustainable agriculture lies in the hands of the people working the land. At DAI Trade Hub, we go beyond just supplying inputs—we provide the education and technical support required to use those inputs effectively.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-muted text-lg leading-relaxed mb-10">
                  Our agronomists and technical teams travel across Nepal, hosting field demonstrations, workshops, and one-on-one consulting sessions. We teach modern farming practices, soil health management, and pest control techniques that increase yields while reducing environmental impact.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="space-y-4">
                  {[
                    "On-site field demonstrations and workshops",
                    "Soil testing and nutrient management education",
                    "Pest and disease identification training",
                    "Modern machinery operation and maintenance",
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
                  <Users className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Community First</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Collaborating with local cooperatives to reach thousands of smallholder farmers.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="bg-surface p-8 rounded-lg h-full border border-border">
                  <BookOpen className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Resource Materials</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Providing localized farming manuals and crop-specific guidelines in regional languages.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-surface p-8 rounded-lg h-full border border-border">
                  <Tractor className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Tech Adoption</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Training farmers to integrate modern machinery and digital tools into their daily workflow.
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
              Request a Training Session
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg text-white/60 mb-10 max-w-lg mx-auto">
              Are you part of a farming cooperative or community looking for expert agricultural guidance?
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-forest px-8 py-3.5 text-[13.5px] font-semibold tracking-wide rounded hover:bg-white/90 transition-colors"
            >
              Contact Our Agronomists
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
