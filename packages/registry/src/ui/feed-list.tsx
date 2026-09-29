import type { FeedListProps as BaseFeedListProps } from '@lynx-js/lynx-ui';
import { FeedList as BaseFeedList } from '@lynx-js/lynx-ui';
import { cn } from '@/lib/utils';

export interface FeedListProps
  extends Omit<
    BaseFeedListProps,
    'listType' | 'scrollOrientation' | 'spanCount'
  > {
  listType?: BaseFeedListProps['listType'];
  scrollOrientation?: BaseFeedListProps['scrollOrientation'];
  spanCount?: BaseFeedListProps['spanCount'];
}

export function FeedList({
  className,
  listType = 'single',
  scrollOrientation = 'vertical',
  spanCount = 1,
  loadMoreFooter,
  noMoreDataFooter,
  children,
  ...props
}: FeedListProps) {
  return (
    <BaseFeedList
      className={cn('h-full w-full bg-background', className)}
      listType={listType}
      scrollOrientation={scrollOrientation}
      spanCount={spanCount}
      loadMoreFooter={loadMoreFooter}
      noMoreDataFooter={noMoreDataFooter}
      {...props}
    >
      {children}
    </BaseFeedList>
  );
}

export type { FeedListRef } from '@lynx-js/lynx-ui';
