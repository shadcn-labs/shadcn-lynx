import type {
  PopoverArrowProps as BasePopoverArrowProps,
  PopoverBackdropProps as BasePopoverBackdropProps,
  PopoverContentProps as BasePopoverContentProps,
  PopoverPositionerProps as BasePopoverPositionerProps,
  PopoverTriggerProps as BasePopoverTriggerProps,
} from '@lynx-js/lynx-ui';
import {
  PopoverArrow as BasePopoverArrow,
  PopoverBackdrop as BasePopoverBackdrop,
  PopoverContent as BasePopoverContent,
  PopoverPositioner as BasePopoverPositioner,
  PopoverRoot as BasePopoverRoot,
  PopoverTrigger as BasePopoverTrigger,
} from '@lynx-js/lynx-ui';
import type { ReactNode } from '@lynx-js/react';
import { cn } from '@/lib/utils';

export interface PopoverProps {
  show?: boolean;
  defaultShow?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  onOpen?: () => void;
  onClose?: () => void;
  forceMount?: boolean;
  children: ReactNode;
}

export function PopoverRoot({
  show,
  defaultShow,
  onVisibleChange,
  onOpen,
  onClose,
  forceMount,
  children,
}: PopoverProps) {
  return (
    <BasePopoverRoot
      show={show}
      defaultShow={defaultShow}
      onVisibleChange={onVisibleChange}
      onOpen={onOpen}
      onClose={onClose}
      forceMount={forceMount}
    >
      {children}
    </BasePopoverRoot>
  );
}

export interface PopoverTriggerProps extends BasePopoverTriggerProps {}

export function PopoverTrigger({
  className,
  children,
  disabled,
  onClick,
  ...props
}: PopoverTriggerProps) {
  return (
    <BasePopoverTrigger
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </BasePopoverTrigger>
  );
}

export interface PopoverContentProps extends BasePopoverContentProps {}

export function PopoverContent({
  className,
  children,
  ...props
}: PopoverContentProps) {
  return (
    <BasePopoverContent
      className={cn(
        'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none',
        className,
      )}
      {...props}
    >
      {children}
    </BasePopoverContent>
  );
}

export interface PopoverPositionerProps extends BasePopoverPositionerProps {}

export function PopoverPositioner({
  className,
  children,
  placement,
  ...props
}: PopoverPositionerProps) {
  return (
    <BasePopoverPositioner
      className={className}
      placement={placement}
      {...props}
    >
      {children}
    </BasePopoverPositioner>
  );
}

export interface PopoverBackdropProps extends BasePopoverBackdropProps {}

export function PopoverBackdrop({
  className,
  onClick,
  children,
  ...props
}: PopoverBackdropProps) {
  return (
    <BasePopoverBackdrop
      className={cn('fixed inset-0 z-50 bg-black/80', className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </BasePopoverBackdrop>
  );
}

export interface PopoverArrowProps extends BasePopoverArrowProps {}

export function PopoverArrow({
  className,
  size,
  color,
  offset,
  ...props
}: PopoverArrowProps) {
  return (
    <BasePopoverArrow
      className={cn('fill-popover', className)}
      size={size}
      color={color}
      offset={offset}
      {...props}
    />
  );
}
