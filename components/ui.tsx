import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Photo } from "@/lib/cms/types";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here except for "<", which is escaped to keep </script> out.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  photo,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  photo: Photo;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src={photo.src}
        alt=""
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="-z-10 object-cover opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="container-x py-20 sm:py-28">
        <p className="eyebrow rise !text-gold">{eyebrow}</p>
        <h1 className="rise rise-2 mt-4 max-w-3xl text-4xl leading-[1.1] !text-white sm:text-5xl">{title}</h1>
        <p className="rise rise-3 mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{subtitle}</p>
        {children && <div className="rise rise-3 mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  tone = "white",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "white" | "cream";
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${tone === "cream" ? "bg-cream" : "bg-white"} ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function Heading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h-section mt-3">{title}</h2>
      {intro && <p className="lead mt-4">{intro}</p>}
    </div>
  );
}

export function CheckList({ items, cols = 1 }: { items: readonly string[]; cols?: 1 | 2 }) {
  return (
    <ul className={`grid gap-3 ${cols === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" aria-hidden />
          <span className="text-ink">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Photo({ photo, className = "", sizes }: { photo: Photo; className?: string; sizes: string }) {
  return (
    <div className={`relative overflow-hidden rounded-sm bg-cream ${className}`}>
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-deep hover:text-ink">
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
    </Link>
  );
}

export function CtaBand({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="container-x flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="h-section !text-white">{title}</h2>
          <p className="mt-4 text-lg text-white/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={primary.href} className="btn-gold">
            {primary.label} <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          {secondary && (
            <Link href={secondary.href} className="btn-outline-light">{secondary.label}</Link>
          )}
        </div>
      </div>
    </section>
  );
}
