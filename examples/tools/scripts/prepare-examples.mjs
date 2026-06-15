import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolve paths relative to this script so it works regardless of cwd.
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const examplesDir = path.resolve(scriptDir, '../..');
const linkPath = path.resolve(
  examplesDir,
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

// Copy the built `dist` bundles into the target and return the templateFiles
// metadata the go-web preview uses to render the live web/Lynx bundles. The
// bundles live in `dist/` (which is excluded from the source file browser), so
// they are handled here separately from copyExampleFiles().
function copyBundlesAndGetTemplateFiles(exampleDir, targetDir) {
  const distDir = path.join(exampleDir, 'dist');
  if (!fs.existsSync(distDir)) return [];

  const distFiles = fs.readdirSync(distDir);
  const lynxBundles = distFiles
    .filter((f) => f.endsWith('.lynx.bundle'))
    .sort();
  if (lynxBundles.length === 0) return [];

  const targetDist = path.join(targetDir, 'dist');
  fs.mkdirSync(targetDist, { recursive: true });

  return lynxBundles.map((lynxBundle) => {
    const name = lynxBundle.replace('.lynx.bundle', '');
    const webBundle = `${name}.web.bundle`;
    const hasWeb = distFiles.includes(webBundle);

    execSync(
      `cp -Lfp "${path.join(distDir, lynxBundle)}" "${path.join(targetDist, lynxBundle)}"`,
    );
    if (hasWeb) {
      execSync(
        `cp -Lfp "${path.join(distDir, webBundle)}" "${path.join(targetDist, webBundle)}"`,
      );
    }

    return {
      name,
      file: `dist/${lynxBundle}`,
      ...(hasWeb ? { webFile: `dist/${webBundle}` } : {}),
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
    const templateFiles = copyBundlesAndGetTemplateFiles(exampleDir, targetDir);

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
          templateFiles,
          exampleGitBaseUrl:
            'https://github.com/Aniket-508/shadcn-lynx/tree/main/examples',
        },
        null,
        2,
      ),
    );
  });
  console.log(`examples prepared → ${path.relative(process.cwd(), linkPath)}`);
}

parseExampleData();
