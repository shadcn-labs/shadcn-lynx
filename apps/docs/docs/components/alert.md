---
title: Alert
description: Displays a callout for user attention.
---

# Alert

Displays a callout for user attention.

```bash
npx shadcn-lynx add alert
```

## Usage

```tsx
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function Example() {
  return (
    <Alert>
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>Your registry is ready.</AlertDescription>
    </Alert>
  );
}
```

## Exports

`Alert`, `AlertTitle`, `AlertDescription`, and `alertVariants`.

Alert uses native Lynx elements.
