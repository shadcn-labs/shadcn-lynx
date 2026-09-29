import type {
  DraggableAreaProps as BaseDraggableAreaProps,
  DraggableProps as BaseDraggableProps,
} from '@lynx-js/lynx-ui';
import {
  Draggable as BaseDraggable,
  DraggableArea as BaseDraggableArea,
  DraggableRoot as BaseDraggableRoot,
} from '@lynx-js/lynx-ui';
import { cn } from '@/lib/utils';

export interface DraggableProps extends BaseDraggableProps {}

export function Draggable({ className, children, ...props }: DraggableProps) {
  return (
    <BaseDraggable
      className={cn(
        'flex items-center justify-center rounded-lg border bg-card p-4 text-card-foreground shadow-sm',
        className,
      )}
      {...props}
    >
      {children}
    </BaseDraggable>
  );
}

export function DraggableRoot({
  className,
  children,
  ...props
}: DraggableProps) {
  return (
    <BaseDraggableRoot
      className={cn(
        'rounded-lg border bg-card text-card-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </BaseDraggableRoot>
  );
}

export interface DraggableAreaProps extends BaseDraggableAreaProps {}

export function DraggableArea({
  className,
  children,
  ...props
}: DraggableAreaProps) {
  return (
    <BaseDraggableArea
      className={cn(
        'flex items-center justify-center rounded-md bg-muted px-3 py-2 text-muted-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </BaseDraggableArea>
  );
}

export type { DraggableRef } from '@lynx-js/lynx-ui';
