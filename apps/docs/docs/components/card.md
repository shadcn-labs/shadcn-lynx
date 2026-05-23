---
title: Card
description: Displays a card with header, content, and footer.
---

# Card

Displays a card with header, content, and footer.

```bash
npx shadcn-lynx add card
```

## Usage

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project</CardTitle>
        <CardDescription>ReactLynx component set</CardDescription>
      </CardHeader>
      <CardContent>
        <text>Ready to install.</text>
      </CardContent>
      <CardFooter>
        <text>Updated today</text>
      </CardFooter>
    </Card>
  );
}
```

## Exports

`Card`, `CardHeader`, `CardFooter`, `CardTitle`, `CardDescription`, and `CardContent`.

Card is built from native Lynx `view` and `text` elements.
