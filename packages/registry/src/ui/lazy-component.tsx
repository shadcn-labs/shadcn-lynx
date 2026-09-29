import type { LazyComponentProps as BaseLazyComponentProps } from '@lynx-js/lynx-ui';
import { LazyComponent as BaseLazyComponent } from '@lynx-js/lynx-ui';
import type { ReactNode } from '@lynx-js/react';
import { cn } from '@/lib/utils';

export interface LazyComponentProps
  extends Omit<BaseLazyComponentProps, 'children'> {
  className?: string;
  children: ReactNode;
}

export function LazyComponent({
  className,
  children,
  ...props
}: LazyComponentProps) {
  return (
    <BaseLazyComponent {...props}>
      <view
        className={cn(
          'overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm',
          className,
        )}
      >
        {children}
      </view>
    </BaseLazyComponent>
  );
}

export type { LazyComponentRef } from '@lynx-js/lynx-ui';
