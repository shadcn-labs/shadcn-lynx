---
title: Popover
description: Displays rich content in a portal, triggered by a button click.
---

# Popover

Displays rich content triggered by a control.

```bash
npx shadcn-lynx add popover
```

## Usage

```tsx
import {
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/ui/popover';

export function Example() {
  return (
    <PopoverRoot>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <text>Popover content</text>
      </PopoverContent>
    </PopoverRoot>
  );
}
```

Popover wraps the popover primitives from `@lynx-js/lynx-ui`.

## Exports

`PopoverRoot`, `PopoverTrigger`, `PopoverContent`, `PopoverPositioner`, `PopoverBackdrop`, and `PopoverArrow`.

## Root props

| Prop | Type |
| --- | --- |
| `show` | `boolean` |
| `defaultShow` | `boolean` |
| `onVisibleChange` | `(visible: boolean) => void` |
| `onOpen` | `() => void` |
| `onClose` | `() => void` |
| `forceMount` | `boolean` |
