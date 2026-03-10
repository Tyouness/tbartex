import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base: Record<Variant, string> = {
  primary:
    "inline-flex items-center gap-3 px-8 py-[14px] text-[11px] font-medium tracking-[0.14em] uppercase bg-[#111111] text-white hover:bg-[#323232] transition-colors duration-200",
  secondary:
    "inline-flex items-center gap-3 px-8 py-[14px] text-[11px] font-medium tracking-[0.14em] uppercase border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors duration-200",
  ghost:
    "inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.14em] uppercase text-[#888888] hover:text-[#111111] transition-colors duration-200 group",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, href, variant = "primary", type = "button", onClick, className = "" }: ButtonProps) {
  const cls = className ? `${base[variant]} ${className}` : base[variant];
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}
