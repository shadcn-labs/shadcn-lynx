---
title: Separator
description: Visually or semantically separates content.
---

# Separator

Visually separates content.

```bash
npx shadcn-lynx add separator
```

## Usage

```tsx
import { Separator } from '@/components/ui/separator';

export function Example() {
  return (
    <view>
      <text>Account</text>
      <Separator />
      <text>Billing</text>
    </view>
  );
}
```

## API

| Prop | Type | Default |
| --- | --- | --- |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` |
| `decorative` | `boolean` | `true` |
| `className` | `string` | - |
