import { root } from '@lynx-js/react';
import { Input } from '@shadcn-lynx/ui/input';

const example = (
  <view style={{ padding: 24 }}>
    <Input disabled placeholder="Disabled input" />
  </view>
);

root.render(example);

export default example;
