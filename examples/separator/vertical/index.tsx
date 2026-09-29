import { root } from '@lynx-js/react';
import { Separator } from '@shadcn-lynx/ui/separator';

const example = (
  <view
    style={{ padding: 24, display: 'flex', flexDirection: 'row', height: 60 }}
  >
    <text>Left</text>
    <Separator orientation="vertical" />
    <text>Right</text>
  </view>
);

root.render(example);

export default example;
