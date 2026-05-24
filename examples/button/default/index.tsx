import { Button } from '@shadcn-lynx/ui/button';

export default (
  <view
    style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}
  >
    <Button onClick={() => console.info('Default clicked')}>
      Default Button
    </Button>
  </view>
);
