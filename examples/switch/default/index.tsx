import { useState } from '@lynx-js/react';
import { Switch, SwitchThumb, SwitchTrack } from '@shadcn-lynx/ui/switch';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <view style={{ padding: 24 }}>
      <Switch checked={checked} onChange={setChecked}>
        <SwitchTrack />
        <SwitchThumb />
      </Switch>
    </view>
  );
};
