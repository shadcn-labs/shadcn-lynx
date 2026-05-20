import type {
  DialogBackdropProps as BaseDialogBackdropProps,
  DialogCloseProps as BaseDialogCloseProps,
  DialogContentProps as BaseDialogContentProps,
  DialogTriggerProps as BaseDialogTriggerProps,
} from '@lynx-js/lynx-ui';
import {
  DialogBackdrop as BaseDialogBackdrop,
  DialogClose as BaseDialogClose,
  DialogContent as BaseDialogContent,
  DialogRoot as BaseDialogRoot,
  DialogTrigger as BaseDialogTrigger,
} from '@lynx-js/lynx-ui';
import type { ReactNode } from '@lynx-js/react';
import type { TextProps, ViewProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export interface DialogProps {
  show?: boolean;
  defaultShow?: boolean;
  onShowChange?: (open: boolean) => void;
  onOpen?: () => void;
  onClose?: () => void;
  forceMount?: boolean;
  children: ReactNode;
}

export function DialogRoot({
  show,
  defaultShow,
  onShowChange,
  onOpen,
  onClose,
  forceMount,
  children,
}: DialogProps) {
  return (
    <BaseDialogRoot
      show={show}
      defaultShow={defaultShow}
      onShowChange={onShowChange}
      onOpen={onOpen}
      onClose={onClose}
      forceMount={forceMount}
    >
      {children}
    </BaseDialogRoot>
  );
}

export interface DialogTriggerProps extends BaseDialogTriggerProps {}

export function DialogTrigger({
  className,
  children,
  disabled,
  ...props
}: DialogTriggerProps) {
  return (
    <BaseDialogTrigger className={className} disabled={disabled} {...props}>
      {children}
    </BaseDialogTrigger>
  );
}

export interface DialogCloseProps extends BaseDialogCloseProps {}

export function DialogClose({
  className,
  children,
  disabled,
  ...props
}: DialogCloseProps) {
  return (
    <BaseDialogClose className={className} disabled={disabled} {...props}>
      {children}
    </BaseDialogClose>
  );
}

export interface DialogBackdropProps extends BaseDialogBackdropProps {}

export function DialogBackdrop({
  className,
  clickToClose,
  onClick,
  ...props
}: DialogBackdropProps) {
  return (
    <BaseDialogBackdrop
      className={cn('fixed inset-0 z-50 bg-black/80', className)}
      clickToClose={clickToClose}
      onClick={onClick}
      {...props}
    />
  );
}

export interface DialogContentProps extends BaseDialogContentProps {}

export function DialogContent({
  className,
  children,
  ...props
}: DialogContentProps) {
  return (
    <BaseDialogContent
      className={cn(
        'fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 rounded-lg',
        className,
      )}
      {...props}
    >
      {children}
    </BaseDialogContent>
  );
}

export interface DialogHeaderProps extends ViewProps {}

export function DialogHeader({
  className,
  children,
  ...props
}: DialogHeaderProps) {
  return (
    <view
      className={cn(
        'flex flex-col space-y-1.5 text-center sm:text-left',
        className,
      )}
      {...props}
    >
      {children}
    </view>
  );
}

export interface DialogFooterProps extends ViewProps {}

export function DialogFooter({
  className,
  children,
  ...props
}: DialogFooterProps) {
  return (
    <view
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
        className,
      )}
      {...props}
    >
      {children}
    </view>
  );
}

export interface DialogTitleProps extends TextProps {}

export function DialogTitle({
  className,
  children,
  ...props
}: DialogTitleProps) {
  return (
    <text
      className={cn(
        'text-lg font-semibold leading-none tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </text>
  );
}

export interface DialogDescriptionProps extends TextProps {}

export function DialogDescription({
  className,
  children,
  ...props
}: DialogDescriptionProps) {
  return (
    <text className={cn('text-sm text-muted-foreground', className)} {...props}>
      {children}
    </text>
  );
}
