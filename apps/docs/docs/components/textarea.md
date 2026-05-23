---
title: Textarea
description: Displays a multi-line input field.
---

# Textarea

Textarea is exported from the current `input` registry file.

```bash
npx shadcn-lynx add input
```

## Usage

```tsx
import { Textarea } from '@/components/ui/input';

export function Example() {
  return <Textarea rows={4} placeholder="Message" />;
}
```

## API

| Prop | Type |
| --- | --- |
| `value` | `string` |
| `defaultValue` | `string` |
| `placeholder` | `string` |
| `disabled` | `boolean` |
| `rows` | `number` |
| `onChange` | `(value: string) => void` |
| `textareaProps` | `Record<string, unknown>` |

