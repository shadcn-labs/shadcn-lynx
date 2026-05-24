import { Avatar, AvatarFallback } from '@shadcn-lynx/ui/avatar';

export default (
  <view style={{ padding: 24, display: 'flex', flexDirection: 'row', gap: 16 }}>
    <Avatar>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>CD</AvatarFallback>
    </Avatar>
  </view>
);
