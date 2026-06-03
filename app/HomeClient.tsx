"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import {
  SERVICES,
  WHY_US,
  OPERATIONS,
  INFRASTRUCTURE,
  IMPACT_STATS,
  GALLERY_IMAGES,
} from "@/lib/constants";
import { Reveal, StaggerContainer, staggerItem, Counter } from "@/components/Animations";
import SectionHeader from "@/components/SectionHeader";

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-agriculture.png"
          alt="Agricultural landscape"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/65 to-forest-dark/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10 w-full pt-28 pb-20">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-wheat mb-6"
          >
            Established Agricultural Trading Company
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] text-white leading-[1.08] mb-6"
          >
            Connecting Agriculture,
            <br />
            Trade &amp; Sustainable
            <br />
            Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-white/70 text-lg leading-relaxed max-w-lg mb-10"
          >
            From agricultural inputs and trading to logistics, processing, and
            farmer support — we deliver integrated solutions across the entire
            agricultural value chain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white text-forest-dark px-7 py-3.5 text-[13.5px] font-semibold tracking-wide rounded hover:bg-white/90 transition-colors"
            >
              Explore Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/25 text-white px-7 py-3.5 text-[13.5px] font-semibold tracking-wide rounded hover:bg-white/10 hover:border-white/50 transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden lg:flex absolute bottom-12 right-10 gap-10"
        >
          {[
            { val: "500+", label: "Products" },
            { val: "10K+", label: "Farmers" },
            { val: "75", label: "Districts" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-3xl text-white">{s.val}</div>
              <div className="text-[11px] text-white/40 uppercase tracking-widest mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────── ABOUT PREVIEW ─────────────────────────── */
function AboutPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Side */}
          <Reveal direction="left" className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/about-company.png"
                alt="DAI Trade Hub facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-4 lg:-right-6 bg-forest text-white px-6 py-5 rounded-lg shadow-lg">
              <div className="font-heading text-3xl leading-none">10+</div>
              <div className="text-[11px] text-white/70 uppercase tracking-wider mt-1">
                Years of
                <br />
                Excellence
              </div>
            </div>
          </Reveal>

          {/* Content Side */}
          <div>
            <Reveal>
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-forest mb-4">
                About DAI Trade Hub
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-heading text-[2.25rem] md:text-[2.5rem] text-charcoal leading-[1.15] mb-6">
                Building a Stronger
                <br />
                Agricultural Future
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted leading-relaxed mb-6">
                DAI Trade Hub is a diversified agricultural trading and industrial
                company dedicated to strengthening Nepal&apos;s agricultural ecosystem.
                We operate across the full value chain — from sourcing quality
                inputs and machinery to processing, storage, and distribution.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-muted leading-relaxed mb-8">
                Our commitment extends beyond commerce. We invest in farmer
                training, sustainable practices, and agricultural research to
                build a resilient and prosperous farming community.
              </p>
            </Reveal>

            {/* Key Points */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8">
                {[
                  "Integrated value chain",
                  "Quality-first approach",
                  "Farmer-centric model",
                  "Sustainable practices",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0" />
                    <span className="text-sm font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-forest text-sm font-semibold tracking-wide hover:gap-3 transition-all duration-200"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SERVICES ─────────────────────────── */
function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <SectionHeader
          label="Core Business Areas"
          title="Comprehensive Agricultural Solutions"
          subtitle="From farm inputs to market delivery, we provide end-to-end services across the agricultural value chain."
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="bg-white group rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/20 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="w-10 h-10 rounded bg-surface flex items-center justify-center text-forest mb-4 group-hover:bg-forest group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg text-charcoal mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <Reveal className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-forest text-white px-7 py-3.5 text-[13.5px] font-semibold tracking-wide rounded hover:bg-forest-dark transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── WHY CHOOSE US ─────────────────────────── */
function WhySection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Heading */}
          <div className="lg:col-span-4">
            <Reveal>
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-forest mb-4">
                Why Choose Us
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-heading text-[2.25rem] md:text-[2.5rem] text-charcoal leading-[1.15] mb-5">
                The DAI Trade
                <br />
                Hub Advantage
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted leading-relaxed mb-6">
                We combine deep industry knowledge, reliable infrastructure, and
                a commitment to quality that sets us apart as a trusted partner
                in agricultural trade.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-forest text-sm font-semibold tracking-wide hover:gap-3 transition-all duration-200"
              >
                More About Our Values
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>

          {/* Right Grid */}
          <StaggerContainer className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
            {WHY_US.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="bg-white p-7 group"
              >
                <div className="w-11 h-11 rounded-full bg-surface flex items-center justify-center text-forest mb-5">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-[1.05rem] text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── OPERATIONS ─────────────────────────── */
function OperationsSection() {
  return (
    <section className="py-24 lg:py-32 bg-forest-dark overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <SectionHeader
          label="Our Operations"
          title="From Source to Market"
          subtitle="A streamlined process ensuring quality, efficiency, and reliability at every stage of the value chain."
          light
        />

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[38px] left-[10%] right-[10%] h-px bg-white/15" />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0">
            {OPERATIONS.map((op, i) => (
              <motion.div
                key={op.step}
                variants={staggerItem}
                className="relative flex flex-col items-center text-center lg:px-4"
              >
                {/* Step Number */}
                <div className="relative z-10 w-[76px] h-[76px] rounded-full border-2 border-white/20 bg-forest-dark flex items-center justify-center mb-6">
                  <span className="font-heading text-2xl text-white">{op.step}</span>
                </div>

                <h3 className="font-heading text-xl text-white mb-2">
                  {op.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-[200px]">
                  {op.description}
                </p>

                {/* Arrow (Desktop) */}
                {i < OPERATIONS.length - 1 && (
                  <div className="hidden lg:block absolute top-[38px] -translate-y-1/2 -right-3 text-white/30 bg-forest-dark">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── INFRASTRUCTURE ─────────────────────────── */
function InfraSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <SectionHeader
          label="Infrastructure"
          title="Built for Scale & Reliability"
          subtitle="Modern facilities and infrastructure designed to support the demands of agricultural trade and processing."
        />

        <StaggerContainer className="grid md:grid-cols-2 gap-5">
          {INFRASTRUCTURE.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="group relative aspect-[16/10] rounded-lg overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="font-heading text-2xl text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─────────────────────────── IMPACT STATS ─────────────────────────── */
function ImpactSection() {
  return (
    <section className="py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <SectionHeader
          label="Our Impact"
          title="Measured Results, Real Growth"
          subtitle="Our work is reflected in the numbers — empowering farmers, expanding markets, and building sustainable supply chains."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
          {IMPACT_STATS.map((stat) => (
            <Reveal key={stat.label} className="bg-white py-12 px-6 text-center">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                className="font-heading text-[3rem] lg:text-[3.5rem] text-forest leading-none"
              />
              <div className="text-sm text-muted font-medium mt-3">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── GALLERY PREVIEW ─────────────────────────── */
function GalleryPreview() {
  const images = GALLERY_IMAGES.slice(0, 6);
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <SectionHeader
          label="Gallery"
          title="Our Work in Pictures"
          subtitle="A visual journey through our operations, facilities, and the communities we serve."
        />

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className={`relative rounded-lg overflow-hidden group cursor-pointer ${
                i === 0 ? "row-span-2 aspect-auto min-h-[320px]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-white/80">
                    {img.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <Reveal className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-forest text-sm font-semibold tracking-wide hover:gap-3 transition-all duration-200"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── CTA BANNER ─────────────────────────── */
function CTABanner() {
  return (
    <section className="bg-forest py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="font-heading text-[2.25rem] md:text-[2.75rem] text-white mb-4 leading-tight">
            Ready to Partner With Us?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-lg text-white/60 mb-10 max-w-lg mx-auto">
            Whether you&apos;re a farmer, distributor, or business — let&apos;s build
            something together.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-forest px-8 py-3.5 text-[13.5px] font-semibold tracking-wide rounded hover:bg-white/90 transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/25 text-white px-8 py-3.5 text-[13.5px] font-semibold tracking-wide rounded hover:bg-white/10 hover:border-white/50 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── HOME PAGE ─────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesSection />
      <WhySection />
      <OperationsSection />
      <InfraSection />
      <ImpactSection />
      <GalleryPreview />
      <CTABanner />
    </>
  );
}
