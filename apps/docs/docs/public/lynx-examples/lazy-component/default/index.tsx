import { root } from '@lynx-js/react';
import { LazyComponent } from '@shadcn-lynx/ui/lazy-component';
import { ScrollView } from '@shadcn-lynx/ui/scroll-view';

const example = (
  <ScrollView className="h-[420px] p-4">
    <view className="h-[360px] items-center justify-center">
      <text className="text-sm text-muted-foreground">Scroll to reveal</text>
    </view>
    <LazyComponent
      pid="lazy-card"
      scene="component-preview"
      estimatedStyle={{ width: '100%', height: '160px' }}
      className="p-6"
    >
      <text className="text-lg font-semibold">Loaded near the viewport</text>
      <text className="mt-2 text-sm text-muted-foreground">
        Expensive content mounts only when needed.
      </text>
    </LazyComponent>
  </ScrollView>
);

root.render(example);

export default example;
