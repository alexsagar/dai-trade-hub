"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navBg = !isHome || scrolled
    ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
    : "bg-transparent";

  const textColor = !isHome || scrolled ? "text-charcoal" : "text-white";
  const mutedColor = !isHome || scrolled ? "text-muted" : "text-white/70";
  const hoverColor = !isHome || scrolled ? "hover:text-forest" : "hover:text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className={`flex items-center gap-3 ${textColor}`}>
              <Logo className="w-48 h-14 sm:w-80 sm:h-16" light={!(!isHome || scrolled)} />
              {/* <div className="flex flex-col leading-none">
                <span className="text-xl font-heading tracking-wide">
                  DAI Trade Hub
                </span>
              </div> */}
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-[13.5px] font-medium tracking-wide transition-colors duration-200 ${isActive ? textColor : mutedColor
                      } ${hoverColor}`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className={`absolute bottom-0 left-4 right-4 h-[2px] ${!isHome || scrolled ? "bg-forest" : "bg-white"
                          }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold tracking-wide rounded transition-all duration-200 ${!isHome || scrolled
                ? "bg-forest text-white hover:bg-forest-dark"
                : "border border-white/30 text-white hover:bg-white/10 hover:border-white/60"
                }`}
            >
              Get in Touch
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden relative z-[60] p-2 ${mobileOpen ? "text-white" : textColor}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] bg-forest-dark flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-heading text-3xl transition-colors ${pathname === link.href
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3 rounded text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
