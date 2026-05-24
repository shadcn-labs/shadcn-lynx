import { useState } from '@lynx-js/react';
import {
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@shadcn-lynx/ui/dialog';
import { Input } from '@shadcn-lynx/ui/input';

export default () => {
  const [email, setEmail] = useState('');
  return (
    <view style={{ padding: 24 }}>
      <DialogRoot>
        <DialogTrigger>
          <view
            style={{ padding: 12, backgroundColor: '#111827', borderRadius: 8 }}
          >
            <text style={{ color: '#fff' }}>Open Form</text>
          </view>
        </DialogTrigger>
        <DialogBackdrop />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogDescription>
              Enter your email to subscribe.
            </DialogDescription>
          </DialogHeader>
          <view style={{ padding: '16px 0' }}>
            <Input placeholder="Email" value={email} onChange={setEmail} />
          </view>
          <DialogClose>
            <view
              style={{
                padding: 8,
                backgroundColor: '#e5e7eb',
                borderRadius: 6,
              }}
            >
              <text>Close</text>
            </view>
          </DialogClose>
        </DialogContent>
      </DialogRoot>
    </view>
  );
};
