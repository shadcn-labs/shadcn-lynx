import { root, useState } from '@lynx-js/react';
import { Switch } from '@shadcn-lynx/ui/switch';

function Example() {
  const [checked, setChecked] = useState(false);
  return (
    <view style={{ padding: 24 }}>
      <Switch checked={checked} onChange={setChecked} />
    </view>
  );
}

root.render(<Example />);

export default Example;
