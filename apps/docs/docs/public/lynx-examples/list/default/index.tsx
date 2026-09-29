import { root } from '@lynx-js/react';
import { List } from '@shadcn-lynx/ui/list';

const items = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

const example = (
  <List listId="component-list" className="h-[420px] p-3">
    {items.map((item) => (
      <list-item item-key={item} key={item}>
        <view className="mb-2 rounded-lg border bg-card p-4">
          <text className="text-sm font-medium text-card-foreground">
            {item}
          </text>
        </view>
      </list-item>
    ))}
  </List>
);

root.render(example);

export default example;
