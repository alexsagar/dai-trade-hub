"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { NAV_LINKS } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Escape closes, focus moves into the panel and back, body scroll locks while open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink text-white">
      <div className="container-x !max-w-[1360px] flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="DAI Trade Hub home">
          <Logo className="w-[120px]" />
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-5 text-[0.9rem] whitespace-nowrap">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className="py-2 text-white/80 transition-colors hover:text-white aria-[current=page]:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 whitespace-nowrap min-[1400px]:flex">
          <Link href="/products" className="btn-outline-light !px-4 !py-2.5">Explore Products</Link>
          <Link href="/partnerships" className="btn-gold !px-4 !py-2.5">Become a Partner</Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 p-2 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto bg-ink xl:hidden"
      >
        <nav aria-label="Mobile" className="container-x py-6">
          <ul className="divide-y divide-white/10">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className="block py-4 text-lg text-white/85 aria-[current=page]:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Link href="/products" className="btn-outline-light">Explore Products</Link>
            <Link href="/partnerships" className="btn-gold">Become a Partner</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
