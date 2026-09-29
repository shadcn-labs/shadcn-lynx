import { root } from '@lynx-js/react';
import { Draggable } from '@shadcn-lynx/ui/draggable';

const example = (
  <view style={{ height: '360px', padding: '24px' }}>
    <Draggable resetOnEnd className="h-28 w-48">
      <text className="text-sm font-medium">Drag this card</text>
    </Draggable>
  </view>
);

root.render(example);

export default example;
