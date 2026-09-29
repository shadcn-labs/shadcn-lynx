import { root } from '@lynx-js/react';
import { Slider } from '@shadcn-lynx/ui/slider';

const example = (
  <view style={{ padding: 24 }}>
    <Slider disabled value={50} />
  </view>
);

root.render(example);

export default example;
