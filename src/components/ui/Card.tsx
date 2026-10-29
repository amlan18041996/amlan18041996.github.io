import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-xl overflow-hidden',
        hover && 'transition-transform duration-300 hover:-translate-y-1',
        className
      )}
      {...props}
    />
  );
}
