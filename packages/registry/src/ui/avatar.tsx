import type { ViewProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface AvatarProps extends ViewProps {}

export function Avatar({ className, children, ...props }: AvatarProps) {
  return (
    <view
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className,
      )}
      {...props}
    >
      {children}
    </view>
  );
}

export interface AvatarImageProps {
  className?: string;
  src: string;
  id?: string;
}

export function AvatarImage({ className, src, ...props }: AvatarImageProps) {
  return (
    <image
      className={cn('aspect-square h-full w-full', className)}
      src={src}
      {...props}
    />
  );
}

export interface AvatarFallbackProps extends ViewProps {}

export function AvatarFallback({
  className,
  children,
  ...props
}: AvatarFallbackProps) {
  return (
    <view
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted',
        className,
      )}
      {...props}
    >
      <text className="text-sm font-medium">{children}</text>
    </view>
  );
}
