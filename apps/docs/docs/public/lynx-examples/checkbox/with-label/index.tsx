import { root } from '@lynx-js/react';
import { Checkbox } from '@shadcn-lynx/ui/checkbox';

const example = (
  <view style={{ padding: 24 }}>
    <Checkbox label="Accept terms and conditions" />
  </view>
);

root.render(example);

export default example;
