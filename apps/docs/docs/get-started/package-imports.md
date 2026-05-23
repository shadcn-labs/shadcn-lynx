---
title: Package Imports
description: Understand dependency and import conventions for copied components.
---

# Package Imports

Registry components import from your app aliases and from public package APIs.

```tsx
import { Button as BaseButton } from '@lynx-js/lynx-ui';
import { cn } from '@/lib/utils';
```

## Rules

- Use `@lynx-js/lynx-ui` for headless primitives.
- Use `@lynx-js/react` for ReactLynx types and APIs.
- Use `@lynx-js/types` for Lynx platform types.
- Keep copied component imports editable and app-local.

