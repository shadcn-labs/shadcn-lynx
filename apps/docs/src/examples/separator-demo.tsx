import { cn } from '@/lib/utils';

export function Separator({
  className,
  orientation = 'horizontal',
  ...props
}: {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className,
      )}
      {...props}
    />
  );
}

export function SeparatorHorizontalDemo() {
  return (
    <div>
      <p>Top content</p>
      <Separator />
      <p>Bottom content</p>
    </div>
  );
}

export function SeparatorVerticalDemo() {
  return (
    <div className="flex items-center gap-4">
      <p>Left</p>
      <Separator orientation="vertical" className="h-6" />
      <p>Right</p>
    </div>
  );
}
