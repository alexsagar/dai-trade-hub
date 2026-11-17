import Link from "next/link";
import Logo from "@/components/Logo";
import { getSiteSettings } from "@/lib/cms";
import { telHref } from "@/lib/site";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Partnership Opportunities", href: "/partnerships" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Trading Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Global Trade", href: "/global-trade" },
      { label: "Retail Branding & Private Label", href: "/retail-branding" },
    ],
  },
  {
    title: "Product Categories",
    links: [
      { label: "Himalayan Tea & Coffee", href: "/products#himalayan-tea-coffee" },
      { label: "Herbs & Spices", href: "/products#herbs-spices" },
      { label: "Handmade & Handicrafts", href: "/products#handmade-handicrafts" },
      { label: "Pashmina & Textiles", href: "/products#pashmina-textile-products" },
    ],
  },
];

export default async function Footer() {
  const s = await getSiteSettings();
  return (
    <footer className="bg-ink text-white/75">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr]">
        <div>
          <Logo className="w-[130px]" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">{s.tagline}</p>
        </div>

        {COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-gold uppercase">{col.title}</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-gold uppercase">Contact</h2>
          <address className="mt-4 space-y-2.5 text-sm not-italic">
            <p>
              {s.name}
              <br />
              {s.street}, {s.city} {s.postalCode}, {s.country}
            </p>
            <p><a href={telHref(s.phoneIntl)} className="hover:text-white">{s.phoneDisplay} (Nepal)</a></p>
            <p><a href={`mailto:${s.email}`} className="hover:text-white">{s.email}</a></p>
            <p><a href={`mailto:${s.tradeEmail}`} className="hover:text-white">{s.tradeEmail}</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {s.name}. All rights reserved.</p>
          <ul className="flex gap-5">
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link></li>
            <li><Link href="/image-credits" className="hover:text-white">Image Credits</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
