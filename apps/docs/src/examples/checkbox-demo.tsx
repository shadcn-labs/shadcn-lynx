import { cn } from '@/lib/utils';

export function Checkbox({
  className,
  checked,
  defaultChecked,
  disabled,
  label,
  onChange,
  ...props
}: {
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className={cn(
          'h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        {...props}
      />
      {label && (
        <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </span>
      )}
    </label>
  );
}

export function CheckboxDefaultDemo() {
  return <Checkbox label="Accept terms and conditions" />;
}

export function CheckboxCheckedDemo() {
  return <Checkbox checked label="Checked checkbox" />;
}

export function CheckboxDisabledDemo() {
  return <Checkbox disabled label="Disabled checkbox" />;
}

export function CheckboxWithFormDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox label="Email notifications" />
      <Checkbox label="SMS notifications" />
      <Checkbox label="Push notifications" />
    </div>
  );
}

export function CheckboxIndeterminateDemo() {
  return <Checkbox label="Indeterminate state" />;
}
