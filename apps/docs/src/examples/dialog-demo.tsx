import { useState } from 'react';
import { cn } from '@/lib/utils';

export function DialogRoot({
  children,
  defaultShow,
}: {
  children: React.ReactNode;
  defaultShow?: boolean;
}) {
  const [show, setShow] = useState(defaultShow ?? false);
  return (
    <div data-dialog-root data-show={show}>
      {children}
    </div>
  );
}

export function DialogTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function DialogClose({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function DialogBackdrop({ className }: { className?: string }) {
  return <div className={cn('fixed inset-0 z-50 bg-black/80', className)} />;
}

export function DialogContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 rounded-lg',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function DialogHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'flex flex-col space-y-1.5 text-center sm:text-left',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function DialogFooter({
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

export function DialogTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h3
      className={cn(
        'text-lg font-semibold leading-none tracking-tight',
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function DialogDescription({
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

export function DialogDefaultDemo() {
  return (
    <div className="relative">
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
        Open Dialog
      </button>
      <div className="fixed inset-0 z-50 bg-black/80" />
      <div className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 rounded-lg">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h3 className="text-lg font-semibold leading-none tracking-tight">
            Edit profile
          </h3>
          <p className="text-sm text-muted-foreground">
            Make changes to your profile here.
          </p>
        </div>
        <p>Profile content goes here</p>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
            Cancel
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export function DialogControlledDemo() {
  return (
    <div className="relative">
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
        Open Dialog
      </button>
      <div className="fixed inset-0 z-50 bg-black/80" />
      <div className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 rounded-lg">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h3 className="text-lg font-semibold leading-none tracking-tight">
            Controlled Dialog
          </h3>
          <p className="text-sm text-muted-foreground">
            This dialog is open by default.
          </p>
        </div>
        <p>Content here</p>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
