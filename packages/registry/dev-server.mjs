import { existsSync, readFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distDir = resolve(__dirname, 'dist');

const server = createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (path === '/' || path === '/index.json') {
    const indexPath = resolve(distDir, 'index.json');
    if (existsSync(indexPath)) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(readFileSync(indexPath, 'utf-8'));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not found' }));
    }
    return;
  }

  // Serve individual components: /button.json
  const componentName = path.replace(/^\//, '').replace(/\.json$/, '');
  const componentPath = resolve(distDir, `${componentName}.json`);

  if (existsSync(componentPath)) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(readFileSync(componentPath, 'utf-8'));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({ error: `Component "${componentName}" not found` }),
    );
  }
});

const PORT = process.env.PORT ?? 3000;

server.listen(PORT, () => {
  console.log(`Registry server running at http://localhost:${PORT}`);
  console.log(`Index: http://localhost:${PORT}/index.json`);
});
