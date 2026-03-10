import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
  alternate?: boolean;
}

export default function SectionWrapper({ children, className = "", as: Tag = "section", alternate = false }: SectionWrapperProps) {
  const bg = alternate ? "bg-[#f9f9f9]" : "bg-white";
  const base = `${bg} py-24`;
  return <Tag className={className ? `${base} ${className}` : base}>{children}</Tag>;
}
