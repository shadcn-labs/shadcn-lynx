---
title: Dialog
description: A window overlaid on either the primary window or another dialog window.
---

# Dialog

A window overlaid on the current screen.

```bash
npx shadcn-lynx add dialog
```

## Usage

```tsx
import {
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function Example() {
  return (
    <DialogRoot>
      <DialogTrigger>Open</DialogTrigger>
      <DialogBackdrop />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete item?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>Cancel</DialogClose>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}
```

## Root props

| Prop | Type |
| --- | --- |
| `show` | `boolean` |
| `defaultShow` | `boolean` |
| `onShowChange` | `(open: boolean) => void` |
| `onOpen` | `() => void` |
| `onClose` | `() => void` |
| `forceMount` | `boolean` |
