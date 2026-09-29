import { root } from '@lynx-js/react';
import { ScrollView } from '@shadcn-lynx/ui/scroll-view';

const sections = [
  'Account',
  'Notifications',
  'Appearance',
  'Privacy',
  'Billing',
];

const example = (
  <ScrollView className="h-[420px] p-3">
    {sections.map((section) => (
      <view key={section} className="mb-3 rounded-lg border bg-card p-4">
        <text className="text-sm font-medium text-card-foreground">
          {section}
        </text>
        <text className="mt-1 text-sm text-muted-foreground">
          Configure your {section.toLowerCase()} preferences.
        </text>
      </view>
    ))}
  </ScrollView>
);

root.render(example);

export default example;
