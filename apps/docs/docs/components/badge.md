---
title: Badge
description: Displays a badge or a component that looks like a badge.
---

# Badge

Displays a badge or a component that looks like a badge.

```bash
npx shadcn-lynx add badge
```

## Usage

```tsx
import { Badge } from '@/components/ui/badge';

export function Example() {
  return <Badge variant="secondary">Preview</Badge>;
}
```

## API

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `'default' \| 'secondary' \| 'destructive' \| 'outline'` | `'default'` |
| `className` | `string` | - |

Badge uses native Lynx elements and exports `badgeVariants`.
