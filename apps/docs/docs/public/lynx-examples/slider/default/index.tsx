import { root, useState } from '@lynx-js/react';
import { Slider } from '@shadcn-lynx/ui/slider';

function Example() {
  const [value, setValue] = useState(50);
  return (
    <view style={{ padding: 24 }}>
      <Slider value={value} onValueChange={setValue} />
    </view>
  );
}

root.render(<Example />);

export default Example;
