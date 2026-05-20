import type { ReactNode } from '@lynx-js/react';
import { cva, type VariantProps } from 'class-variance-authority';
import type { TextProps, ViewProps } from '@/lib/types';
import { cn } from '@/lib/utils';

const alertVariants = cva('relative w-full rounded-lg border p-4', {
  variants: {
    variant: {
      default: 'bg-background text-foreground',
      destructive:
        'border-destructive/50 text-destructive dark:border-destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface AlertProps
  extends ViewProps,
    VariantProps<typeof alertVariants> {
  children?: ReactNode;
}

export function Alert({ className, variant, children, ...props }: AlertProps) {
  return (
    <view className={cn(alertVariants({ variant }), className)} {...props}>
      {children}
    </view>
  );
}

export interface AlertTitleProps extends TextProps {}

export function AlertTitle({ className, children, ...props }: AlertTitleProps) {
  return (
    <text
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    >
      {children}
    </text>
  );
}

export interface AlertDescriptionProps extends TextProps {}

export function AlertDescription({
  className,
  children,
  ...props
}: AlertDescriptionProps) {
  return (
    <text className={cn('text-sm [&_p]:leading-relaxed', className)} {...props}>
      {children}
    </text>
  );
}
