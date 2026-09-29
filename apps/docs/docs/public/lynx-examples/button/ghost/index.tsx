import { root } from '@lynx-js/react';
import { Button } from '@shadcn-lynx/ui/button';

const example = (
  <view style={{ padding: 24 }}>
    <Button variant="ghost" onClick={() => console.info('Ghost clicked')}>
      Ghost Button
    </Button>
  </view>
);

root.render(example);

export default example;
