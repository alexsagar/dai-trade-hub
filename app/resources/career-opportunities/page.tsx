import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Briefcase, Heart, TrendingUp, Users } from "lucide-react";
import { Reveal } from "@/components/Animations";

export const metadata: Metadata = {
  title: "Career Opportunities | DAI Trade Hub",
  description: "Join our team and help shape the future of agriculture in Nepal.",
};

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-forest-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/about-company.png" alt="Careers at DAI Trade Hub" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/about" className="hover:text-white/70 transition-colors">Resources</Link>
              <span>/</span>
              <span className="text-white/60">Career Opportunities</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="w-16 h-16 rounded bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-sm">
              <Briefcase className="w-8 h-8" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-heading text-[3rem] md:text-[4rem] text-white leading-[1.05] mb-6 max-w-3xl">
              Build a Career with Purpose
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              Join a passionate team dedicated to transforming Nepal&apos;s agricultural landscape through innovation, integrity, and hard work.
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
                  Why Work With Us?
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  At DAI Trade Hub, we believe our greatest asset is our people. From agronomists in the field to logistics coordinators in the office, every role is critical to our mission of empowering farming communities and ensuring food security.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-muted text-lg leading-relaxed mb-10">
                  We offer a collaborative, fast-paced environment where innovation is encouraged, and hard work is rewarded. Whether you are an experienced professional or a recent graduate eager to make a difference, there is a place for you to grow your career with us.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="space-y-4">
                  {[
                    "Competitive compensation and benefits packages",
                    "Opportunities for continuous learning and development",
                    "Inclusive, diverse, and collaborative culture",
                    "Direct impact on the national agricultural economy",
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
                  <TrendingUp className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Growth</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Clear pathways for career advancement within a rapidly expanding company.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="bg-surface p-8 rounded-lg h-full border border-border">
                  <Heart className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Well-being</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Comprehensive health coverage and flexible working arrangements.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-surface p-8 rounded-lg h-full border border-border">
                  <Users className="w-8 h-8 text-forest mb-4" />
                  <h3 className="font-heading text-xl text-charcoal mb-3">Community</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Be part of a tight-knit team that values collaboration over competition.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-heading text-[2.25rem] text-charcoal mb-4">Current Openings</h2>
              <p className="text-muted leading-relaxed">
                We are always looking for talented individuals to join our team. Currently, we do not have specific open roles listed online, but we encourage proactive applications.
              </p>
            </div>
          </Reveal>
          
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg border border-border text-center">
             <Reveal delay={0.1}>
               <h3 className="font-heading text-xl text-charcoal mb-4">Submit a General Application</h3>
               <p className="text-muted mb-8 leading-relaxed">
                 Send us your resume and a brief cover letter explaining how your skills and experience can contribute to the success of DAI Trade Hub. Our HR team will keep your profile on file for future opportunities.
               </p>
               <a 
                 href="mailto:hr@dainepal.com" 
                 className="inline-flex items-center justify-center bg-forest text-white px-8 py-3 rounded text-sm font-semibold tracking-wide hover:bg-forest-dark transition-colors"
               >
                 Email Resume to hr@dainepal.com
               </a>
             </Reveal>
          </div>
        </div>
      </section>

    </>
  );
}
