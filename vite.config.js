import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

// base: './' keeps every asset path relative, so the project works on
// GitHub Pages project URLs (hazehans.github.io/hansaufa/) and custom domains alike.
export default defineConfig({
  base: './',
  publicDir: false,
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'bundle',
    emptyOutDir: true
  },
  plugins: [
    {
      name: 'copy-root-assets-to-dist',
      closeBundle() {
        const srcAssets = path.resolve(process.cwd(), 'assets');
        const destAssets = path.resolve(process.cwd(), 'dist', 'assets');
        if (fs.existsSync(srcAssets)) {
          fs.cpSync(srcAssets, destAssets, { recursive: true, force: true });
        }
      }
    }
  ]
});
