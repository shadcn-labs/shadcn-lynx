import { Avatar, AvatarFallback, AvatarImage } from '@shadcn-lynx/ui/avatar';

export default (
  <view style={{ padding: 24, display: 'flex', flexDirection: 'row', gap: 16 }}>
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/80?img=1" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/80?img=2" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  </view>
);
