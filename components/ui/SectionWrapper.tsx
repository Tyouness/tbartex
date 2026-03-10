import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
  /** Fond alterné pour séparer visuellement les sections */
  alternate?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  as: Tag = "section",
  alternate = false,
}: SectionWrapperProps) {
  const base = alternate ? "py-20 bg-[#f5f5f5]" : "py-20 bg-white";
  return (
    <Tag className={className ? `${base} ${className}` : base}>
      {children}
    </Tag>
  );
}
