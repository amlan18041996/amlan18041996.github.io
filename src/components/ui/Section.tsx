import { cn } from '../../lib/utils';
import { Container } from './Container';
import { forwardRef } from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(({ className, container = true, children, ...props }, ref) => {
  return (
    <section ref={ref} className={cn('py-14 md:py-20 relative', className)} {...props}>
      {container ? <Container>{children}</Container> : children}
    </section>
  );
});

Section.displayName = 'Section';
