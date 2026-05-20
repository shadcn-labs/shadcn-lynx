import { cn } from '@/lib/utils';

export interface AlertPreviewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive';
}

export function AlertPreview({
  className,
  variant = 'default',
  ...props
}: AlertPreviewProps) {
  const variants = {
    default: 'bg-background text-foreground',
    destructive:
      'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
  };

  return (
    <div
      role="alert"
      className={cn(
        'relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

export function AlertTitlePreview({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  );
}

export function AlertDescriptionPreview({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <div
      className={cn('text-sm [&_p]:leading-relaxed', className)}
      {...props}
    />
  );
}
