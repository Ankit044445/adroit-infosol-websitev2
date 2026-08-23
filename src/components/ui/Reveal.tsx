import type { ElementType, ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function Reveal({ children, as: Tag = "div", delay, className = "" }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const delayClass = delay ? ` delay-${delay}` : "";
  return (
    <Tag ref={ref} className={`reveal${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
