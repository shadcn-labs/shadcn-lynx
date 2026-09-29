import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin';
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin';
import { defineConfig } from '@lynx-js/rspeedy';
import { pluginTailwindCSS } from 'rsbuild-plugin-tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function exampleConfig(entries) {
  return defineConfig({
    source: {
      entry: Object.fromEntries(
        Object.entries(entries).map(([name, entry]) => [
          name,
          [path.resolve(__dirname, '../global.css'), entry],
        ]),
      ),
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
        config: path.resolve(__dirname, '../tailwind.config.mjs'),
        exclude: [/[\\/]node_modules[\\/]tailwind-merge[\\/]/],
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
        intermediate: '.rspeedy',
        root: 'dist',
      },
      filename: '[name].[platform].bundle',
    },
    tools: {
      rspack: {
        resolve: {
          mainFields: ['jsnext:source', 'lynx', 'module', 'browser'],
        },
      },
    },
  });
}
