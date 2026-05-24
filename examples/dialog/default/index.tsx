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

export default (
  <view style={{ padding: 24 }}>
    <DialogRoot>
      <DialogTrigger>
        <view
          style={{ padding: 12, backgroundColor: '#111827', borderRadius: 8 }}
        >
          <text style={{ color: '#fff' }}>Open Dialog</text>
        </view>
      </DialogTrigger>
      <DialogBackdrop />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a simple dialog example.
          </DialogDescription>
        </DialogHeader>
        <DialogClose>
          <view
            style={{
              marginTop: 16,
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
