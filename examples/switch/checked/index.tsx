import { Switch, SwitchThumb, SwitchTrack } from '@shadcn-lynx/ui/switch';

export default (
  <view style={{ padding: 24 }}>
    <Switch defaultChecked>
      <SwitchTrack />
      <SwitchThumb />
    </Switch>
  </view>
);
