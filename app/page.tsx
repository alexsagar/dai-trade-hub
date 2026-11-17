import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArrowLink, CheckList, CtaBand, Heading, Photo, Section } from "@/components/ui";
import { getPage, getProductCategories } from "@/lib/cms";
import { pageMetadata } from "@/lib/site";

export async function generateMetadata() {
  const { seo } = await getPage("homePage", { stega: false });
  const meta = pageMetadata({ path: "/", title: seo.title, description: seo.description, ogImage: seo.ogImage, noindex: seo.noindex });
  return { ...meta, title: { absolute: seo.title } };
}

export default async function HomePage() {
  const [p, categories, trade] = await Promise.all([getPage("homePage"), getProductCategories(), getPage("globalTradePage")]);
  const homeCategories = categories.filter((c) => c.showOnHome);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src={p.hero.photo.src}
          alt=""
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="-z-10 object-cover object-[70%_center] opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
        <div className="container-x py-24 sm:py-32 lg:py-40">
          <p className="eyebrow rise !text-gold">{p.hero.eyebrow}</p>
          <h1 className="rise rise-2 mt-5 max-w-3xl text-4xl leading-[1.08] !text-white sm:text-5xl lg:text-6xl">{p.hero.title}</h1>
          <p className="rise rise-3 mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">{p.hero.subtitle}</p>
          <p className="rise rise-3 mt-4 max-w-2xl leading-relaxed text-white/70">{p.hero.supportingText}</p>
          <div className="rise rise-3 mt-10 flex flex-wrap gap-3">
            <Link href={p.hero.primaryCta.href} className="btn-gold">
              {p.hero.primaryCta.label} <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href={p.hero.secondaryCta.href} className="btn-outline-light">{p.hero.secondaryCta.label}</Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow={p.intro.eyebrow} title={p.intro.title} />
            <div className="mt-6 space-y-4 leading-relaxed">
              {p.intro.paragraphs.map((t) => <p key={t}>{t}</p>)}
            </div>
            <div className="mt-8">
              <CheckList items={p.intro.highlights} />
            </div>
            <Link href={p.intro.cta.href} className="btn-primary mt-10">{p.intro.cta.label}</Link>
          </div>
          <Photo photo={p.intro.photo} className="aspect-[4/3]" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </Section>

      {/* Core business */}
      <Section tone="cream">
        <Heading eyebrow={p.core.eyebrow} title={p.core.title} />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {p.core.items.map((item, i) => (
            <li key={item.title} className="bg-white p-8">
              <span className="font-heading text-2xl text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <ArrowLink href="/services">{p.core.linkLabel}</ArrowLink>
        </div>
      </Section>

      {/* Product categories */}
      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Heading eyebrow={p.categories.eyebrow} title={p.categories.title} intro={p.categories.intro} />
          <Link href={p.categories.cta.href} className="btn-outline shrink-0">{p.categories.cta.label}</Link>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeCategories.map((c) => (
            <li key={c.slug}>
              <Link href={`/products#${c.slug}`} className="group block">
                {c.photo && (
                  <Photo photo={c.photo} className="aspect-[3/2]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                )}
                <h3 className="mt-5 text-xl group-hover:text-gold-deep">{c.homeTitle || c.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{c.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Global trade */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Heading eyebrow={p.globalTrade.eyebrow} title={p.globalTrade.title} intro={p.globalTrade.intro} />
            <Link href={p.globalTrade.cta.href} className="btn-primary mt-8">{p.globalTrade.cta.label}</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-sm border border-line bg-white p-8">
              <h3 className="text-xl">From Nepal</h3>
              <div className="mt-5"><CheckList items={trade.twoWay.fromNepal} /></div>
            </div>
            <div className="rounded-sm border border-line bg-white p-8">
              <h3 className="text-xl">To Nepal</h3>
              <div className="mt-5"><CheckList items={trade.twoWay.toNepal} /></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Private label */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Photo photo={p.privateLabel.photo} className="order-last aspect-[4/3] lg:order-first" sizes="(min-width: 1024px) 50vw, 100vw" />
          <div>
            <Heading eyebrow={p.privateLabel.eyebrow} title={p.privateLabel.title} intro={p.privateLabel.intro} />
            <div className="mt-8"><CheckList items={p.privateLabel.capabilities} cols={2} /></div>
            <aside className="mt-8 border-l-2 border-gold pl-5 text-sm leading-relaxed text-muted">
              <p className="font-semibold text-ink">{p.privateLabel.exampleTitle}</p>
              <p className="mt-1">{p.privateLabel.exampleText}</p>
            </aside>
            <Link href={p.privateLabel.cta.href} className="btn-primary mt-8">{p.privateLabel.cta.label}</Link>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section tone="cream">
        <Heading eyebrow={p.process.eyebrow} title={p.process.title} />
        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {p.process.steps.map((step, i) => (
            <li key={step.title} className="border-t border-ink/15 pt-6">
              <p className="eyebrow">Step {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-xl">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Why work with us */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Heading eyebrow={p.why.eyebrow} title={p.why.title} intro={p.why.intro} />
          <CheckList items={p.why.items} cols={2} />
        </div>
      </Section>

      {/* Strategic partnership */}
      <Section tone="cream">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow={p.partnership.eyebrow} title={p.partnership.title} />
            <div className="mt-6 space-y-4 leading-relaxed">
              {p.partnership.paragraphs.map((t) => <p key={t}>{t}</p>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={p.partnership.primaryCta.href} className="btn-primary">{p.partnership.primaryCta.label}</Link>
              <Link href={p.partnership.secondaryCta.href} className="btn-outline">{p.partnership.secondaryCta.label}</Link>
            </div>
          </div>
          <Photo photo={p.partnership.photo} className="aspect-[4/3]" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </Section>

      <CtaBand {...p.finalCta} />
    </>
  );
}
