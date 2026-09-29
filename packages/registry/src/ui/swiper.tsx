import type {
  SwiperItemProps as BaseSwiperItemProps,
  SwiperProps as BaseSwiperProps,
} from '@lynx-js/lynx-ui';
import {
  Swiper as BaseSwiper,
  SwiperItem as BaseSwiperItem,
} from '@lynx-js/lynx-ui';
import { cn } from '@/lib/utils';

export type SwiperProps<T> = BaseSwiperProps<T> & {
  className?: string;
};

export function Swiper<T>({ className, children, ...props }: SwiperProps<T>) {
  return (
    <view
      className={cn(
        'w-full overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm',
        className,
      )}
    >
      <BaseSwiper {...props}>{children}</BaseSwiper>
    </view>
  );
}

export interface SwiperItemProps extends BaseSwiperItemProps {
  className?: string;
}

export function SwiperItem({ className, children, ...props }: SwiperItemProps) {
  return (
    <BaseSwiperItem {...props}>
      <view className={cn('h-full w-full overflow-hidden', className)}>
        {children}
      </view>
    </BaseSwiperItem>
  );
}

export type { SwiperRef } from '@lynx-js/lynx-ui';
