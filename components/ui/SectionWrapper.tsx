import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
  /** Fond alterné pour séparer visuellement les sections */
  alternate?: boolean;
}

/**
 * Bloc de section avec espacement vertical standardisé.
 * alternate=true applique un fond légèrement différent.
 */
export default function SectionWrapper({
  children,
  className = "",
  as: Tag = "section",
  alternate = false,
}: SectionWrapperProps) {
  const base = alternate
    ? "py-16 bg-white"
    : "py-16";
  return (
    <Tag className={className ? `${base} ${className}` : base}>
      {children}
    </Tag>
  );
}
