import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper de largeur maximale centré horizontalement.
 * Utilise max-w et padding explicites — pas de classe `container` Tailwind.
 */
export default function Container({ children, className = "" }: ContainerProps) {
  const base = "w-full mx-auto px-6 max-w-[1200px]";
  return (
    <div className={className ? `${base} ${className}` : base}>
      {children}
    </div>
  );
}
