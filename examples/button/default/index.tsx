import { root } from '@lynx-js/react';
import { Button } from '@shadcn-lynx/ui/button';

const example = (
  <view
    style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}
  >
    <Button onClick={() => console.info('Default clicked')}>
      Default Button
    </Button>
  </view>
);

root.render(example);

export default example;
