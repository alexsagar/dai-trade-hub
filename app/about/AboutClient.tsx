"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  Heart,
  Handshake,
  Globe,
  Sprout,
} from "lucide-react";
import { Reveal, StaggerContainer, staggerItem } from "@/components/Animations";
import SectionHeader from "@/components/SectionHeader";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparent and ethical practices in every transaction and partnership we build.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "Building long-term relationships with farmers, suppliers, and communities.",
  },
  {
    icon: Sprout,
    title: "Sustainability",
    description: "Championing environmentally responsible agriculture and eco-friendly solutions.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Maintaining the highest standards in product quality, service, and operations.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "Embracing new technologies and research to advance agricultural practices.",
  },
  {
    icon: Eye,
    title: "Accountability",
    description: "Taking responsibility for our impact on communities and the environment.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-forest-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/hero-agriculture.png" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-5">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">About Us</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-heading text-[2.75rem] md:text-[3.25rem] text-white leading-[1.1] mb-4">
              About DAI Trade Hub
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-white/60 max-w-xl">
              A diversified agricultural trading and industrial company dedicated to
              strengthening Nepal&apos;s agricultural ecosystem.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <Reveal direction="left">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/about-company.png"
                  alt="DAI Trade Hub operations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-forest mb-4">
                  Who We Are
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-heading text-[2.25rem] text-charcoal leading-[1.15] mb-6">
                  A Trusted Name in
                  <br />Agricultural Trade
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-muted leading-relaxed mb-5">
                  DAI Trade Hub Pvt. Ltd. is a registered Nepali company operating across
                  the agricultural value chain. Our business spans agricultural inputs
                  and fertilizers, food processing and packaging, import-export services,
                  cold storage and warehousing, machinery supply, and farmer training.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-muted leading-relaxed mb-8">
                  We work with farmers, distributors, government agencies, and
                  international partners to build a resilient agricultural
                  infrastructure that benefits everyone in the supply chain. Our
                  operations are guided by a commitment to quality, sustainability,
                  and the economic empowerment of farming communities.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    "Registered in Nepal",
                    "Full value chain coverage",
                    "Quality-certified operations",
                    "Pan-Nepal distribution",
                    "International trade capability",
                    "Community investment",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0" />
                      <span className="text-sm font-medium text-dark">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-28 bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
            {/* Mission */}
            <Reveal className="bg-white p-10 lg:p-14">
              <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-6">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-2xl text-charcoal mb-4">Our Mission</h3>
              <p className="text-muted leading-relaxed">
                To provide high-quality agricultural inputs, reliable trading services,
                and integrated supply chain solutions that empower farmers,
                strengthen food security, and drive sustainable economic growth
                across Nepal and the region.
              </p>
            </Reveal>

            {/* Vision */}
            <Reveal delay={0.1} className="bg-white p-10 lg:p-14">
              <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-6">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-2xl text-charcoal mb-4">Our Vision</h3>
              <p className="text-muted leading-relaxed">
                To be Nepal&apos;s most trusted and innovative agricultural trading
                company — recognized for excellence in quality, commitment to
                sustainability, and a transformative impact on farming communities
                and the broader agricultural industry.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <SectionHeader
            label="Our Values"
            title="Principles That Guide Us"
            subtitle="Our values define how we operate, how we treat our partners, and how we contribute to the industry."
          />

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                className="bg-white p-8 lg:p-10"
              >
                <div className="w-11 h-11 rounded-full bg-surface flex items-center justify-center text-forest mb-5">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg text-charcoal mb-2">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Commitment CTA */}
      <section className="bg-forest py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-heading text-[2.25rem] md:text-[2.75rem] text-white mb-4 leading-tight">
              Committed to Sustainable Agriculture
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg text-white/60 mb-10 max-w-lg mx-auto">
              We believe in building an agricultural future that is productive,
              equitable, and environmentally responsible.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-forest px-8 py-3.5 text-[13.5px] font-semibold tracking-wide rounded hover:bg-white/90 transition-colors"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
