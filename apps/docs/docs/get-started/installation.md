---
title: Installation
description: Install shadcn-lynx in a ReactLynx project.
---

# Installation

Create or open a ReactLynx project, then initialize shadcn-lynx.

```bash
npx shadcn-lynx init
```

The initializer configures the project for registry components, including aliases for `@/components`, `@/components/ui`, and `@/lib`.

## Requirements

- A ReactLynx app, usually created with Rspeedy.
- `@lynx-js/react` and `@lynx-js/types`.
- Tailwind-style class processing in the target app.
- `class-variance-authority`, `clsx`, and `tailwind-merge` for components that use variants or class merging.

## Add a component

```bash
npx shadcn-lynx add button
```

