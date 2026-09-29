import { root } from '@lynx-js/react';
import { Avatar, AvatarFallback } from '@shadcn-lynx/ui/avatar';

const example = (
  <view style={{ padding: 24, display: 'flex', flexDirection: 'row', gap: 16 }}>
    <Avatar>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>CD</AvatarFallback>
    </Avatar>
  </view>
);

root.render(example);

export default example;
