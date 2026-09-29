import { root } from '@lynx-js/react';
import { FeedList } from '@shadcn-lynx/ui/feed-list';

const stories = Array.from({ length: 16 }, (_, index) => ({
  id: `story-${index}`,
  title: `Story ${index + 1}`,
}));

const example = (
  <FeedList listId="stories" className="h-[420px] p-3">
    {stories.map((story) => (
      <list-item item-key={story.id} key={story.id}>
        <view className="mb-3 rounded-xl border bg-card p-4 shadow-sm">
          <text className="text-base font-semibold text-card-foreground">
            {story.title}
          </text>
          <text className="mt-1 text-sm text-muted-foreground">
            A compact feed item styled like a shadcn card.
          </text>
        </view>
      </list-item>
    ))}
  </FeedList>
);

root.render(example);

export default example;
