import { cn } from '@/lib/utils';

export interface AvatarPreviewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'default' | 'lg';
}

export function AvatarPreview({
  className,
  size = 'default',
  ...props
}: AvatarPreviewProps) {
  const sizes = {
    sm: 'h-8 w-8',
    default: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  return (
    <div
      className={cn(
        'relative flex size-10 shrink-0 overflow-hidden rounded-full',
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}

export function AvatarImagePreview({
  className,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      className={cn('aspect-square size-full', className)}
      alt={alt}
      {...props}
    />
  );
}

export function AvatarFallbackPreview({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex size-full items-center justify-center rounded-full bg-muted',
        className,
      )}
      {...props}
    />
  );
}
