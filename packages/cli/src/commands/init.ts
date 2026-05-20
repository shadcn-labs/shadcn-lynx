import { writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { DEFAULT_CONFIG, readConfigFile, type RawConfig } from '../utils/config.js'

const COMPONENTS_JSON = 'components.json'

export async function init(opts: { yes?: boolean }) {
  const cwd = process.cwd()
  const existing = readConfigFile(cwd)

  if (existing && !opts.yes) {
    console.log('A components.json file already exists.')
    console.log('Run with --yes to overwrite.')
    return
  }

  const config: RawConfig = {
    ...DEFAULT_CONFIG,
    ...existing,
  }

  const configPath = resolve(cwd, COMPONENTS_JSON)
  writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n', 'utf-8')

  console.log('')
  console.log('✔ Created components.json')

  // Create the utils file
  const utilsPath = resolve(cwd, 'src/lib/utils.ts')
  if (!existsSync(dirname(utilsPath))) {
    mkdirSync(dirname(utilsPath), { recursive: true })
  }

  const utilsContent = `import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`
  if (!existsSync(utilsPath)) {
    writeFileSync(utilsPath, utilsContent, 'utf-8')
    console.log('✔ Created src/lib/utils.ts')
  }

  // Create the global CSS file
  const cssPath = resolve(cwd, config.tailwind?.css ?? 'src/global.css')
  if (!existsSync(dirname(cssPath))) {
    mkdirSync(dirname(cssPath), { recursive: true })
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
`
    writeFileSync(cssPath, cssContent, 'utf-8')
    console.log(`✔ Created ${config.tailwind?.css ?? 'src/global.css'}`)
  }

  // Create the UI directory
  const uiPath = resolve(cwd, 'src/components/ui')
  if (!existsSync(uiPath)) {
    mkdirSync(uiPath, { recursive: true })
    console.log('✔ Created src/components/ui/')
  }

  console.log('')
  console.log('Success! Project initialization complete.')
  console.log('')
  console.log('Run `npx shadcn-lynx add button` to add your first component.')
}
