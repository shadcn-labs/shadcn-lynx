import { RadioGroupRoot, RadioItem } from '@shadcn-lynx/ui/radio-group';

export default (
  <view style={{ padding: 24 }}>
    <RadioGroupRoot>
      <RadioItem value="option-1" label="Option 1" />
      <RadioItem value="option-2" label="Option 2" />
      <RadioItem value="option-3" label="Option 3" />
    </RadioGroupRoot>
  </view>
);
