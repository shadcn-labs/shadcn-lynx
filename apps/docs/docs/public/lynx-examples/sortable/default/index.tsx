import { root } from '@lynx-js/react';
import {
  type SortableData,
  SortableItem,
  SortableRoot,
} from '@shadcn-lynx/ui/sortable';

const items: SortableData<string>[] = [
  'Backlog',
  'In progress',
  'Review',
  'Done',
].map((label) => ({
  dataItem: label,
  getSortingKey: () => label,
}));

const example = (
  <view className="p-6">
    <SortableRoot
      data={items}
      onSortEnd={(sortedItems) =>
        console.info(sortedItems.map((item) => item.dataItem))
      }
    >
      {(item) => (
        <SortableItem sortingKey={item.getSortingKey()}>
          <text className="text-sm font-medium">{item.dataItem}</text>
        </SortableItem>
      )}
    </SortableRoot>
  </view>
);

root.render(example);

export default example;
