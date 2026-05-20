import type { ViewProps, TextProps } from '@/lib/types'
import { cn } from '@/lib/utils'

export interface CardProps extends ViewProps {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <view
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </view>
  )
}

export interface CardHeaderProps extends ViewProps {}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <view className={cn('flex flex-col space-y-1.5 p-6', className)} {...props}>
      {children}
    </view>
  )
}

export interface CardTitleProps extends TextProps {}

export function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <text
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </text>
  )
}

export interface CardDescriptionProps extends TextProps {}

export function CardDescription({ className, children, ...props }: CardDescriptionProps) {
  return (
    <text
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    >
      {children}
    </text>
  )
}

export interface CardContentProps extends ViewProps {}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <view className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </view>
  )
}

export interface CardFooterProps extends ViewProps {}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <view className={cn('flex items-center p-6 pt-0', className)} {...props}>
      {children}
    </view>
  )
}
