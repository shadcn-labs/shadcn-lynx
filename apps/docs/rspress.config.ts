import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
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
    nav: [
      {
        text: 'Docs',
        link: '/get-started/introduction',
        activeMatch: '/get-started/',
      },
      {
        text: 'Components',
        link: '/components/',
        activeMatch: '/components/',
      },
      {
        text: 'Registry',
        link: '/registry/',
        activeMatch: '/registry/',
      },
      {
        text: 'Forms',
        link: '/forms/',
        activeMatch: '/forms/',
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/Aniket-508/shadcn-lynx',
      },
    ],
  },
});
