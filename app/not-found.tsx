import Link from "next/link";
import { NAV_LINKS } from "@/lib/site";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="container-x max-w-3xl py-24 sm:py-32">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl">Page not found</h1>
      <p className="lead mt-4">The page you were looking for has moved or no longer exists.</p>
      <ul className="mt-10 flex flex-wrap gap-3">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="btn-outline !px-4 !py-2">{l.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
