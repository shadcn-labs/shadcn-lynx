import { cn } from '@/lib/utils';

export interface LabelPreviewProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export function LabelPreview({
  className,
  required,
  children,
  ...props
}: LabelPreviewProps) {
  return (
    <label
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      )}
      {...props}
    >
      {children}
      {required && <span className="text-destructive ml-1">*</span>}
    </label>
  );
}
