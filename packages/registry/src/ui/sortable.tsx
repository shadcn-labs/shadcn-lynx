import type {
  SortableItemProps as BaseSortableItemProps,
  SortableRootProps as BaseSortableRootProps,
  DraggableAreaProps,
  SortableData,
} from '@lynx-js/lynx-ui';
import {
  SortableItem as BaseSortableItem,
  SortableItemArea as BaseSortableItemArea,
  SortableRoot as BaseSortableRoot,
} from '@lynx-js/lynx-ui';
import { cn } from '@/lib/utils';

export interface SortableRootProps<T> extends BaseSortableRootProps<T> {
  className?: string;
}

export function SortableRoot<T>({
  className,
  children,
  ...props
}: SortableRootProps<T>) {
  return (
    <view className={cn('flex flex-col gap-2', className)}>
      <BaseSortableRoot {...props}>{children}</BaseSortableRoot>
    </view>
  );
}

export interface SortableItemProps extends BaseSortableItemProps {}

export function SortableItem({
  className,
  children,
  ...props
}: SortableItemProps) {
  return (
    <BaseSortableItem
      className={cn(
        'rounded-lg border bg-card p-4 text-card-foreground shadow-sm',
        className,
      )}
      {...props}
    >
      {children}
    </BaseSortableItem>
  );
}

export interface SortableItemAreaProps extends DraggableAreaProps {}

export function SortableItemArea({
  className,
  children,
  ...props
}: SortableItemAreaProps) {
  return (
    <BaseSortableItemArea
      className={cn(
        'flex items-center justify-center rounded-md bg-muted px-3 py-2 text-muted-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </BaseSortableItemArea>
  );
}

export type { SortableData };
