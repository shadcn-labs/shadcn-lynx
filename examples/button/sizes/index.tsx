import { Button } from '@shadcn-lynx/ui/button';

export default (
  <view
    style={{
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start',
    }}
  >
    <Button size="sm" onClick={() => console.info('Small')}>
      Small
    </Button>
    <Button size="default" onClick={() => console.info('Default')}>
      Default
    </Button>
    <Button size="lg" onClick={() => console.info('Large')}>
      Large
    </Button>
    <Button size="icon" onClick={() => console.info('Icon')}>
      +
    </Button>
  </view>
);
