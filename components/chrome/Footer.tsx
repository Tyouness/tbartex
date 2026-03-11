import Link from "next/link";
import { siteConfig } from "@/content/site";

const legalLinks = [
  { label: "Mentions legales", href: "/mentions-legales" },
  { label: "Confidentialite", href: "/politique-confidentialite" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e26] bg-[#040405] mt-0">
      <div className="w-full mx-auto px-8 max-w-[1240px] py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr_1fr] gap-10 md:gap-12 items-start">
          <div className="max-w-[440px]">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#f5f5f5] mb-4">
              {siteConfig.nom}
            </p>
            <p className="text-[14px] text-[#b5b5bc] leading-7">
              Fil textile premium pour marques et industriels. Une approche
              precise, sobre et orientee qualite durable.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#8e8e98] mb-4">
              Pages
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="text-[13px] text-[#d7d7de] hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/entreprise" className="text-[13px] text-[#d7d7de] hover:text-white transition-colors">
                  Entreprise
                </Link>
              </li>
              <li>
                <Link href="/nos-fils" className="text-[13px] text-[#d7d7de] hover:text-white transition-colors">
                  Nos Fils
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#8e8e98] mb-4">
              Informations
            </p>
            <ul className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#d7d7de] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-[13px] text-[#b7b7be] leading-7">
              <p className="m-0">Casablanca, Maroc</p>
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-white transition-colors">
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.telephone}`} className="block hover:text-white transition-colors">
                {siteConfig.telephone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1e1e26]">
          <p className="text-[11px] uppercase tracking-[0.14em] text-[#85858f]">
            {siteConfig.nom} {siteConfig.anneeCreation}-{new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
