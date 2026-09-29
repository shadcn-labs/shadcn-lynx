import { Input as BaseInput, TextArea as BaseTextArea } from '@lynx-js/lynx-ui';
import type { ViewProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface InputProps extends Omit<ViewProps, 'children'> {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'digit';
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  inputProps?: Record<string, unknown>;
}

export function Input({ className, disabled, ...props }: InputProps) {
  return (
    <BaseInput
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground',
        disabled && 'pointer-events-none opacity-50',
        className,
      )}
      readonly={disabled}
      {...props}
    />
  );
}

export interface TextareaProps extends Omit<ViewProps, 'children'> {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  rows?: number;
  textareaProps?: Record<string, unknown>;
}

export function Textarea({ className, disabled, ...props }: TextareaProps) {
  return (
    <BaseTextArea
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground',
        disabled && 'pointer-events-none opacity-50',
        className,
      )}
      readonly={disabled}
      {...props}
    />
  );
}
