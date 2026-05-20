# shadcn-lynx

Accessible and customizable components for Lynx. Free. Open Source. **Use this to build your own component library.**

Built on top of [@lynx-js/lynx-ui](https://github.com/lynx-family/lynx-ui) (headless primitives) and styled with Tailwind CSS + CVA.

## Architecture

This is a pnpm workspace with four packages:

- `packages/cli` - The `shadcn-lynx` CLI for adding components to your project
- `packages/registry` - The component registry (JSON definitions + dev server)
- `apps/demo` - Example Lynx app for testing components
- `packages/docs` - Documentation site

## How It Works

Similar to [shadcn/ui](https://ui.shadcn.com/) and [shadcn-svelte](https://shadcn-svelte.com/):

1. **Headless Base**: Components wrap `@lynx-js/lynx-ui` primitives (the radix-ui equivalent for Lynx)
2. **Styled Layer**: CVA + Tailwind CSS classes provide the shadcn/ui visual design
3. **CLI Distribution**: `npx shadcn-lynx add <component>` copies component source into your project
4. **Open Code**: You own the component code — modify it freely

## Components

All components from `@lynx-js/lynx-ui` are available, plus primitives:

| Component | Base | Status |
|-----------|------|--------|
| Button | `@lynx-js/lynx-ui` Button | ✅ |
| Input | `@lynx-js/lynx-ui` Input | ✅ |
| Card | Primitive | ✅ |
| Badge | Primitive + CVA | ✅ |
| Label | Primitive | ✅ |
| Separator | Primitive | ✅ |
| Skeleton | Primitive | ✅ |
| Alert | Primitive + CVA | ✅ |
| Avatar | Primitive | ✅ |
| Switch | `@lynx-js/lynx-ui` Switch | ✅ |
| Checkbox | `@lynx-js/lynx-ui` Checkbox | ✅ |
| Dialog | `@lynx-js/lynx-ui` Dialog | ✅ |
| Slider | `@lynx-js/lynx-ui` Slider | ✅ |
| Sheet | `@lynx-js/lynx-ui` Sheet | ✅ |
| Popover | `@lynx-js/lynx-ui` Popover | ✅ |
| Radio Group | `@lynx-js/lynx-ui` RadioGroup | ✅ |
| Form | `@lynx-js/lynx-ui` Form | ✅ |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- A ReactLynx project with Tailwind CSS configured

### Initialize

```bash
npx shadcn-lynx init
```

This creates `components.json` and the utility files.

### Add Components

```bash
npx shadcn-lynx add button
npx shadcn-lynx add card input label
```

### Development

```bash
# Install dependencies
pnpm install

# Build CLI
pnpm run build:cli

# Build registry
pnpm run build:registry

# Start registry dev server
pnpm run dev:registry

# Start Lynx app dev server
pnpm run dev:lynx

# Start docs dev server
pnpm run dev:docs

# Build everything
pnpm run build
```

## License

MIT
