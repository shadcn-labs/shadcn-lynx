import * as path from 'node:path';
import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/docs',
  route: {
    exclude: [
      'components/*.md',
      'forms.md',
      'forms/**',
      '07.javascript.md',
      '09.figma.md',
      '11.legacy.md',
      'mcp.md',
      'skills.md',
      'registry/{authentication,mcp-server,open-in-v0}.md',
    ],
  },
  builderConfig: {
    plugins: [pluginSass()],
    tools: {
      rspack: {
        resolve: {
          fallback: {
            fs: false,
            path: false,
          },
        },
      },
    },
  },
  title: 'shadcn-lynx',
  description:
    'Open-code components for ReactLynx, styled with Tailwind CSS and powered by lynx-ui primitives.',
  icon: '/favicon.svg',
  logo: {
    light: '/favicon.svg',
    dark: '/favicon.svg',
  },
  lang: 'en',
  themeConfig: {
    enableContentAnimation: true,
    search: true,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/Aniket-508/shadcn-lynx',
      },
    ],
  },
});
