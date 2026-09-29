import type { ListProps as BaseListProps } from '@lynx-js/lynx-ui';
import { List as BaseList } from '@lynx-js/lynx-ui';
import { cn } from '@/lib/utils';

export interface ListProps
  extends Omit<BaseListProps, 'listType' | 'scrollOrientation' | 'spanCount'> {
  listType?: BaseListProps['listType'];
  scrollOrientation?: BaseListProps['scrollOrientation'];
  spanCount?: BaseListProps['spanCount'];
}

export function List({
  className,
  listType = 'single',
  scrollOrientation = 'vertical',
  spanCount = 1,
  children,
  ...props
}: ListProps) {
  return (
    <BaseList
      className={cn('h-full w-full bg-background', className)}
      listType={listType}
      scrollOrientation={scrollOrientation}
      spanCount={spanCount}
      {...props}
    >
      {children}
    </BaseList>
  );
}

export type { ListRef } from '@lynx-js/lynx-ui';
