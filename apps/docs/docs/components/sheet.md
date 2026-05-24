---
title: Sheet
description: A slide-in panel from any edge of the screen.
---

import { ComponentPreview } from '@theme';

# Sheet

A slide-in panel from any edge of the screen.

```bash
npx shadcn-lynx add sheet
```

## Examples

<ComponentPreview component="sheet" variant="default" />

<ComponentPreview component="sheet" variant="top" />

<ComponentPreview component="sheet" variant="left" />

<ComponentPreview component="sheet" variant="right" />

## Usage

```tsx
import {
  SheetRoot, SheetTrigger, SheetContent,
  SheetHeader, SheetTitle, SheetDescription, SheetBackdrop,
} from '@/components/ui/sheet';
```

## API

| Prop | Type | Default |
| --- | --- | --- |
| `side` | `'top' \| 'bottom' \| 'left' \| 'right' \| 'start' \| 'end'` | `'bottom'` |
