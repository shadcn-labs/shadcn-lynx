import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { readConfigFile, DEFAULT_REGISTRY_URL, resolveConfigPath } from '../utils/config.js'

interface RegistryItem {
  name: string
  type: string
  description?: string
  dependencies?: string[]
  devDependencies?: string[]
  registryDependencies?: string[]
  files: RegistryFile[]
}

interface RegistryFile {
  path: string
  content: string
  type: string
}

async function fetchRegistryItem(
  registryUrl: string,
  name: string
): Promise<RegistryItem | null> {
  const url = `${registryUrl}/${name}.json`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      return null
    }
    return (await response.json()) as RegistryItem
  } catch {
    return null
  }
}

async function fetchRegistryIndex(registryUrl: string): Promise<string[]> {
  const url = `${registryUrl}/index.json`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      return []
    }
    const index: { name: string }[] = await response.json()
    return index.map((item) => item.name)
  } catch {
    return []
  }
}

export async function add(
  components: string[],
  opts: { overwrite?: boolean; path?: string }
) {
  const cwd = process.cwd()
  const config = readConfigFile(cwd)

  if (!config) {
    console.error(
      'Error: components.json not found. Run `npx shadcn-lynx init` first.'
    )
    process.exit(1)
  }

  const registryUrl = process.env.REGISTRY_URL ?? config.registry ?? DEFAULT_REGISTRY_URL

  if (!components || components.length === 0) {
    const available = await fetchRegistryIndex(registryUrl)
    console.log('Available components:')
    console.log('')
    for (const name of available) {
      console.log(`  ${name}`)
    }
    console.log('')
    console.log(`Run \`npx shadcn-lynx add <component>\` to add a component.`)
    return
  }

  const allItems: RegistryItem[] = []
  const resolved = new Set<string>()

  async function resolveWithDeps(name: string) {
    if (resolved.has(name)) return

    const item = await fetchRegistryItem(registryUrl, name)
    if (!item) {
      console.error(`Error: Component "${name}" not found in registry.`)
      process.exit(1)
    }

    resolved.add(name)

    if (item.registryDependencies) {
      for (const dep of item.registryDependencies) {
        await resolveWithDeps(dep)
      }
    }

    allItems.push(item)
  }

  for (const component of components) {
    await resolveWithDeps(component)
  }

  // Collect all dependencies
  const allDeps = new Set<string>()
  const allDevDeps = new Set<string>()
  for (const item of allItems) {
    if (item.dependencies) {
      for (const dep of item.dependencies) {
        allDeps.add(dep)
      }
    }
    if (item.devDependencies) {
      for (const dep of item.devDependencies) {
        allDevDeps.add(dep)
      }
    }
  }

  if (allDeps.size > 0) {
    console.log('')
    console.log('Dependencies to install:')
    for (const dep of allDeps) {
      console.log(`  ${dep}`)
    }
  }

function resolveAliasPath(cwd: string, alias: string): string {
  if (alias.startsWith('@/')) {
    return resolve(cwd, 'src', alias.slice(2))
  }
  return resolve(cwd, alias)
}

  // Write files
  const uiBasePath = resolveAliasPath(cwd, config.aliases?.ui ?? 'src/components/ui')

  for (const item of allItems) {
    console.log(``)
    console.log(`Adding ${item.name}...`)

    for (const file of item.files) {
      let targetPath: string

      if (file.type === 'registry:ui') {
        targetPath = resolve(uiBasePath, file.path)
      } else if (file.type === 'registry:lib') {
        const libPath = resolveAliasPath(cwd, config.aliases?.lib ?? 'src/lib')
        targetPath = resolve(libPath, file.path)
      } else if (file.type === 'registry:hook') {
        const hooksPath = resolveAliasPath(cwd, config.aliases?.hooks ?? 'src/hooks')
        targetPath = resolve(hooksPath, file.path)
      } else {
        targetPath = resolve(cwd, file.path)
      }

      if (existsSync(targetPath) && !opts.overwrite) {
        console.log(`  - ${file.path} (skipped, already exists)`)
        continue
      }

      if (!existsSync(dirname(targetPath))) {
        mkdirSync(dirname(targetPath), { recursive: true })
      }

      writeFileSync(targetPath, file.content, 'utf-8')
      console.log(`  - ${file.path} (created)`)
    }
  }

  console.log('')
  console.log('Done.')

  if (allDeps.size > 0) {
    console.log('')
    console.log(
      `Install dependencies: pnpm add ${Array.from(allDeps).join(' ')}`
    )
  }
}
