import { root, useState } from '@lynx-js/react';
import { Input } from '@shadcn-lynx/ui/input';

function Example() {
  const [value, setValue] = useState('');
  return (
    <view style={{ padding: 24 }}>
      <Input
        value={value}
        onChange={setValue}
        placeholder="Type something..."
      />
    </view>
  );
}

root.render(<Example />);

export default Example;
