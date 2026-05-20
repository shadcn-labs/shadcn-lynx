import {
  Checkbox as BaseCheckbox,
  CheckboxIndicator as BaseCheckboxIndicator,
} from '@lynx-js/lynx-ui'
import type { CheckboxProps as BaseCheckboxProps } from '@lynx-js/lynx-ui'
import { cn } from '@/lib/utils'
import type { ViewProps, TextProps } from '@/lib/types'

export interface CheckboxProps extends Omit<ViewProps, 'children'> {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  onChange?: (checked: boolean) => void
  label?: string
  children?: React.ReactNode | ((props: { checked: boolean; indeterminate: boolean; active: boolean; disabled: boolean }) => React.ReactNode)
  checkboxProps?: BaseCheckboxProps['checkboxProps']
}

export function Checkbox({
  className,
  checked,
  defaultChecked,
  disabled,
  indeterminate,
  onChange,
  label,
  checkboxProps,
  ...props
}: CheckboxProps) {
  return (
    <view className="flex items-center space-x-2">
      <BaseCheckbox
        className={cn(
          'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ui-checked:bg-primary ui-checked:text-primary-foreground',
          className
        )}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        indeterminate={indeterminate}
        onChange={onChange}
        checkboxProps={checkboxProps}
        {...props}
      >
        <BaseCheckboxIndicator className="flex h-full w-full items-center justify-center">
          <text className="text-[10px] font-medium leading-none text-primary-foreground">✓</text>
        </BaseCheckboxIndicator>
      </BaseCheckbox>
      {label ? (
        <text
          className={cn(
            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          )}
        >
          {label}
        </text>
      ) : null}
    </view>
  )
}
