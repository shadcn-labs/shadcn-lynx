---
title: Separator
description: A horizontal or vertical separator.
---

import { ComponentPreview } from '@theme';

# Separator

A horizontal or vertical separator.

```bash
npx shadcn-lynx add separator
```

## Examples

<ComponentPreview component="separator" variant="horizontal" />

<ComponentPreview component="separator" variant="vertical" />

## Usage

```tsx
import { Separator } from '@/components/ui/separator';
```

## API

| Prop | Type | Default |
| --- | --- | --- |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` |
| `decorative` | `boolean` | `true` |
