import {
  PopoverBackdrop,
  PopoverContent,
  PopoverPositioner,
  PopoverRoot,
  PopoverTrigger,
} from '@shadcn-lynx/ui/popover';

export default (
  <view style={{ padding: 24 }}>
    <PopoverRoot>
      <PopoverTrigger>
        <view
          style={{ padding: 12, backgroundColor: '#111827', borderRadius: 8 }}
        >
          <text style={{ color: '#fff' }}>Open Popover</text>
        </view>
      </PopoverTrigger>
      <PopoverBackdrop />
      <PopoverPositioner placement="bottom">
        <PopoverContent>
          <text>Popover content here.</text>
        </PopoverContent>
      </PopoverPositioner>
    </PopoverRoot>
  </view>
);
