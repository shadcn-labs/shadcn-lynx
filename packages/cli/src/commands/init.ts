import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import {
  DEFAULT_CONFIG,
  type RawConfig,
  readConfigFile,
} from '../utils/config.js';

const COMPONENTS_JSON = 'components.json';

export async function init(opts: { yes?: boolean }) {
  const cwd = process.cwd();
  const existing = readConfigFile(cwd);

  if (existing && !opts.yes) {
    console.log('A components.json file already exists.');
    console.log('Run with --yes to overwrite.');
    return;
  }

  const config: RawConfig = {
    ...DEFAULT_CONFIG,
    ...existing,
  };

  const configPath = resolve(cwd, COMPONENTS_JSON);
  writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`, 'utf-8');

  console.log('');
  console.log('✔ Created components.json');

  // Create the utils file
  const utilsPath = resolve(cwd, 'src/lib/utils.ts');
  if (!existsSync(dirname(utilsPath))) {
    mkdirSync(dirname(utilsPath), { recursive: true });
  }

  const utilsContent = `import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`;
  if (!existsSync(utilsPath)) {
    writeFileSync(utilsPath, utilsContent, 'utf-8');
    console.log('✔ Created src/lib/utils.ts');
  }

  // Create the global CSS file
  const cssPath = resolve(cwd, config.tailwind?.css ?? 'src/global.css');
  if (!existsSync(dirname(cssPath))) {
    mkdirSync(dirname(cssPath), { recursive: true });
  }

  if (!existsSync(cssPath)) {
    const cssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 5.9% 10%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 72% 51%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}

@layer base {
  * {
    border-color: hsl(var(--border));
  }
}
`;
    writeFileSync(cssPath, cssContent, 'utf-8');
    console.log(`✔ Created ${config.tailwind?.css ?? 'src/global.css'}`);
  }

  const tailwindConfigPath = resolve(
    cwd,
    config.tailwind?.config ?? 'tailwind.config.ts',
  );
  if (!existsSync(tailwindConfigPath)) {
    const tailwindConfigContent = `import lynxPreset from '@lynx-js/tailwind-preset'
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  presets: [lynxPreset],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
} satisfies Config
`;
    writeFileSync(tailwindConfigPath, tailwindConfigContent, 'utf-8');
    console.log(`✔ Created ${config.tailwind?.config ?? 'tailwind.config.ts'}`);
  }

  // Create the UI directory
  const uiPath = resolve(cwd, 'src/components/ui');
  if (!existsSync(uiPath)) {
    mkdirSync(uiPath, { recursive: true });
    console.log('✔ Created src/components/ui/');
  }

  console.log('');
  console.log('Success! Project initialization complete.');
  console.log('');
  console.log(
    'Install styling: pnpm add -D tailwindcss@3.4.17 @lynx-js/tailwind-preset@0.5.0 rsbuild-plugin-tailwindcss@0.1.1',
  );
  console.log(
    'Add pluginTailwindCSS() from `rsbuild-plugin-tailwindcss` to `plugins` in lynx.config.ts.',
  );
  console.log(
    `Import the configured CSS file (${config.tailwind?.css ?? 'src/global.css'}) from your application entry.`,
  );
  console.log('');
  console.log('Run `npx shadcn-lynx add button` to add your first component.');
}
