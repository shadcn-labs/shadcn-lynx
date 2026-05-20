import { cn } from '@/lib/utils';

export interface SheetPreviewProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export function SheetPreview({
  open,
  onOpenChange,
  side = 'right',
}: SheetPreviewProps) {
  const sideClasses = {
    top: 'top-0 left-0 right-0 h-auto max-h-[80vh] border-b',
    right: 'top-0 right-0 bottom-0 w-80 border-l',
    bottom: 'bottom-0 left-0 right-0 h-auto max-h-[80vh] border-t',
    left: 'top-0 left-0 bottom-0 w-80 border-r',
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80"
          onClick={() => onOpenChange?.(false)}
        />
      )}
      <div
        className={cn(
          'fixed z-50 gap-4 bg-background p-6 shadow-lg transition-transform duration-200',
          sideClasses[side],
          open
            ? 'translate-x-0 translate-y-0'
            : side === 'right'
              ? 'translate-x-full'
              : side === 'left'
                ? '-translate-x-full'
                : side === 'top'
                  ? '-translate-y-full'
                  : 'translate-y-full',
        )}
      >
        <div className="flex flex-col space-y-2 text-center sm:text-left">
          <h2 className="text-lg font-semibold">Edit profile</h2>
          <p className="text-sm text-muted-foreground">
            Make changes to your profile here.
          </p>
        </div>
        <div className="py-4">
          <p className="text-sm">Sheet content goes here</p>
        </div>
      </div>
    </>
  );
}
