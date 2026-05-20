import { cn } from '@/lib/utils';

export interface CheckboxPreviewProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function CheckboxPreview({
  className,
  checked,
  defaultChecked,
  onCheckedChange,
  ...props
}: CheckboxPreviewProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedChange?.(e.target.checked);
  };

  return (
    <input
      type="checkbox"
      className={cn(
        'size-4 rounded border-border bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      checked={checked}
      defaultChecked={defaultChecked}
      onChange={handleChange}
      {...props}
    />
  );
}
