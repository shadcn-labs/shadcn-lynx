import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@shadcn-lynx/ui/card';

export default (
  <view style={{ padding: 24 }}>
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <text>Main content area.</text>
      </CardContent>
      <CardFooter>
        <text>Footer content</text>
      </CardFooter>
    </Card>
  </view>
);
