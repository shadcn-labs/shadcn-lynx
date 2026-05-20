# AGENTS.md

You are an expert in JavaScript, Rspeedy, and Lynx application development. You write maintainable, performant, and accessible code.

## Read in Advance

Read docs below in advance to help you understand the library or frameworks this project depends on.

- Lynx: [llms.txt](https://lynxjs.org/next/llms.txt), **REQUIRED**.
  While dealing with a Lynx task, an agent **MUST** read this doc because it is an entry point of all available docs about Lynx.
- lynx-ui: [github.com/lynx-family/lynx-ui](https://github.com/lynx-family/lynx-ui) — the headless UI primitives that shadcn-lynx components wrap.
  Read the AGENTS.md in that repo for headless patterns, controlled/uncontrolled modes, and MTS usage.

## Project Overview

**shadcn-lynx** is a shadcn/ui port for Lynx, built on top of `@lynx-js/lynx-ui` headless primitives.

Architecture pattern:
- `@lynx-js/lynx-ui` provides headless logic (state, gestures, accessibility) — like radix-ui/base-ui
- `shadcn-lynx` wraps these primitives with Tailwind CSS styling via CVA (class-variance-authority)
- The CLI copies component source code into the user's project (open code approach)

## Project Structure

This is a pnpm workspace with four packages:

- `packages/cli` - The `shadcn-lynx` CLI (`init`, `add` commands)
- `packages/registry` - Component registry (JSON definitions + dev server)
- `apps/demo` - Example Lynx app for testing components
- `packages/docs` - Documentation site

## Commands

### Workspace (root)
- `pnpm run dev:lynx` - Start the Lynx app dev server
- `pnpm run dev:docs` - Start the docs dev server
- `pnpm run dev:registry` - Start the registry dev server (local)
- `pnpm run build:cli` - Build the CLI
- `pnpm run build:registry` - Build the registry
- `pnpm run build` - Build both apps
- `pnpm run preview:lynx` - Preview the Lynx build
- `pnpm run preview:docs` - Preview the docs build
- `pnpm run check` - Run Biome linting
- `pnpm run format` - Format code with Biome
- `pnpm run test` - Run tests

### CLI (`packages/cli`)
- `pnpm run build` - Compile TypeScript
- `pnpm run start` - Run the CLI

### Registry (`packages/registry`)
- `pnpm run build` - Build registry JSON from source components
- `pnpm run dev` - Start local dev server for registry

### Lynx App (`apps/demo`)
- `pnpm run dev` - Start the dev server
- `pnpm run build` - Build the app for production
- `pnpm run preview` - Preview the production build locally

### Docs (`apps/docs`)
- `pnpm run dev` - Start the dev server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview the production build

## Component Architecture

### Pattern

All shadcn-lynx components follow this pattern:

```tsx
import { BaseComponent } from '@lynx-js/lynx-ui'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const componentVariants = cva('base-classes', {
  variants: { variant: {...}, size: {...} },
  defaultVariants: { variant: 'default', size: 'default' },
})

export function Component({ className, variant, size, ...props }) {
  return (
    <BaseComponent
      className={cn(componentVariants({ variant, size, className }))}
      {...props}
    />
  )
}
```

### Key Principles

1. **Always import from `@lynx-js/lynx-ui`** for headless primitives (Button, Input, Switch, Checkbox, Dialog, Slider, Sheet, Popover, RadioGroup, Form, etc.)
2. **Use `cn()` utility** for className merging with tailwind-merge + clsx
3. **Use CVA** for component variants (variant, size, etc.)
4. **For primitives** (Card, Badge, Label, Separator, Skeleton, Alert, Avatar) — use native `<view>`, `<text>`, `<image>` elements
5. **Explicit prop spreading** — use dedicated props like `buttonProps` instead of `...rest`

### Registry

Components are defined in `packages/registry/src/ui/*.tsx` and registered in `packages/registry/src/registry.json`.

To add a new component:
1. Create `packages/registry/src/ui/<component>.tsx`
2. Add entry to `packages/registry/src/registry.json`
3. Run `pnpm run build:registry`

## Related Docs

- Rsbuild: <https://rsbuild.rs/llms.txt>
- Rspack: <https://rspack.rs/llms.txt>

## Tools

### Biome

- Run `pnpm run check` to lint your code
- Run `pnpm run format` to format your code
