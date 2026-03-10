"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "L'entreprise", href: "/entreprise" },
  { label: "Nos fils", href: "/nos-fils" },
  { label: "Conseil", href: "/conseil" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 bg-white transition-shadow duration-300",
        scrolled ? "shadow-[0_1px_0_0_#ebebeb]" : "",
      ].join(" ")}
    >
      <nav className="w-full mx-auto px-8 max-w-[1200px] flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link
          href="/"
          className="text-[13px] font-medium tracking-[0.28em] uppercase text-[#111111] hover:text-[#555555] transition-colors"
        >
          Tbartex
        </Link>

        {/* Nav desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[11px] font-normal tracking-[0.1em] uppercase text-[#888888] hover:text-[#111111] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col justify-center gap-[6px] w-6 h-10 cursor-pointer"
          onClick={() => setIsOpen((p) => !p)}
          aria-label={isOpen ? "Fermer" : "Menu"}
          aria-expanded={isOpen}
        >
          <span className={`block h-px w-full bg-[#111111] transition-all duration-200 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-full bg-[#111111] transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-full bg-[#111111] transition-all duration-200 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-[0_1px_0_0_#ebebeb]">
          <ul className="w-full mx-auto px-8 max-w-[1200px] pb-6 pt-2 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-[12px] text-[#111111] font-normal tracking-[0.1em] uppercase border-b border-[#f5f5f5] last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
