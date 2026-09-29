import { root } from '@lynx-js/react';
import { Card, CardContent } from '@shadcn-lynx/ui/card';

const example = (
  <view style={{ padding: 24 }}>
    <Card style={{ padding: 24 }}>
      <CardContent>
        <text>This is a simple card with content.</text>
      </CardContent>
    </Card>
  </view>
);

root.render(example);

export default example;
