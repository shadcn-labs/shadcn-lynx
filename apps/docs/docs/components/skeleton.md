---
title: Skeleton
description: Use to show a placeholder while content is loading.
---

# Skeleton

Use Skeleton to reserve space while content is loading.

```bash
npx shadcn-lynx add skeleton
```

## Usage

```tsx
import { Skeleton } from '@/components/ui/skeleton';

export function Example() {
  return (
    <view>
      <Skeleton className="h-12 w-12 rounded-full" />
      <Skeleton className="mt-3 h-4 w-[180px]" />
    </view>
  );
}
```

Skeleton renders a Lynx `view` element.
