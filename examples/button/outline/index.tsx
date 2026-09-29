import { root } from '@lynx-js/react';
import { Button } from '@shadcn-lynx/ui/button';

const example = (
  <view style={{ padding: 24 }}>
    <Button variant="outline" onClick={() => console.info('Outline clicked')}>
      Outline Button
    </Button>
  </view>
);

root.render(example);

export default example;
