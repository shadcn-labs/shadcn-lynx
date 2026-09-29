import type { ScrollViewProps as BaseScrollViewProps } from '@lynx-js/lynx-ui';
import { ScrollView as BaseScrollView } from '@lynx-js/lynx-ui';
import { cn } from '@/lib/utils';

export interface ScrollViewProps extends BaseScrollViewProps {}

export function ScrollView({
  className,
  scrollOrientation = 'vertical',
  children,
  ...props
}: ScrollViewProps) {
  return (
    <BaseScrollView
      className={cn(
        'h-full w-full rounded-md border bg-background text-foreground',
        className,
      )}
      scrollOrientation={scrollOrientation}
      {...props}
    >
      {children}
    </BaseScrollView>
  );
}

export type { ScrollViewRef } from '@lynx-js/lynx-ui';
