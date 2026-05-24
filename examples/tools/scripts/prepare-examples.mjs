import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const currentDir = process.cwd();
const examplesDir = currentDir;
const linkPath = path.join(
  currentDir,
  '../apps/docs/docs/public/lynx-examples',
);
const ignoreDirs = ['node_modules', '.git', '.turbo', 'dist', 'tools'];
const ignoreFiles = [
  '.DS_Store',
  'LICENSE',
  'tsconfig.json',
  'tsconfig.base.json',
];

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (ignoreDirs.includes(file)) return;
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      if (ignoreFiles.includes(file)) return;
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

function copyExampleFiles(exampleDir, targetDir) {
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
  const files = fs.readdirSync(exampleDir);
  files.forEach((file) => {
    const src = path.join(exampleDir, file);
    const dest = path.join(targetDir, file);
    if (ignoreDirs.includes(file) || ignoreFiles.includes(file)) return;
    execSync(`cp -Lrfp "${src}" "${dest}"`);
  });
}

function getTemplateFiles(allFiles) {
  return allFiles
    .filter((f) => f.endsWith('.lynx.bundle'))
    .map((file) => {
      const dir = file.split('/');
      const name = dir[dir.length - 1].replace('.lynx.bundle', '');
      const webFile = file.replace('.lynx.bundle', '.web.bundle');
      return {
        name: name || dir[dir.length - 2],
        file,
        ...(allFiles.includes(webFile) ? { webFile } : {}),
      };
    });
}

function sortFilesByDirectoryFirst(files) {
  const dirs = files.filter((f) => f.includes('/')).sort();
  const regular = files.filter((f) => !f.includes('/')).sort();
  return [...dirs, ...regular];
}

function parseExampleData() {
  if (fs.existsSync(linkPath))
    fs.rmSync(linkPath, { recursive: true, force: true });
  fs.mkdirSync(linkPath, { recursive: true });

  const entries = fs.readdirSync(examplesDir);
  entries.forEach((entry) => {
    const exampleDir = path.join(examplesDir, entry);
    if (!fs.statSync(exampleDir).isDirectory()) return;
    if (ignoreDirs.includes(entry)) return;

    const pkgPath = path.join(exampleDir, 'package.json');
    if (!fs.existsSync(pkgPath)) return;

    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    const targetDir = path.join(linkPath, entry);
    copyExampleFiles(exampleDir, targetDir);

    const allFiles = getAllFiles(exampleDir, []);
    const files = allFiles.map((f) => path.relative(exampleDir, f));
    const previewReg = /^preview-image\.(png|jpg|jpeg|webp|gif)$/;
    const filtered = files.filter(
      (f) => !previewReg.test(f) && f !== 'example-metadata.json',
    );

    fs.writeFileSync(
      path.join(targetDir, 'example-metadata.json'),
      JSON.stringify(
        {
          name: pkg.name || entry,
          files: sortFilesByDirectoryFirst(filtered),
          previewImage: files.find((f) => previewReg.test(f)) || null,
          templateFiles: getTemplateFiles(filtered),
          exampleGitBaseUrl:
            'https://github.com/Aniket-508/shadcn-lynx/tree/main/examples',
        },
        null,
        2,
      ),
    );
  });
  console.log('examples prepared → apps/docs/public/lynx-examples/');
}

parseExampleData();
