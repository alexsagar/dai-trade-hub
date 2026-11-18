import Link from "next/link";
import Logo from "@/components/Logo";
import { getSiteSettings } from "@/lib/cms";
import { telHref } from "@/lib/site";

export default async function Footer() {
  const s = await getSiteSettings();
  const f = s.footer;
  return (
    <footer className="bg-ink text-white/75">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr]">
        <div>
          <Logo className="w-[130px]" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">{s.tagline}</p>
        </div>

        {f.columns.map((col, i) => (
          <nav key={i} aria-label={col.title}>
            <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-gold uppercase">{col.title}</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {(col.links ?? []).map((l, j) => (
                <li key={j}>
                  <Link href={l.href} className="hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-gold uppercase">{f.contactTitle}</h2>
          <address className="mt-4 space-y-2.5 text-sm not-italic">
            <p>
              {s.name}
              <br />
              {s.street}, {s.city} {s.postalCode}, {s.country}
            </p>
            <p><a href={telHref(s.phoneIntl)} className="hover:text-white">{s.phoneDisplay} {s.phoneNote}</a></p>
            <p><a href={`mailto:${s.email}`} className="hover:text-white">{s.email}</a></p>
            <p><a href={`mailto:${s.tradeEmail}`} className="hover:text-white">{s.tradeEmail}</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {s.name}. {f.copyright}</p>
          <ul className="flex flex-wrap gap-5">
            {f.legalLinks.map((l, i) => (
              <li key={i}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
