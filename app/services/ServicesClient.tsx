"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Reveal, StaggerContainer, staggerItem } from "@/components/Animations";
import SectionHeader from "@/components/SectionHeader";

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-forest-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/service-fertilizers.png" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-5">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Services</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-heading text-[2.75rem] md:text-[3.25rem] text-white leading-[1.1] mb-4">
              Our Services
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-white/60 max-w-xl">
              Comprehensive agricultural and industrial solutions spanning the
              entire value chain, from farm inputs to international markets.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid - Full Detail */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="space-y-0 divide-y divide-border">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.04}>
                <div
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 lg:py-20 ${
                    i === 0 ? "pt-0" : ""
                  }`}
                >
                  {/* Image - alternate sides */}
                  <div className={`relative aspect-[16/10] rounded-lg overflow-hidden ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="w-12 h-12 rounded bg-surface flex items-center justify-center text-forest mb-5">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h2 className="font-heading text-[1.75rem] md:text-[2rem] text-charcoal leading-snug mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <p className="text-muted leading-relaxed mb-8 text-sm">
                      Our team of specialists ensures that every aspect of this service
                      meets the highest industry standards. We leverage our extensive
                      network of partners, modern facilities, and deep domain expertise
                      to deliver consistent results for our clients and communities.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-forest text-sm font-semibold tracking-wide hover:gap-3 transition-all duration-200"
                    >
                      Inquire About This Service
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-heading text-[2.25rem] md:text-[2.75rem] text-white mb-4 leading-tight">
              Need a Custom Solution?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg text-white/60 mb-10 max-w-lg mx-auto">
              We tailor our services to meet the specific needs of your operation.
              Let&apos;s discuss how we can help.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-forest px-8 py-3.5 text-[13.5px] font-semibold tracking-wide rounded hover:bg-white/90 transition-colors"
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
