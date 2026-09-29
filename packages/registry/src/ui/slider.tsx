import type { SliderRootProps } from '@lynx-js/lynx-ui';
import {
  SliderIndicator as BaseSliderIndicator,
  SliderRoot as BaseSliderRoot,
  SliderThumb as BaseSliderThumb,
  SliderTrack as BaseSliderTrack,
} from '@lynx-js/lynx-ui';
import { cn } from '@/lib/utils';

export interface SliderProps extends Omit<SliderRootProps, 'className'> {
  className?: string;
  trackClassName?: string;
  indicatorClassName?: string;
  thumbClassName?: string;
}

export function Slider({
  className,
  trackClassName,
  indicatorClassName,
  thumbClassName,
  value,
  defaultValue,
  step,
  disabled,
  onValueChange,
  onDragging,
  onValueCommit,
  children,
  ...props
}: SliderProps) {
  return (
    <BaseSliderRoot
      className={cn(
        'relative flex w-full touch-none select-none items-center',
        disabled && 'pointer-events-none opacity-50',
        className,
      )}
      value={value}
      defaultValue={defaultValue}
      step={step}
      disabled={disabled}
      onValueChange={onValueChange}
      onDragging={onDragging}
      onValueCommit={onValueCommit}
      {...props}
    >
      <BaseSliderTrack
        className={cn(
          'relative h-2 w-full grow overflow-hidden rounded-full bg-secondary',
          trackClassName,
        )}
      >
        <BaseSliderIndicator
          className={cn('absolute h-full bg-primary', indicatorClassName)}
        />
        <BaseSliderThumb
          className={cn(
            'block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors',
            thumbClassName,
          )}
        />
      </BaseSliderTrack>
    </BaseSliderRoot>
  );
}
