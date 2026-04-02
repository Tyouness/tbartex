import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  const base = "w-full mx-auto max-w-[1240px] px-8";
  return <div className={className ? `${base} ${className}` : base}>{children}</div>;
}
