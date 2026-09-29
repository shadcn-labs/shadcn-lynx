import { root } from '@lynx-js/react';
import { RadioGroupRoot, RadioItem } from '@shadcn-lynx/ui/radio-group';

const example = (
  <view style={{ padding: 24 }}>
    <RadioGroupRoot>
      <RadioItem value="option-1" label="Option 1" />
      <RadioItem value="option-2" label="Option 2" />
      <RadioItem value="option-3" label="Option 3" />
    </RadioGroupRoot>
  </view>
);

root.render(example);

export default example;
