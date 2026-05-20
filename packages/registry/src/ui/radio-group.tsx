import {
  RadioGroupRoot as BaseRadioGroupRoot,
  Radio as BaseRadio,
  RadioIndicator as BaseRadioIndicator,
} from '@lynx-js/lynx-ui'
import type { RadioGroupRootProps as BaseRadioGroupRootProps, RadioProps as BaseRadioProps } from '@lynx-js/lynx-ui'
import { cn } from '@/lib/utils'
import type { ViewProps, TextProps } from '@/lib/types'

export interface RadioGroupProps extends BaseRadioGroupRootProps {
  className?: string
}

export function RadioGroupRoot({
  className,
  value,
  defaultValue,
  disabled,
  onValueChange,
  children,
  ...props
}: RadioGroupProps) {
  return (
    <BaseRadioGroupRoot
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      onValueChange={onValueChange}
      {...props}
    >
      <view className={cn('grid gap-2', className)}>
        {children}
      </view>
    </BaseRadioGroupRoot>
  )
}

export interface RadioItemProps extends BaseRadioProps {
  label?: string
}

export function RadioItem({
  className,
  value,
  disabled,
  label,
  radioProps,
  children,
  ...props
}: RadioItemProps) {
  return (
    <view className="flex items-center space-x-2">
      <BaseRadio
        className={cn(
          'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        value={value}
        disabled={disabled}
        radioProps={radioProps}
        {...props}
      >
        <BaseRadioIndicator
          className={cn('flex items-center justify-center')}
        >
          <view className="h-2.5 w-2.5 rounded-full bg-current" />
        </BaseRadioIndicator>
      </BaseRadio>
      {label ? (
        <text className={cn('text-sm font-medium leading-none')}>
          {label}
        </text>
      ) : null}
    </view>
  )
}
