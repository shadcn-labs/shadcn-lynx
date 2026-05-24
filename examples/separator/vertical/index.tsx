import { Separator } from '@shadcn-lynx/ui/separator';

export default (
  <view
    style={{ padding: 24, display: 'flex', flexDirection: 'row', height: 60 }}
  >
    <text>Left</text>
    <Separator orientation="vertical" />
    <text>Right</text>
  </view>
);
