import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin';
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin';
import { defineConfig } from '@lynx-js/rspeedy';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function exampleConfig(entries) {
  return defineConfig({
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
