import type { SwitchProps as BaseSwitchProps } from '@lynx-js/lynx-ui';
import {
  Switch as BaseSwitch,
  SwitchThumb as BaseSwitchThumb,
  SwitchTrack as BaseSwitchTrack,
} from '@lynx-js/lynx-ui';
import type { ReactNode } from '@lynx-js/react';
import type { ViewProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface SwitchProps extends Omit<ViewProps, 'children'> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  children?:
    | ReactNode
    | ((props: {
        checked: boolean;
        active: boolean;
        disabled: boolean;
      }) => ReactNode);
  switchProps?: BaseSwitchProps['switchProps'];
}

export function Switch({
  className,
  checked,
  defaultChecked,
  disabled,
  onChange,
  children,
  switchProps,
  ...props
}: SwitchProps) {
  return (
    <BaseSwitch
      className={cn(
        'inline-flex h-[24px] w-[44px] shrink-0 items-center rounded-full border-2 border-transparent transition-colors ring-offset-background ui-active:opacity-80 ui-disabled:pointer-events-none ui-disabled:opacity-50',
        className,
      )}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={onChange}
      switchProps={switchProps}
      {...props}
    >
      <BaseSwitchTrack
        className={cn(
          'flex h-full w-full items-center rounded-full bg-input transition-colors',
          'ui-checked:bg-primary',
        )}
      >
        <BaseSwitchThumb
          className={cn(
            'pointer-events-none block h-5 w-5 translate-x-0 rounded-full bg-background shadow-lg ring-0 transition-transform',
            'ui-checked:translate-x-5',
          )}
        />
      </BaseSwitchTrack>
    </BaseSwitch>
  );
}
