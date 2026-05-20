import {
  SliderRoot as BaseSliderRoot,
  SliderTrack as BaseSliderTrack,
  SliderIndicator as BaseSliderIndicator,
  SliderThumb as BaseSliderThumb,
} from '@lynx-js/lynx-ui'
import type {
  SliderRootProps,
  SliderTrackProps,
  SliderIndicatorProps,
  SliderThumbProps,
} from '@lynx-js/lynx-ui'
import { cn } from '@/lib/utils'
import type { ViewProps } from '@/lib/types'

export interface SliderProps extends Omit<SliderRootProps, 'className'> {
  className?: string
  trackClassName?: string
  indicatorClassName?: string
  thumbClassName?: string
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
        className
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
          trackClassName
        )}
      >
        <BaseSliderIndicator
          className={cn('absolute h-full bg-primary', indicatorClassName)}
        />
        <BaseSliderThumb
          className={cn(
            'block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
            thumbClassName
          )}
        />
      </BaseSliderTrack>
    </BaseSliderRoot>
  )
}
