#!/usr/bin/env node
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Command } from 'commander'
import { init } from './commands/init.js'
import { add } from './commands/add.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const pkg = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf-8'))

const program = new Command()

program
  .name('shadcn-lynx')
  .description('Add shadcn/ui components to your Lynx app.')
  .version(pkg.version)

program
  .command('init')
  .description('Initialize your project with shadcn-lynx config')
  .option('-y, --yes', 'Skip confirmation and use defaults')
  .action(init)

program
  .command('add')
  .description('Add a component to your project')
  .argument('[components...]', 'Components to add')
  .option('-o, --overwrite', 'Overwrite existing files', false)
  .option('-p, --path <path>', 'The path to add the component to')
  .action(add)

program.parse()
