import { useState } from '@lynx-js/react';
import { Slider } from '@shadcn-lynx/ui/slider';

export default () => {
  const [value, setValue] = useState([20, 60]);
  return (
    <view style={{ padding: 24, gap: 12 }}>
      <text>
        Range: {value[0]} - {value[1]}
      </text>
      <Slider value={value} onValueChange={setValue} />
    </view>
  );
};
