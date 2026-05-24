import { useState } from '@lynx-js/react';
import { Input } from '@shadcn-lynx/ui/input';

export default () => {
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
};
