---
title: Avatar
description: An image element with a fallback for representing the user.
---

# Avatar

Displays a user image with fallback content.

```bash
npx shadcn-lynx add avatar
```

## Usage

```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Example() {
  return (
    <Avatar>
      <AvatarImage src="https://example.com/avatar.png" />
      <AvatarFallback>SL</AvatarFallback>
    </Avatar>
  );
}
```

## Exports

`Avatar`, `AvatarImage`, and `AvatarFallback`.

Avatar uses Lynx `view`, `image`, and `text` elements.
