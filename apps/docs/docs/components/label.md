---
title: Label
description: Renders an accessible label associated with controls.
---

# Label

Renders a label for nearby form controls.

```bash
npx shadcn-lynx add label
```

## Usage

```tsx
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function Example() {
  return (
    <view>
      <Label>Email</Label>
      <Input placeholder="you@example.com" />
    </view>
  );
}
```

Label renders a Lynx `text` element and accepts shared text props such as `className`, `style`, `children`, and `id`.
