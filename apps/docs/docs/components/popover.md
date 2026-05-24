---
title: Popover
description: A popover overlay.
---

import { ComponentPreview } from '@theme';

# Popover

A popover overlay.

```bash
npx shadcn-lynx add popover
```

## Examples

<ComponentPreview component="popover" variant="default" />

<ComponentPreview component="popover" variant="with-form" />

## Usage

```tsx
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverPositioner,
  PopoverBackdrop,
} from '@/components/ui/popover';
```

## API

| Component | Props |
| --- | --- |
| `PopoverRoot` | `{ show?, defaultShow?, onVisibleChange?, onOpen?, onClose?, forceMount?, children }` |
| `PopoverTrigger` | `{ className?, children?, disabled?, onClick? }` |
| `PopoverContent` | `{ className?, children? }` |
| `PopoverPositioner` | `{ className?, children?, placement? }` |
| `PopoverBackdrop` | `{ className?, onClick? }` |
| `PopoverArrow` | `{ className?, size?, color?, offset? }` |
