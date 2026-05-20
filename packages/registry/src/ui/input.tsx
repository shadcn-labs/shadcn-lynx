import { Input as BaseInput, TextArea as BaseTextArea } from '@lynx-js/lynx-ui'
import { cn } from '@/lib/utils'
import type { ViewProps } from '@/lib/types'

export interface InputProps extends Omit<ViewProps, 'children'> {
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'digit'
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  inputProps?: Record<string, unknown>
}

export function Input({
  className,
  ...props
}: InputProps) {
  return (
    <BaseInput
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}

export interface TextareaProps extends Omit<ViewProps, 'children'> {
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  rows?: number
  textareaProps?: Record<string, unknown>
}

export function Textarea({
  className,
  ...props
}: TextareaProps) {
  return (
    <BaseTextArea
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}
