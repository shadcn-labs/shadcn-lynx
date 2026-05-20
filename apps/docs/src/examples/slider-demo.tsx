import { cn } from '@/lib/utils';

export function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  step = 1,
  disabled,
}: {
  className?: string;
  defaultValue?: number[];
  value?: number[];
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}) {
  const initialValue = value?.[0] ?? defaultValue?.[0] ?? 50;
  const percentage = ((initialValue - min) / (max - min)) * 100;

  return (
    <div
      className={cn(
        'relative flex w-full touch-none select-none items-center',
        className,
      )}
    >
      <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
        <div
          className="absolute h-full bg-primary"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div
        className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        style={{
          position: 'absolute',
          left: `${percentage}%`,
          transform: 'translateX(-50%)',
        }}
      />
    </div>
  );
}

export function SliderDefaultDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} />;
}

export function SliderRangeDemo() {
  return <Slider defaultValue={[25, 75]} max={100} step={1} />;
}

export function SliderDisabledDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} disabled />;
}
