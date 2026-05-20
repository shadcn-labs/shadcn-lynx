import { cn } from '@/lib/utils';

export function Label({
  className,
  children,
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
}

export function LabelDefaultDemo() {
  return <Label>Default Label</Label>;
}

export function LabelWithInputDemo() {
  return (
    <div className="flex flex-col gap-2">
      <Label>Email</Label>
      <p className="text-sm text-muted-foreground">user@example.com</p>
    </div>
  );
}
