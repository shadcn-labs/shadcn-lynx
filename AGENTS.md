# AGENTS.md

You are an expert in JavaScript, Rspeedy, and Lynx application development. You write maintainable, performant, and accessible code.

## Read in Advance

Read docs below in advance to help you understand the library or frameworks this project depends on.

- Lynx: [llms.txt](https://lynxjs.org/next/llms.txt), **REQUIRED**.
  While dealing with a Lynx task, an agent **MUST** read this doc because it is an entry point of all available docs about Lynx.

## Project Structure

This is a pnpm workspace with two packages:

- `packages/lynx-app` - Lynx app using Rspeedy
- `packages/docs` - Documentation site using Rsbuild

## Commands

### Workspace (root)
- `pnpm run dev:lynx` - Start the Lynx app dev server
- `pnpm run dev:docs` - Start the docs dev server
- `pnpm run build` - Build both apps
- `pnpm run preview:lynx` - Preview the Lynx build
- `pnpm run preview:docs` - Preview the docs build
- `pnpm run check` - Run Biome linting
- `pnpm run format` - Format code with Biome
- `pnpm run test` - Run tests

### Lynx App (`packages/lynx-app`)
- `pnpm run dev` - Start the dev server
- `pnpm run build` - Build the app for production
- `pnpm run preview` - Preview the production build locally
- `pnpm exec rspeedy inspect` - Inspect the Rspeedy config

### Docs (`packages/docs`)
- `pnpm run dev` - Start the dev server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview the production build

## Related Docs

- Rsbuild: <https://rsbuild.rs/llms.txt>
- Rspack: <https://rspack.rs/llms.txt>

## Tools

### Biome

- Run `pnpm run check` to lint your code
- Run `pnpm run format` to format your code
