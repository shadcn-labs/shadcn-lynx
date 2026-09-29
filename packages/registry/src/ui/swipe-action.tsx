import type { SwipeActionProps as BaseSwipeActionProps } from '@lynx-js/lynx-ui';
import { SwipeAction as BaseSwipeAction } from '@lynx-js/lynx-ui';
import { cn } from '@/lib/utils';

export interface SwipeActionProps extends BaseSwipeActionProps {
  displayAreaClassName?: string;
  actionAreaClassName?: string;
}

export function SwipeAction({
  className,
  displayAreaClassName,
  actionAreaClassName,
  displayArea,
  actionArea,
  ...props
}: SwipeActionProps) {
  return (
    <BaseSwipeAction
      className={cn('overflow-hidden rounded-lg border bg-card', className)}
      displayArea={
        <view
          className={cn(
            'flex min-h-16 justify-center bg-card px-4 py-3 text-card-foreground',
            displayAreaClassName,
          )}
        >
          {displayArea}
        </view>
      }
      actionArea={
        <view
          className={cn(
            'flex min-h-16 items-center justify-center bg-destructive px-5 py-3 text-destructive-foreground',
            actionAreaClassName,
          )}
        >
          {actionArea}
        </view>
      }
      {...props}
    />
  );
}

export type { SwipeActionRef } from '@lynx-js/lynx-ui';
