import { Alert, AlertDescription, AlertTitle } from '@shadcn-lynx/ui/alert';

export default (
  <view style={{ padding: 24 }}>
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again.
      </AlertDescription>
    </Alert>
  </view>
);
