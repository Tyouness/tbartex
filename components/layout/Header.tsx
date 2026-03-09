import Link from "next/link";

const navLinks = [
  { label: "L'entreprise", href: "/entreprise" },
  { label: "Nos fils", href: "/nos-fils" },
  { label: "Conseil & accompagnement", href: "/conseil" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Tbartex</Link>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
