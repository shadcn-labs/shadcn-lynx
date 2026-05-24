---
title: Alert
description: A contextual alert message.
---

import { ComponentPreview } from '@theme';

# Alert

A contextual alert message.

```bash
npx shadcn-lynx add alert
```

## Examples

<ComponentPreview component="alert" variant="default" />

<ComponentPreview component="alert" variant="destructive" />

## Usage

```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
```

## API

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `'default' \| 'destructive'` | `'default'` |

`Alert` accepts `ViewProps`, `AlertTitle` and `AlertDescription` accept `TextProps`.
