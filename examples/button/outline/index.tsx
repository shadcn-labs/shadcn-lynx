import { Button } from '@shadcn-lynx/ui/button';

export default (
  <view style={{ padding: 24 }}>
    <Button variant="outline" onClick={() => console.info('Outline clicked')}>
      Outline Button
    </Button>
  </view>
);
