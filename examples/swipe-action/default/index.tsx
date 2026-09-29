import { root } from '@lynx-js/react';
import { SwipeAction } from '@shadcn-lynx/ui/swipe-action';

const example = (
  <view className="p-6">
    <SwipeAction
      swipeActionId="notification"
      enableSwipe
      displayArea={
        <view>
          <text className="text-sm font-medium">New message</text>
          <text className="mt-1 text-sm text-muted-foreground">
            Swipe left to reveal the action.
          </text>
        </view>
      }
      actionArea={
        <text className="font-medium text-destructive-foreground">Delete</text>
      }
      onAction={(id) => console.info(`Delete ${id}`)}
    />
  </view>
);

root.render(example);

export default example;
