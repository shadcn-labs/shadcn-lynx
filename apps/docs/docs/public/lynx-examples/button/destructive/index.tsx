import { root } from '@lynx-js/react';
import { Button } from '@shadcn-lynx/ui/button';

const example = (
  <view style={{ padding: 24 }}>
    <Button
      variant="destructive"
      onClick={() => console.info('Destructive clicked')}
    >
      Destructive Button
    </Button>
  </view>
);

root.render(example);

export default example;
