import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from '@rsbuild/core';
import { pluginMdx } from '@rsbuild/plugin-mdx';
import { pluginReact } from '@rsbuild/plugin-react';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginMdx({
      mdxLoaderOptions: {
        providerImportSource: '@mdx-js/react',
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: {
                dark: 'github-dark',
                light: 'github-light-default',
              },
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@/content': path.join(__dirname, 'content'),
    },
  },
  server: {
    publicDir: [
      {
        name: path.join(__dirname, '../../', 'apps/demo/dist'),
      },
    ],
  },
  html: {
    template: './src/index.html',
  },
});
