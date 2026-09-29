import { root } from '@lynx-js/react';
import { Skeleton } from '@shadcn-lynx/ui/skeleton';

const example = (
  <view style={{ padding: 24 }}>
    <Skeleton style={{ width: 200, height: 20, marginBottom: 12 }} />
    <Skeleton style={{ width: 150, height: 20, marginBottom: 12 }} />
    <Skeleton style={{ width: 100, height: 20 }} />
  </view>
);

root.render(example);

export default example;
