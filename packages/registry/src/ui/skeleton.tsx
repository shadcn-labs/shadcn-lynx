import type { ViewProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface SkeletonProps extends ViewProps {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <view
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  );
}
