import { Button as BaseButton } from '@lynx-js/lynx-ui';
import type { ReactNode } from '@lynx-js/react';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ViewProps } from '@/lib/types';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors ring-offset-background ui-active:opacity-90 ui-disabled:pointer-events-none ui-disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
        outline:
          'border border-input bg-background ui-active:bg-accent ui-active:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        ghost:
          'bg-transparent ui-active:bg-accent ui-active:text-accent-foreground',
        link: 'text-primary underline-offset-4 ui-active:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends Omit<ViewProps, 'children'>,
    VariantProps<typeof buttonVariants> {
  children?:
    | ReactNode
    | ((props: { active: boolean; disabled: boolean }) => ReactNode);
  disabled?: boolean;
  onClick?: () => void;
  buttonProps?: Record<string, unknown>;
}

export function Button({
  className,
  variant,
  size,
  children,
  disabled,
  onClick,
  buttonProps,
  ...props
}: ButtonProps) {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled}
      onClick={onClick}
      buttonProps={buttonProps}
      {...props}
    >
      {children}
    </BaseButton>
  );
}

export { buttonVariants };
