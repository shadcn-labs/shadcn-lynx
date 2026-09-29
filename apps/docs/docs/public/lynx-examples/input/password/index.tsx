import { root, useState } from '@lynx-js/react';
import { Input } from '@shadcn-lynx/ui/input';

function Example() {
  const [value, setValue] = useState('');
  return (
    <view style={{ padding: 24 }}>
      <Input
        type="password"
        value={value}
        onChange={setValue}
        placeholder="Password"
      />
    </view>
  );
}

root.render(<Example />);

export default Example;
