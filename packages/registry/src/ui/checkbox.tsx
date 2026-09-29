import type { CheckboxProps as BaseCheckboxProps } from '@lynx-js/lynx-ui';
import {
  Checkbox as BaseCheckbox,
  CheckboxIndicator as BaseCheckboxIndicator,
} from '@lynx-js/lynx-ui';
import type { ReactNode } from '@lynx-js/react';
import type { ViewProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends Omit<ViewProps, 'children'> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  children?:
    | ReactNode
    | ((props: {
        checked: boolean;
        indeterminate: boolean;
        active: boolean;
        disabled: boolean;
      }) => ReactNode);
  checkboxProps?: BaseCheckboxProps['checkboxProps'];
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
          'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background ui-active:opacity-80 ui-checked:bg-primary ui-checked:text-primary-foreground ui-disabled:pointer-events-none ui-disabled:opacity-50',
          className,
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
          <text className="text-[10px] font-medium leading-none text-primary-foreground">
            ✓
          </text>
        </BaseCheckboxIndicator>
      </BaseCheckbox>
      {label ? (
        <text
          className={cn(
            'text-sm font-medium leading-none',
            disabled && 'opacity-70',
          )}
        >
          {label}
        </text>
      ) : null}
    </view>
  );
}
