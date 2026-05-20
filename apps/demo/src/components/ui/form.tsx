import {
  FormRoot as BaseFormRoot,
  FormField as BaseFormField,
  FormSubmitButton as BaseFormSubmitButton,
} from '@lynx-js/lynx-ui'
import type {
  FormRootProps,
  FormSubmitButtonProps as BaseFormSubmitButtonProps,
} from '@lynx-js/lynx-ui'
import { cn } from '@/lib/utils'
import type { ViewProps, TextProps } from '@/lib/types'

export interface FormProps extends FormRootProps {
  className?: string
}

export function FormRoot({ className, children, initialValues, onSubmit, onChanged, ...props }: FormProps) {
  return (
    <BaseFormRoot
      initialValues={initialValues}
      onSubmit={onSubmit}
      onChanged={onChanged}
      {...props}
    >
      <view className={cn('space-y-6', className)}>
        {children}
      </view>
    </BaseFormRoot>
  )
}

export type { FormFieldProps } from '@lynx-js/lynx-ui'
import type { FormFieldProps } from '@lynx-js/lynx-ui'

export function FormField(props: FormFieldProps) {
  return (
    <BaseFormField {...props} />
  )
}

export interface FormSubmitButtonProps extends BaseFormSubmitButtonProps {}

export function FormSubmitButton({ className, children, onSubmit, ...props }: FormSubmitButtonProps) {
  return (
    <BaseFormSubmitButton
      className={cn('w-full', className)}
      onSubmit={onSubmit}
      {...props}
    >
      {children}
    </BaseFormSubmitButton>
  )
}

export interface FormItemProps extends ViewProps {}

export function FormItem({ className, children, ...props }: FormItemProps) {
  return (
    <view className={cn('space-y-2', className)} {...props}>
      {children}
    </view>
  )
}

export interface FormLabelProps extends TextProps {}

export function FormLabel({ className, children, ...props }: FormLabelProps) {
  return (
    <text
      className={cn('text-sm font-medium', className)}
      {...props}
    >
      {children}
    </text>
  )
}

export interface FormControlProps extends ViewProps {}

export function FormControl({ className, children, ...props }: FormControlProps) {
  return (
    <view className={className} {...props}>
      {children}
    </view>
  )
}

export interface FormMessageProps extends TextProps {}

export function FormMessage({ className, children, ...props }: FormMessageProps) {
  return (
    <text
      className={cn('text-sm font-medium text-destructive', className)}
      {...props}
    >
      {children}
    </text>
  )
}
