import { Button } from '@shadcn-lynx/ui/button';

export default (
  <view style={{ padding: 24 }}>
    <Button
      variant="secondary"
      onClick={() => console.info('Secondary clicked')}
    >
      Secondary Button
    </Button>
  </view>
);
