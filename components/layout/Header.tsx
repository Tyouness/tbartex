import Link from "next/link";

const navLinks = [
  { label: "L'entreprise", href: "/entreprise" },
  { label: "Nos fils", href: "/nos-fils" },
  { label: "Conseil & accompagnement", href: "/conseil" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e2ddd8]">
      <nav className="w-full mx-auto px-6 max-w-[1200px] flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-[#1e1e1e] font-semibold text-lg tracking-tight hover:text-[#c8a96e] transition-colors"
        >
          Tbartex
        </Link>
        <ul className="flex items-center gap-8">
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
      </nav>
    </header>
  );
}
