import { Card, CardContent } from '@shadcn-lynx/ui/card';
import { Skeleton } from '@shadcn-lynx/ui/skeleton';

export default (
  <view style={{ padding: 24 }}>
    <Card>
      <CardContent style={{ gap: 12 }}>
        <Skeleton style={{ width: 60, height: 60, borderRadius: 999 }} />
        <Skeleton style={{ width: '80%', height: 20 }} />
        <Skeleton style={{ width: '60%', height: 20 }} />
        <Skeleton style={{ width: '100%', height: 40 }} />
      </CardContent>
    </Card>
  </view>
);
