import { useState } from '@lynx-js/react';
import { Slider } from '@shadcn-lynx/ui/slider';

export default () => {
  const [value, setValue] = useState(50);
  return (
    <view style={{ padding: 24 }}>
      <Slider value={value} onValueChange={setValue} />
    </view>
  );
};
