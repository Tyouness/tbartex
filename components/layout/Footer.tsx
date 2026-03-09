import Link from "next/link";
import { siteConfig } from "@/content/site";

const navLinks = [
  { label: "L'entreprise", href: "/entreprise" },
  { label: "Nos fils", href: "/nos-fils" },
  { label: "Conseil & accompagnement", href: "/conseil" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white">
      {/* Bloc principal */}
      <div className="w-full mx-auto px-6 max-w-[1200px] py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Colonne 1 : identité */}
        <div>
          <p className="font-semibold text-base mb-2">{siteConfig.nom}</p>
          <p className="text-sm text-[#a0a0a0]">
            Importateur B2B de fils textiles<br />
            depuis {siteConfig.anneeCreation}
          </p>
        </div>

        {/* Colonne 2 : navigation */}
        <nav aria-label="Navigation pied de page">
          <p className="text-xs uppercase tracking-widest text-[#a0a0a0] mb-4">Navigation</p>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#d0d0d0] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Colonne 3 : contact */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#a0a0a0] mb-4">Contact</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="block text-sm text-[#d0d0d0] hover:text-white transition-colors mb-2"
          >
            {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.telephone}`}
            className="block text-sm text-[#d0d0d0] hover:text-white transition-colors"
          >
            {siteConfig.telephone}
          </a>
        </div>
      </div>

      {/* Barre basse : mentions légales */}
      <div className="border-t border-[#333333]">
        <div className="w-full mx-auto px-6 max-w-[1200px] py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-[#6b6b6b]">
            &copy; {siteConfig.anneeCreation}&ndash;{new Date().getFullYear()} {siteConfig.nom}
          </p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#6b6b6b] hover:text-[#a0a0a0] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
