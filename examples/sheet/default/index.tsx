import {
  SheetBackdrop,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetRoot,
  SheetTitle,
  SheetTrigger,
} from '@shadcn-lynx/ui/sheet';

export default (
  <view style={{ padding: 24 }}>
    <SheetRoot>
      <SheetTrigger>
        <view
          style={{ padding: 12, backgroundColor: '#111827', borderRadius: 8 }}
        >
          <text style={{ color: '#fff' }}>Open Sheet (Bottom)</text>
        </view>
      </SheetTrigger>
      <SheetBackdrop />
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Bottom Sheet</SheetTitle>
          <SheetDescription>Swipe down to close.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </SheetRoot>
  </view>
);
