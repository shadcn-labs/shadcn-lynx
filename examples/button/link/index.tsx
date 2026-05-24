import { Button } from '@shadcn-lynx/ui/button';

export default (
  <view style={{ padding: 24 }}>
    <Button variant="link" onClick={() => console.info('Link clicked')}>
      Link Button
    </Button>
  </view>
);
