---
title: Sheet
description: Displays content in a panel that slides in from the edge.
---

# Sheet

Displays content in a panel that slides in from the edge.

```bash
npx shadcn-lynx add sheet
```

## Usage

```tsx
import {
  SheetBackdrop,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetRoot,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Example() {
  return (
    <SheetRoot>
      <SheetTrigger>Open</SheetTrigger>
      <SheetBackdrop />
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Choose your next action.</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </SheetRoot>
  );
}
```

## API

| Prop | Type | Default |
| --- | --- | --- |
| `side` | `'top' \| 'right' \| 'bottom' \| 'left' \| 'start' \| 'end'` | `'bottom'` on content |
| `show` | `boolean` | - |
| `defaultShow` | `boolean` | - |
| `onShowChange` | `(open: boolean) => void` | - |
| `snapPoints` | primitive snap point config | - |
| `enableDragToClose` | `boolean` | - |

Sheet is built on the sheet primitives from `@lynx-js/lynx-ui`.
