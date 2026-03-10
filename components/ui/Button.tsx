import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center gap-2 px-7 py-3.5 text-[11px] font-medium tracking-[0.12em] uppercase bg-[#0a0a0a] text-white hover:bg-[#2a2a2a] transition-colors duration-200",
  secondary:
    "inline-flex items-center gap-2 px-7 py-3.5 text-[11px] font-medium tracking-[0.12em] uppercase border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-colors duration-200",
  ghost:
    "inline-flex items-center gap-2 text-sm font-normal text-[#0a0a0a] border-b border-[#0a0a0a] pb-0.5 hover:text-[#525252] hover:border-[#525252] transition-colors duration-200",
};

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const cls = className
    ? `${variantClasses[variant]} ${className}`
    : variantClasses[variant];

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
