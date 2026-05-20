import { cn } from '@/lib/utils';

export interface SwitchPreviewProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function SwitchPreview({
  className,
  checked,
  defaultChecked,
  onCheckedChange,
  ...props
}: SwitchPreviewProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedChange?.(e.target.checked);
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={handleChange}
        {...props}
      />
      <div
        className={cn(
          'relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary',
          className,
        )}
      />
    </label>
  );
}
