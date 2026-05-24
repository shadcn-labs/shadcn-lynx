---
title: Dialog
description: A modal dialog overlay.
---

import { ComponentPreview } from '@theme';

# Dialog

A modal dialog overlay.

```bash
npx shadcn-lynx add dialog
```

## Examples

<ComponentPreview component="dialog" variant="default" />

<ComponentPreview component="dialog" variant="with-form" />

## Usage

```tsx
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogBackdrop,
} from '@/components/ui/dialog';
```

## API

| Component | Props |
| --- | --- |
| `DialogRoot` | `{ show?, defaultShow?, onShowChange?, onOpen?, onClose?, forceMount?, children }` |
| `DialogTrigger` | `{ className?, children?, disabled? }` |
| `DialogClose` | `{ className?, children?, disabled? }` |
| `DialogBackdrop` | `{ className?, clickToClose?, onClick? }` |
| `DialogContent` | `{ className?, children? }` |
| `DialogHeader` | `ViewProps` |
| `DialogFooter` | `ViewProps` |
| `DialogTitle` | `TextProps` |
| `DialogDescription` | `TextProps` |
