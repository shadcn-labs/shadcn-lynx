import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The Lynx build plugins are declared as devDependencies of each example
// package, not of this shared `tools` folder (which is not a workspace
// package). Resolve them from the example being built (process.cwd()) so the
// shared config works without `tools` needing its own node_modules.
//
// These plugins are ESM-only and several expose just an `import` condition, so
// `require.resolve()` (CJS conditions) cannot find their entry. Resolve the
// package's own package.json instead, then read its `exports["."]` to locate
// the ESM entry and dynamically import it.
const requireFromExample = createRequire(path.join(process.cwd(), 'noop.js'));

function resolveEsmEntry(id) {
  // Fast path: packages exposing a `require`/`default` condition resolve
  // directly (e.g. rsbuild-plugin-tailwindcss, which also doesn't export
  // `./package.json`).
  try {
    return pathToFileURL(requireFromExample.resolve(id)).href;
  } catch {
    // Fall through to the import-only handling below.
  }
  const pkgJsonPath = requireFromExample.resolve(`${id}/package.json`);
  const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
  const dot = pkg.exports?.['.'];
  const entry =
    (typeof dot === 'string'
      ? dot
      : (dot?.import ?? dot?.default ?? dot?.import?.default)) ??
    pkg.module ??
    pkg.main ??
    'index.js';
  return pathToFileURL(path.join(path.dirname(pkgJsonPath), entry)).href;
}

const loadFromExample = async (id) => import(resolveEsmEntry(id));

// Shared Tailwind sources. `globals.css` (token vars + @tailwind directives) is
// prepended to every entry so each bundle carries the generated utilities the
// shadcn components rely on; tailwind.config.mjs maps tokens onto Tailwind's
// color/radius scales via the Lynx preset.
const globalsCss = path.resolve(__dirname, 'globals.css');
const tailwindConfig = path.resolve(__dirname, 'tailwind.config.mjs');

export async function exampleConfig(entries) {
  const [
    { pluginQRCode },
    { pluginReactLynx },
    { defineConfig },
    { pluginTailwindCSS },
  ] = await Promise.all([
    loadFromExample('@lynx-js/qrcode-rsbuild-plugin'),
    loadFromExample('@lynx-js/react-rsbuild-plugin'),
    loadFromExample('@lynx-js/rspeedy'),
    loadFromExample('rsbuild-plugin-tailwindcss'),
  ]);

  // Inject the shared stylesheet into each named entry so the Tailwind layers
  // are present in every variant bundle without editing example sources.
  const entryWithStyles = Object.fromEntries(
    Object.entries(entries).map(([name, file]) => [name, [globalsCss, file]]),
  );

  return defineConfig({
    source: {
      entry: entryWithStyles,
    },
    plugins: [
      pluginQRCode({
        schema(url) {
          return `${url}?fullscreen=true`;
        },
      }),
      pluginReactLynx({
        enableCSSSelector: true,
        enableCSSInheritance: true,
        enableNewGesture: true,
      }),
      pluginTailwindCSS({
        config: tailwindConfig,
        exclude: [/[\\/]node_modules[\\/]/],
      }),
    ],
    resolve: {
      alias: {
        '@/lib': path.resolve(__dirname, '../../../packages/registry/src/lib'),
        '@shadcn-lynx/ui': path.resolve(
          __dirname,
          '../../../packages/registry/src/ui',
        ),
      },
    },
    environments: {
      web: {},
      lynx: {},
    },
    output: {
      distPath: {
        root: 'dist',
      },
    },
  });
}
