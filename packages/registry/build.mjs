import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const srcDir = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// Read registry.json
const registryJson = JSON.parse(readFileSync(resolve(srcDir, 'registry.json'), 'utf-8'))

// Read each component file and create registry items
const items = []

for (const item of registryJson.items) {
  const files = []

  for (const file of item.files) {
    const filePath = resolve(srcDir, file.type.replace('registry:', ''), file.path)
    const content = readFileSync(filePath, 'utf-8')

    files.push({
      path: file.path,
      content,
      type: file.type,
    })
  }

  items.push({
    ...item,
    files,
  })
}

// Create output directory
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true })
}

// Write index.json
const index = items.map((item) => ({
  name: item.name,
  type: item.type,
  title: item.title,
  description: item.description,
  dependencies: item.dependencies,
  registryDependencies: item.registryDependencies,
}))

writeFileSync(resolve(outDir, 'index.json'), JSON.stringify(index, null, 2) + '\n')

// Write individual item files
for (const item of items) {
  writeFileSync(resolve(outDir, `${item.name}.json`), JSON.stringify(item, null, 2) + '\n')
}

console.log(`Registry built to ${outDir}`)
console.log(`  - ${items.length} component(s)`)
