import { root } from '@lynx-js/react';
import { Alert, AlertDescription, AlertTitle } from '@shadcn-lynx/ui/alert';

const example = (
  <view style={{ padding: 24 }}>
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>This is a default alert message.</AlertDescription>
    </Alert>
  </view>
);

root.render(example);

export default example;
