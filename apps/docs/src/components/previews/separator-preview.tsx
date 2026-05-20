import { cn } from '@/lib/utils';

export interface SeparatorPreviewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

export function SeparatorPreview({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: SeparatorPreviewProps) {
  return (
    <div
      role={decorative ? 'none' : 'separator'}
      aria-orientation={decorative ? undefined : orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className,
      )}
      {...props}
    />
  );
}
