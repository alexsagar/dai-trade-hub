"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/constants";
import { Reveal, StaggerContainer, staggerItem } from "@/components/Animations";

const categories = ["All", ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-forest-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/gallery-farm.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-5">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Gallery</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-heading text-[2.75rem] md:text-[3.25rem] text-white leading-[1.1] mb-4">
              Gallery
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-white/60 max-w-xl">
              Explore our operations, facilities, and the agricultural landscapes
              where we work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          {/* Filters */}
          <Reveal className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-[13px] font-medium rounded-full border transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-forest border-forest text-white"
                    : "border-border text-muted hover:border-forest hover:text-forest"
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                    <div className="p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-white/80">
                        {img.category}
                      </span>
                      <p className="text-sm text-white mt-1">{img.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
