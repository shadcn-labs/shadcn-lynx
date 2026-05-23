---
title: Checkbox
description: A control that allows the user to toggle between checked and unchecked.
---

# Checkbox

A control that allows the user to toggle between checked and unchecked.

```bash
npx shadcn-lynx add checkbox
```

## Usage

```tsx
import { Checkbox } from '@/components/ui/checkbox';

export function Example() {
  return <Checkbox defaultChecked onChange={(checked) => console.log(checked)} />;
}
```

## API

Checkbox wraps the `Checkbox` primitives from `@lynx-js/lynx-ui`.

| Prop | Type |
| --- | --- |
| `checked` | `boolean` |
| `defaultChecked` | `boolean` |
| `disabled` | `boolean` |
| `indeterminate` | `boolean` |
| `label` | `string` |
| `onChange` | `(checked: boolean) => void` |
| `checkboxProps` | `BaseCheckboxProps['checkboxProps']` |
| `className` | `string` |
