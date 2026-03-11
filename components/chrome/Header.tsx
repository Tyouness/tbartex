"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "L'entreprise", href: "/entreprise" },
  { label: "Nos fils", href: "/nos-fils" },
  { label: "Conseil", href: "/conseil" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300 supports-[backdrop-filter]:backdrop-blur-md",
        isScrolled
          ? "bg-[#040405]/96 border-b border-[#1e1e26]"
          : "bg-[#040405]/72 border-b border-transparent",
      ].join(" ")}
    >
      <nav className="w-full mx-auto px-8 max-w-[1240px] h-[74px] flex items-center justify-between">
        <Link
          href="/"
          className="text-[12px] font-medium tracking-[0.46em] uppercase text-[#f5f5f5] hover:text-white transition-colors"
        >
          Tbartex
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[10px] font-normal uppercase tracking-[0.18em] text-[#b2b2ba] hover:text-[#f5f5f5] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col justify-center gap-[6px] w-6 h-10"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Fermer" : "Menu"}
          aria-expanded={isOpen}
        >
          <span className={`block h-px w-full bg-[#f5f5f5] transition-all duration-200 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-full bg-[#f5f5f5] transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-full bg-[#f5f5f5] transition-all duration-200 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#040405]/96 backdrop-blur-md border-t border-[#1e1e26]">
          <ul className="w-full mx-auto px-8 max-w-[1240px] pb-6 pt-2 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-[12px] uppercase tracking-[0.1em] text-[#ededf1] border-b border-[#24242b] last:border-0"
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
