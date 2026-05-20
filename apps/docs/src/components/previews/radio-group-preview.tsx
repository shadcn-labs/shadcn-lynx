export interface RadioGroupPreviewProps {
  value?: string;
  onValueChange?: (value: string) => void;
  options?: { value: string; label: string }[];
}

export function RadioGroupPreview({
  value,
  onValueChange,
  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
}: RadioGroupPreviewProps) {
  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="radio"
            name="radio-group"
            value={option.value}
            checked={value === option.value}
            onChange={() => onValueChange?.(option.value)}
            className="size-4 border-border text-primary focus:ring-primary"
          />
          <span className="text-sm">{option.label}</span>
        </label>
      ))}
    </div>
  );
}
