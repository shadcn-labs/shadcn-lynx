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
        'inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
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
          'flex h-full w-full items-center rounded-full transition-colors',
          'ui-checked:bg-primary ui-unchecked:bg-input',
        )}
      >
        <BaseSwitchThumb
          className={cn(
            'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
            'ui-checked:translate-x-5 ui-unchecked:translate-x-0',
          )}
        />
      </BaseSwitchTrack>
    </BaseSwitch>
  );
}
