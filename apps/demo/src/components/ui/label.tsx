import type { TextProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface LabelProps extends TextProps {
  children?: React.ReactNode;
}

export function Label({ className, children, ...props }: LabelProps) {
  return (
    <text
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      )}
      {...props}
    >
      {children}
    </text>
  );
}
