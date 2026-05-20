export interface SliderPreviewProps {
  value?: number[];
  onValueChange?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
}

export function SliderPreview({
  value = [50],
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
}: SliderPreviewProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = [Number(e.target.value)];
    onValueChange?.(newValue);
  };

  const percentage = ((value[0] - min) / (max - min)) * 100;

  return (
    <div className="relative w-full max-w-sm">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={handleChange}
        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
      />
      <div
        className="absolute top-0 left-0 h-2 bg-primary rounded-lg pointer-events-none"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
