import { Button } from '@shadcn-lynx/ui/button';

export default (
  <view style={{ padding: 24 }}>
    <Button variant="ghost" onClick={() => console.info('Ghost clicked')}>
      Ghost Button
    </Button>
  </view>
);
