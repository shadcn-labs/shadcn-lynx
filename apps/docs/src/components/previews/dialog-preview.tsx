import { cn } from '@/lib/utils';

export interface DialogPreviewProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function DialogPreview({ open, onOpenChange }: DialogPreviewProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 bg-black/80',
        open ? 'block' : 'hidden',
      )}
      onClick={() => onOpenChange?.(false)}
    >
      <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2 className="text-lg font-semibold leading-none tracking-tight">
            Edit profile
          </h2>
          <p className="text-sm text-muted-foreground">
            Make changes to your profile here.
          </p>
        </div>
        <div className="py-4">
          <p className="text-sm">Profile content goes here</p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            onClick={() => onOpenChange?.(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => onOpenChange?.(false)}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
