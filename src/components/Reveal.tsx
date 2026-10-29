import type { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Element type to render. Defaults to a div. */
  as?: 'div' | 'li' | 'article' | 'section';
}

export function Reveal({ children, className = '', as = 'div' }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const Tag = as;

  return (
    <Tag ref={ref as never} className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </Tag>
  );
}
