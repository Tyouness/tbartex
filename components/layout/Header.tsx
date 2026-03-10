"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "L'entreprise", href: "/entreprise" },
  { label: "Nos fils", href: "/nos-fils" },
  { label: "Conseil & accompagnement", href: "/conseil" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <nav className="w-full mx-auto px-6 max-w-[1200px] flex items-center justify-between h-16">

        {/* Logo */}
        <Link
          href="/"
          className="text-[#0a0a0a] text-[11px] font-medium uppercase tracking-[0.2em] hover:text-[#525252] transition-colors"
        >
          Tbartex
        </Link>

        {/* Navigation desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[11px] uppercase tracking-wide text-[#525252] hover:text-[#0a0a0a] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`block h-px w-full bg-[#0a0a0a] transition-transform duration-200 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-[#0a0a0a] transition-opacity duration-200 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-[#0a0a0a] transition-transform duration-200 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Navigation mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#e5e5e5]">
          <ul className="flex flex-col px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-4 text-[11px] text-[#0a0a0a] uppercase tracking-wide border-b border-[#e5e5e5] last:border-0"
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
