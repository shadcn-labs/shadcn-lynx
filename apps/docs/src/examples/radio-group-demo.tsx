export function RadioGroupRoot({
  defaultValue,
  value,
  disabled,
  children,
}: {
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return <div className="grid gap-2">{children}</div>;
}

export function RadioItem({
  value,
  label,
  disabled,
}: {
  value: string;
  label?: string;
  disabled?: boolean;
}) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        value={value}
        disabled={disabled}
        className="h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
      {label && (
        <span className="text-sm font-medium leading-none">{label}</span>
      )}
    </label>
  );
}

export function RadioGroupDefaultDemo() {
  return (
    <RadioGroupRoot defaultValue="option1">
      <RadioItem value="option1" label="Option 1" />
      <RadioItem value="option2" label="Option 2" />
      <RadioItem value="option3" label="Option 3" />
    </RadioGroupRoot>
  );
}

export function RadioGroupDisabledDemo() {
  return (
    <RadioGroupRoot defaultValue="option1" disabled>
      <RadioItem value="option1" label="Option 1" />
      <RadioItem value="option2" label="Option 2" />
    </RadioGroupRoot>
  );
}

export function RadioGroupControlledDemo() {
  return (
    <RadioGroupRoot value="option2">
      <RadioItem value="option1" label="Option 1" />
      <RadioItem value="option2" label="Option 2" />
      <RadioItem value="option3" label="Option 3" />
    </RadioGroupRoot>
  );
}
