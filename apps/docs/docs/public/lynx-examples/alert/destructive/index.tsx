import { root } from '@lynx-js/react';
import { Alert, AlertDescription, AlertTitle } from '@shadcn-lynx/ui/alert';

const example = (
  <view style={{ padding: 24 }}>
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again.
      </AlertDescription>
    </Alert>
  </view>
);

root.render(example);

export default example;
