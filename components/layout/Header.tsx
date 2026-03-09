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
    <header className="sticky top-0 z-50 bg-white border-b border-[#e2ddd8]">
      <nav className="w-full mx-auto px-6 max-w-[1200px] flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-[#1e1e1e] font-semibold text-lg tracking-tight hover:text-[#c8a96e] transition-colors"
        >
          Tbartex
        </Link>

        {/* Navigation desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-[#6b6b6b] hover:text-[#1e1e1e] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton hamburger mobile */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`block h-[2px] w-full bg-[#1e1e1e] transition-transform duration-200 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-[#1e1e1e] transition-opacity duration-200 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-[#1e1e1e] transition-transform duration-200 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Navigation mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#e2ddd8]">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-sm text-[#1e1e1e] border-b border-[#e2ddd8] last:border-0"
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
