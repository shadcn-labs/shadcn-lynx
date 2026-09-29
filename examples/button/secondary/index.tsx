import { root } from '@lynx-js/react';
import { Button } from '@shadcn-lynx/ui/button';

const example = (
  <view style={{ padding: 24 }}>
    <Button
      variant="secondary"
      onClick={() => console.info('Secondary clicked')}
    >
      Secondary Button
    </Button>
  </view>
);

root.render(example);

export default example;
