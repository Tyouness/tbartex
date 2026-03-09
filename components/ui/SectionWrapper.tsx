import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
}

export default function SectionWrapper({
  children,
  className = "",
  as: Tag = "section",
}: SectionWrapperProps) {
  return (
    <Tag className={`section-wrapper ${className}`.trim()}>
      {children}
    </Tag>
  );
}
