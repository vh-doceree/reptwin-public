import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    accent: 'bg-accent/10 text-accent',
    outline: 'border border-accent/30 text-accent',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

