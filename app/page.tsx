import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArrowLink, CheckList, CtaBand, Heading, Photo, Section } from "@/components/ui";
import {
  CORE_BUSINESS,
  FROM_NEPAL,
  HIGHLIGHTS,
  PHOTOS,
  PRIVATE_LABEL_CAPABILITIES,
  PROCESS,
  PRODUCT_CATEGORIES,
  TO_NEPAL,
  VALUE_PROPOSITION,
  slugify,
} from "@/lib/content";
import { pageMetadata } from "@/lib/site";

export const metadata = {
  ...pageMetadata({
    path: "/",
    title: "DAI Trade Hub | International Trading & Business Development, Nepal",
    description:
      "Nepal-based partner for international product sourcing, import and export coordination, private-label development, retail branding and distribution partnerships.",
  }),
  title: { absolute: "DAI Trade Hub | International Trading & Business Development, Nepal" },
};

// Home shows the six source categories; the full list lives on /products.
const HOME_CATEGORIES = [
  ...PRODUCT_CATEGORIES.slice(0, 5).map((c, i) => ({ ...c, anchor: slugify(c.title), title: i === 2 ? "Natural & Organic Products" : c.title })),
  { title: "International Retail Products", text: "Selected international products for Nepalese markets.", photo: PHOTOS.packaging, anchor: "retail-products" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src={PHOTOS.meeting.src}
          alt=""
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="-z-10 object-cover object-[70%_center] opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
        <div className="container-x py-24 sm:py-32 lg:py-40">
          <p className="eyebrow rise !text-gold">Connecting Markets. Creating Opportunities.</p>
          <h1 className="rise rise-2 mt-5 max-w-3xl text-4xl leading-[1.08] !text-white sm:text-5xl lg:text-6xl">
            Connecting Nepal Through International Trade
          </h1>
          <p className="rise rise-3 mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Your trusted partner for international product sourcing, import and export, private-label development,
            retail branding, and global distribution.
          </p>
          <p className="rise rise-3 mt-4 max-w-2xl leading-relaxed text-white/70">
            We connect businesses with quality products, reliable suppliers, and new market opportunities. From Nepal
            and beyond, we help create meaningful and sustainable international business partnerships.
          </p>
          <div className="rise rise-3 mt-10 flex flex-wrap gap-3">
            <Link href="/global-trade" className="btn-gold">
              Explore Trade Opportunities <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/partnerships" className="btn-outline-light">Partner With Us</Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow="Who we are" title="Your Strategic Partner in International Trade" />
            <div className="mt-6 space-y-4 leading-relaxed">
              <p>
                DAI Trade Hub Pvt. Ltd. is a Nepal-based trading and business development company working to connect
                local products, manufacturers, suppliers, and international markets.
              </p>
              <p>
                Our business approach goes beyond traditional import and export. We focus on identifying business
                opportunities, developing product supply channels, coordinating private-label projects, supporting
                retail branding, and building distribution partnerships.
              </p>
              <p>
                With a focus on global trade cooperation, we aim to support businesses seeking reliable local
                connections and international market opportunities.
              </p>
            </div>
            <div className="mt-8">
              <CheckList items={HIGHLIGHTS} />
            </div>
            <Link href="/about" className="btn-primary mt-10">Discover DAI Trade Hub</Link>
          </div>
          <Photo photo={PHOTOS.kathmandu} className="aspect-[4/3]" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </Section>

      {/* Core business */}
      <Section tone="cream">
        <Heading eyebrow="Our core business" title="Comprehensive Trading & Business Solutions" />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {CORE_BUSINESS.map((item, i) => (
            <li key={item.title} className="bg-white p-8">
              <span className="font-heading text-2xl text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <ArrowLink href="/services">View all services</ArrowLink>
        </div>
      </Section>

      {/* Product categories */}
      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Heading
            eyebrow="Product categories"
            title="Discover Products from Nepal and Global Markets"
            intro="We explore opportunities across selected product categories, connecting international buyers with potential suppliers and market-ready products."
          />
          <Link href="/products" className="btn-outline shrink-0">View Product Catalogue</Link>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_CATEGORIES.map((c) => (
            <li key={c.title}>
              <Link
                href={`/products#${c.anchor}`}
                className="group block"
              >
                {c.photo && (
                  <Photo photo={c.photo} className="aspect-[3/2]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                )}
                <h3 className="mt-5 text-xl group-hover:text-gold-deep">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{c.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Global trade */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Heading
              eyebrow="Global trade"
              title="Bridging Business Opportunities"
              intro="We see significant potential for business cooperation. DAI Trade Hub aims to facilitate two-way trading opportunities by connecting Nepalese suppliers with global buyers and introducing selected international products to the Nepalese market."
            />
            <Link href="/global-trade" className="btn-primary mt-8">
              Let&apos;s Explore Global Business Opportunities
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-sm border border-line bg-white p-8">
              <h3 className="text-xl">From Nepal</h3>
              <div className="mt-5"><CheckList items={FROM_NEPAL} /></div>
            </div>
            <div className="rounded-sm border border-line bg-white p-8">
              <h3 className="text-xl">To Nepal</h3>
              <div className="mt-5"><CheckList items={TO_NEPAL} /></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Private label */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Photo photo={PHOTOS.tea} className="order-last aspect-[4/3] lg:order-first" sizes="(min-width: 1024px) 50vw, 100vw" />
          <div>
            <Heading
              eyebrow="Retail branding & private label"
              title="Transforming Products into Market-Ready Brands"
              intro="We support retail branding and private-label business opportunities by coordinating product sourcing, packaging development, brand presentation, and production partnerships."
            />
            <div className="mt-8"><CheckList items={PRIVATE_LABEL_CAPABILITIES} cols={2} /></div>
            <aside className="mt-8 border-l-2 border-gold pl-5 text-sm leading-relaxed text-muted">
              <p className="font-semibold text-ink">Illustrative business example</p>
              <p className="mt-1">
                A global retail company interested in launching a Nepal-origin tea or coffee brand can explore supplier
                identification, product selection, packaging coordination, and export arrangements through DAI Trade Hub.
              </p>
            </aside>
            <Link href="/contact?type=Retail%20Branding%20%2F%20Private%20Label" className="btn-primary mt-8">
              Discuss a Private Label Project
            </Link>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section tone="cream">
        <Heading eyebrow="Our business process" title="From Business Idea to Market Opportunity" />
        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((step, i) => (
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
          <Heading
            eyebrow="Why work with DAI Trade Hub?"
            title="A Practical Partner for International Business"
            intro="We believe successful international trade depends on trust, communication, reliable suppliers, and a clear understanding of both markets."
          />
          <CheckList items={VALUE_PROPOSITION} cols={2} />
        </div>
      </Section>

      {/* Strategic partnership */}
      <Section tone="cream">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow="Strategic partnership" title="Let's Build Something Together" />
            <div className="mt-6 space-y-4 leading-relaxed">
              <p>
                We welcome cooperation with global companies, international buyers, manufacturers, retail brands,
                distributors, wholesalers, and investment partners.
              </p>
              <p>
                Whether you are looking for Nepalese products, exploring the Nepalese market, developing private-label
                products, or establishing a new international supply channel, we welcome the opportunity to discuss your
                business objectives.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/partnerships" className="btn-primary">Become Our Business Partner</Link>
              <Link href="/contact" className="btn-outline">Contact Our Team</Link>
            </div>
          </div>
          <Photo photo={PHOTOS.crafts} className="aspect-[4/3]" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </Section>

      <CtaBand
        title="Your Next Business Opportunity Starts Here."
        text="Connect with DAI Trade Hub to explore international trading, product sourcing, retail branding, and global business opportunities."
        primary={{ label: "Start a Business Discussion", href: "/contact" }}
      />
    </>
  );
}
