import { Button } from '@shadcn-lynx/ui/button';

export default (
  <view style={{ padding: 24 }}>
    <Button
      variant="destructive"
      onClick={() => console.info('Destructive clicked')}
    >
      Destructive Button
    </Button>
  </view>
);
