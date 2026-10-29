import { cn } from '../../lib/utils';

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('container px-4 lg:px-28 2xl:px-36', className)} {...props} />;
}
