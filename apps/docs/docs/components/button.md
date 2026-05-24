---
title: Button
description: Displays a button or a component that looks like a button.
---

import { ComponentPreview } from '@theme';

# Button

Displays a button or a component that looks like a button.

```bash
npx shadcn-lynx add button
```

## Examples

<ComponentPreview component="button" variant="default" />

### Variants

<ComponentPreview component="button" variant="secondary" />

<ComponentPreview component="button" variant="outline" />

<ComponentPreview component="button" variant="ghost" />

<ComponentPreview component="button" variant="destructive" />

<ComponentPreview component="button" variant="link" />

### Sizes

<ComponentPreview component="button" variant="sizes" />

## Usage

```tsx
import { Button } from '@/components/ui/button';

export function Example() {
  return (
    <view>
      <Button onClick={() => console.log('Pressed')}>Continue</Button>
    </view>
  );
}
```

## API

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'default'` |
| `disabled` | `boolean` | `false` |
| `onClick` | `() => void` | - |
| `buttonProps` | `Record<string, unknown>` | - |

Button wraps `Button` from `@lynx-js/lynx-ui` and exports `buttonVariants` for reuse.
