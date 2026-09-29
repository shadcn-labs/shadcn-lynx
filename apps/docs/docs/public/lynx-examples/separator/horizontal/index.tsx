import { root } from '@lynx-js/react';
import { Separator } from '@shadcn-lynx/ui/separator';

const example = (
  <view style={{ padding: 24 }}>
    <text>Above separator</text>
    <Separator />
    <text>Below separator</text>
  </view>
);

root.render(example);

export default example;
