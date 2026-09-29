import { root } from '@lynx-js/react';
import { Avatar, AvatarFallback, AvatarImage } from '@shadcn-lynx/ui/avatar';

const example = (
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

root.render(example);

export default example;
