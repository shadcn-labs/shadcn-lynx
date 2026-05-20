import { cn } from '@/lib/utils';

export function SheetRoot({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function SheetTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function SheetClose({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function SheetContent({
  className,
  side = 'right',
  children,
}: {
  className?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  children: React.ReactNode;
}) {
  const sideClasses = {
    top: 'top-0 left-0 right-0 h-auto max-h-[80vh] border-b',
    right: 'top-0 right-0 bottom-0 w-80 border-l',
    bottom: 'bottom-0 left-0 right-0 h-auto max-h-[80vh] border-t',
    left: 'top-0 left-0 bottom-0 w-80 border-r',
  };

  return (
    <div
      className={cn(
        'fixed z-50 gap-4 bg-background p-6 shadow-lg',
        sideClasses[side],
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SheetHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'flex flex-col space-y-2 text-center sm:text-left',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SheetFooter({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SheetTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <h3 className={cn('text-lg font-semibold', className)}>{children}</h3>;
}

export function SheetDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>
  );
}

export function SheetBackdrop({ className }: { className?: string }) {
  return <div className={cn('fixed inset-0 z-40 bg-black/80', className)} />;
}

export function SheetRightDemo() {
  return (
    <div className="relative">
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
        Open Sheet
      </button>
      <div className="fixed inset-0 z-40 bg-black/80" />
      <div className="fixed top-0 right-0 bottom-0 z-50 w-80 border-l gap-4 bg-background p-6 shadow-lg">
        <div className="flex flex-col space-y-2 text-center sm:text-left">
          <h3 className="text-lg font-semibold">Edit profile</h3>
          <p className="text-sm text-muted-foreground">
            Make changes to your profile here.
          </p>
        </div>
        <p>Sheet content</p>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function SheetLeftDemo() {
  return (
    <div className="relative">
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
        Open Left Sheet
      </button>
      <div className="fixed inset-0 z-40 bg-black/80" />
      <div className="fixed top-0 left-0 bottom-0 z-50 w-80 border-r gap-4 bg-background p-6 shadow-lg">
        <div className="flex flex-col space-y-2 text-center sm:text-left">
          <h3 className="text-lg font-semibold">Navigation</h3>
          <p className="text-sm text-muted-foreground">Menu items here.</p>
        </div>
        <p>Navigation content</p>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function SheetTopDemo() {
  return (
    <div className="relative">
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
        Open Top Sheet
      </button>
      <div className="fixed inset-0 z-40 bg-black/80" />
      <div className="fixed top-0 left-0 right-0 z-50 h-auto max-h-[80vh] border-b gap-4 bg-background p-6 shadow-lg">
        <div className="flex flex-col space-y-2 text-center sm:text-left">
          <h3 className="text-lg font-semibold">Top Sheet</h3>
          <p className="text-sm text-muted-foreground">Appears from the top.</p>
        </div>
        <p>Top sheet content</p>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function SheetBottomDemo() {
  return (
    <div className="relative">
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
        Open Bottom Sheet
      </button>
      <div className="fixed inset-0 z-40 bg-black/80" />
      <div className="fixed bottom-0 left-0 right-0 z-50 h-auto max-h-[80vh] border-t gap-4 bg-background p-6 shadow-lg">
        <div className="flex flex-col space-y-2 text-center sm:text-left">
          <h3 className="text-lg font-semibold">Bottom Sheet</h3>
          <p className="text-sm text-muted-foreground">
            Appears from the bottom.
          </p>
        </div>
        <p>Bottom sheet content</p>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
