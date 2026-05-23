---
title: Input
description: Displays a form input field or a component that looks like an input field.
---

# Input

Displays a form input field or a component that looks like an input field.

```bash
npx shadcn-lynx add input
```

## Usage

```tsx
import { Input } from '@/components/ui/input';

export function Example() {
  return <Input placeholder="Email" />;
}
```

## API

Input wraps the `Input` and `TextArea` primitives from `@lynx-js/lynx-ui`.

| Prop | Type |
| --- | --- |
| `className` | `string` |
| `value` | primitive input value props |
| `defaultValue` | primitive input default value props |
| `placeholder` | `string` |
| `disabled` | `boolean` |
| `type` | `'text' \| 'password' \| 'email' \| 'number' \| 'tel' \| 'digit'` |
| `onChange` | `(value: string) => void` |
| `onFocus` | `() => void` |
| `onBlur` | `() => void` |
| `inputProps` | `Record<string, unknown>` |

## Textarea

```tsx
import { Textarea } from '@/components/ui/input';

export function MessageInput() {
  return <Textarea rows={4} placeholder="Message" />;
}
```

Textarea exposes the same value, default value, placeholder, disabled, focus, and blur props, plus `rows` and `textareaProps`.
