import { defineConfig } from 'vite';

// base: './' keeps every asset path relative, so the build works on
// GitHub Pages project URLs (user.github.io/hansaufa/) and custom domains alike.
export default defineConfig({
  base: './',
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'bundle',
    emptyOutDir: true
  }
});
