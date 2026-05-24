---
title: Switch
description: A toggle switch control.
---

import { ComponentPreview } from '@theme';

# Switch

A toggle switch control.

```bash
npx shadcn-lynx add switch
```

## Examples

<ComponentPreview component="switch" variant="default" />

<ComponentPreview component="switch" variant="checked" />

<ComponentPreview component="switch" variant="disabled" />

## Usage

```tsx
import { Switch, SwitchTrack, SwitchThumb } from '@/components/ui/switch';
import { useState } from '@lynx-js/react';

export function Example() {
  const [checked, setChecked] = useState(false);
  return (
    <Switch checked={checked} onChange={setChecked}>
      <SwitchTrack />
      <SwitchThumb />
    </Switch>
  );
}
```

## API

| Prop | Type | Default |
| --- | --- | --- |
| `checked` | `boolean` | - |
| `defaultChecked` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `onChange` | `(checked: boolean) => void` | - |
| `switchProps` | `Record<string, unknown>` | - |
