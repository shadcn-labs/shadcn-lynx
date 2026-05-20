import { cn } from '@/lib/utils';

export function PopoverRoot({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function PopoverTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function PopoverContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'absolute z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none top-full left-0 mt-2',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function PopoverPositioner({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn('relative', className)}>{children}</div>;
}

export function PopoverBackdrop({ className }: { className?: string }) {
  return <div className={cn('fixed inset-0 z-40 bg-black/50', className)} />;
}

export function PopoverArrow({ className }: { className?: string }) {
  return (
    <div
      className={cn('absolute -top-2 left-4 w-4 h-2 bg-popover', className)}
    />
  );
}

export function PopoverDefaultDemo() {
  return (
    <div className="relative">
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
        Open Popover
      </button>
      <div className="absolute z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none top-full left-0 mt-2">
        <div className="absolute -top-2 left-4 w-4 h-2 bg-popover" />
        <p className="text-sm font-medium">Settings</p>
        <div className="flex flex-col gap-1">
          <p className="text-sm">Display</p>
          <p className="text-sm">Appearance</p>
          <p className="text-sm">Notifications</p>
        </div>
      </div>
    </div>
  );
}

export function PopoverWithPlacementDemo() {
  return (
    <div className="relative">
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
        Top Popover
      </button>
      <div className="absolute z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none bottom-full left-0 mb-2">
        <div className="absolute -bottom-2 left-4 w-4 h-2 bg-popover" />
        <p>This popover appears on top</p>
      </div>
    </div>
  );
}
