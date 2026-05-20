import {
  SheetRoot as BaseSheetRoot,
  SheetContent as BaseSheetContent,
  SheetBackdrop as BaseSheetBackdrop,
  SheetHandle as BaseSheetHandle,
  SheetView as BaseSheetView,
} from '@lynx-js/lynx-ui'
import type {
  SheetRootProps,
  SheetContentProps as BaseSheetContentProps,
  SheetBackdropProps as BaseSheetBackdropProps,
  SheetHandleProps,
  SheetViewProps,
  SheetSide,
} from '@lynx-js/lynx-ui'
import { cn } from '@/lib/utils'
import type { ViewProps, TextProps } from '@/lib/types'

export interface SheetProps extends SheetRootProps {}

export function SheetRoot({
  side,
  show,
  defaultShow,
  onShowChange,
  onOpen,
  onClose,
  snapPoints,
  initialSnap,
  onSnapChange,
  dragDisabled,
  enableDragToClose,
  handleOnly,
  children,
  ...props
}: SheetProps) {
  return (
    <BaseSheetRoot
      side={side}
      show={show}
      defaultShow={defaultShow}
      onShowChange={onShowChange}
      onOpen={onOpen}
      onClose={onClose}
      snapPoints={snapPoints}
      initialSnap={initialSnap}
      onSnapChange={onSnapChange}
      dragDisabled={dragDisabled}
      enableDragToClose={enableDragToClose}
      handleOnly={handleOnly}
      {...props}
    >
      {children}
    </BaseSheetRoot>
  )
}

export interface SheetTriggerProps extends ViewProps {}

export function SheetTrigger({ className, children, ...props }: SheetTriggerProps) {
  return (
    <view className={className} {...props}>
      {children}
    </view>
  )
}

export interface SheetCloseProps extends ViewProps {}

export function SheetClose({ className, children, ...props }: SheetCloseProps) {
  return (
    <view className={className} {...props}>
      {children}
    </view>
  )
}

export interface SheetContentProps extends BaseSheetContentProps {
  side?: SheetSide
}

export function SheetContent({
  className,
  innerClassName,
  side = 'bottom',
  children,
  ...props
}: SheetContentProps) {
  const sideClasses: Record<SheetSide, string> = {
    top: 'inset-x-0 top-0 border-b',
    bottom: 'inset-x-0 bottom-0 border-t',
    left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
    right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
    start: 'inset-y-0 start-0 h-full w-3/4 border-r sm:max-w-sm',
    end: 'inset-y-0 end-0 h-full w-3/4 border-l sm:max-w-sm',
  }

  return (
    <BaseSheetContent
      className={cn(
        'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out',
        sideClasses[side],
        className
      )}
      innerClassName={innerClassName}
      {...props}
    >
      {children}
      <BaseSheetHandle
        className={cn('mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted')}
      />
    </BaseSheetContent>
  )
}

export interface SheetHeaderProps extends ViewProps {}

export function SheetHeader({ className, children, ...props }: SheetHeaderProps) {
  return (
    <view
      className={cn('flex flex-col space-y-2 text-center sm:text-left', className)}
      {...props}
    >
      {children}
    </view>
  )
}

export interface SheetFooterProps extends ViewProps {}

export function SheetFooter({ className, children, ...props }: SheetFooterProps) {
  return (
    <view
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
      {...props}
    >
      {children}
    </view>
  )
}

export interface SheetTitleProps extends TextProps {}

export function SheetTitle({ className, children, ...props }: SheetTitleProps) {
  return (
    <text
      className={cn('text-lg font-semibold text-foreground', className)}
      {...props}
    >
      {children}
    </text>
  )
}

export interface SheetDescriptionProps extends TextProps {}

export function SheetDescription({ className, children, ...props }: SheetDescriptionProps) {
  return (
    <text
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    >
      {children}
    </text>
  )
}

export interface SheetBackdropProps extends BaseSheetBackdropProps {}

export function SheetBackdrop({ className, onClick, clickToClose, ...props }: SheetBackdropProps) {
  return (
    <BaseSheetBackdrop
      className={cn('fixed inset-0 z-50 bg-black/80', className)}
      onClick={onClick}
      clickToClose={clickToClose}
      {...props}
    />
  )
}
