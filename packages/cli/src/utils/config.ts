import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export interface ResolvedConfig {
  cwd: string;
  style: string;
  tailwind: {
    css: string;
    config: string;
  };
  aliases: {
    components: string;
    utils: string;
    ui: string;
    lib: string;
  };
  registry: string;
}

export interface RawConfig {
  $schema?: string;
  style?: string;
  tailwind?: {
    css?: string;
    config?: string;
  };
  aliases?: {
    components?: string;
    utils?: string;
    ui?: string;
    lib?: string;
    hooks?: string;
  };
  registry?: string;
}

export const DEFAULT_REGISTRY_URL = 'https://shadcn-lynx.vercel.app/registry';

export const DEFAULT_CONFIG: RawConfig = {
  $schema: 'https://shadcn-lynx.vercel.app/schema.json',
  style: 'default',
  tailwind: {
    css: 'src/global.css',
    config: 'tailwind.config.ts',
  },
  aliases: {
    components: '@/components',
    utils: '@/lib/utils',
    ui: '@/components/ui',
    lib: '@/lib',
  },
  registry: DEFAULT_REGISTRY_URL,
};

const CONFIG_FILE = 'components.json';

export function findConfigFile(cwd: string): string | null {
  const configPath = resolve(cwd, CONFIG_FILE);
  if (existsSync(configPath)) {
    return configPath;
  }
  return null;
}

export function readConfigFile(cwd: string): RawConfig | null {
  const configPath = findConfigFile(cwd);
  if (!configPath) return null;

  try {
    const content = readFileSync(configPath, 'utf-8');
    return JSON.parse(content) as RawConfig;
  } catch {
    return null;
  }
}

export function resolveConfigPath(cwd: string, alias: string): string {
  if (alias.startsWith('@/')) {
    const relativePath = alias.slice(2);
    return resolve(cwd, 'src', relativePath);
  }
  return resolve(cwd, alias);
}
