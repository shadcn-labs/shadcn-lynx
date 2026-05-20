import { cn } from '@/lib/utils';

export interface PopoverPreviewProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function PopoverPreview({
  open,
  onOpenChange: _onOpenChange,
}: PopoverPreviewProps) {
  return (
    <div className="relative">
      <div
        className={cn(
          'absolute z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none top-full left-0 mt-2',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col space-y-2">
          <p className="text-sm font-medium">Settings</p>
          <div className="flex flex-col space-y-1">
            <button
              type="button"
              className="text-left text-sm hover:bg-accent px-2 py-1.5 rounded"
            >
              Display
            </button>
            <button
              type="button"
              className="text-left text-sm hover:bg-accent px-2 py-1.5 rounded"
            >
              Appearance
            </button>
            <button
              type="button"
              className="text-left text-sm hover:bg-accent px-2 py-1.5 rounded"
            >
              Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
