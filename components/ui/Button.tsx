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
    "inline-block px-6 py-3 text-sm font-semibold tracking-wide uppercase bg-[#1e1e1e] text-white hover:bg-[#c8a96e] transition-colors duration-200 rounded-[4px]",
  secondary:
    "inline-block px-6 py-3 text-sm font-semibold tracking-wide uppercase border border-[#1e1e1e] text-[#1e1e1e] hover:bg-[#1e1e1e] hover:text-white transition-colors duration-200 rounded-[4px]",
  ghost:
    "inline-block px-4 py-2 text-sm font-medium text-[#1e1e1e] underline-offset-4 hover:underline hover:text-[#c8a96e] transition-colors duration-200",
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
