---
title: Radio Group
description: A set of checkable buttons where only one can be checked at a time.
---

# Radio Group

A set of checkable buttons where only one can be checked at a time.

```bash
npx shadcn-lynx add radio-group
```

## Usage

```tsx
import { RadioGroupRoot, RadioItem } from '@/components/ui/radio-group';

export function Example() {
  return (
    <RadioGroupRoot defaultValue="comfortable">
      <RadioItem value="default" label="Default" />
      <RadioItem value="comfortable" label="Comfortable" />
      <RadioItem value="compact" label="Compact" />
    </RadioGroupRoot>
  );
}
```

## API

Radio Group wraps primitives from `@lynx-js/lynx-ui`.

| Prop | Type |
| --- | --- |
| `value` | `string` |
| `defaultValue` | `string` |
| `onValueChange` | `(value: string) => void` |
| `disabled` | `boolean` |

## Exports

`RadioGroupRoot` and `RadioItem`.
