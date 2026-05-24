---
title: Checkbox
description: A checkbox input control.
---

import { ComponentPreview } from '@theme';

# Checkbox

A checkbox input control.

```bash
npx shadcn-lynx add checkbox
```

## Examples

<ComponentPreview component="checkbox" variant="default" />

<ComponentPreview component="checkbox" variant="checked" />

<ComponentPreview component="checkbox" variant="disabled" />

<ComponentPreview component="checkbox" variant="with-label" />

## Usage

```tsx
import { Checkbox } from '@/components/ui/checkbox';

export function Example() {
  return <Checkbox label="Accept terms" />;
}
```

## API

| Prop | Type | Default |
| --- | --- | --- |
| `checked` | `boolean` | - |
| `defaultChecked` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `indeterminate` | `boolean` | `false` |
| `onChange` | `(checked: boolean) => void` | - |
| `label` | `string` | - |
| `checkboxProps` | `Record<string, unknown>` | - |
