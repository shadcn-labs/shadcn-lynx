---
title: Switch
description: A control that allows the user to toggle between checked and unchecked.
---

# Switch

A control that allows the user to toggle between checked and unchecked.

```bash
npx shadcn-lynx add switch
```

## Usage

```tsx
import { Switch } from '@/components/ui/switch';

export function Example() {
  return <Switch defaultChecked onChange={(checked) => console.log(checked)} />;
}
```

## API

| Prop | Type |
| --- | --- |
| `checked` | `boolean` |
| `defaultChecked` | `boolean` |
| `disabled` | `boolean` |
| `onChange` | `(checked: boolean) => void` |
| `switchProps` | `BaseSwitchProps['switchProps']` |

Switch wraps `Switch`, `SwitchTrack`, and `SwitchThumb` from `@lynx-js/lynx-ui`.
