import { useState } from '@lynx-js/react';
import { Input } from '@shadcn-lynx/ui/input';
import {
  PopoverBackdrop,
  PopoverContent,
  PopoverPositioner,
  PopoverRoot,
  PopoverTrigger,
} from '@shadcn-lynx/ui/popover';

export default () => {
  const [name, setName] = useState('');
  return (
    <view style={{ padding: 24 }}>
      <PopoverRoot>
        <PopoverTrigger>
          <view
            style={{ padding: 12, backgroundColor: '#111827', borderRadius: 8 }}
          >
            <text style={{ color: '#fff' }}>Edit Name</text>
          </view>
        </PopoverTrigger>
        <PopoverBackdrop />
        <PopoverPositioner placement="bottom">
          <PopoverContent>
            <view style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <text style={{ fontWeight: 'bold' }}>Name</text>
              <Input value={name} onChange={setName} placeholder="Enter name" />
            </view>
          </PopoverContent>
        </PopoverPositioner>
      </PopoverRoot>
    </view>
  );
};
