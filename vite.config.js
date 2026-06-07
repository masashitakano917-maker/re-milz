import { defineConfig } from 'vite';

export default defineConfig({
  root: 'milz2-site-detailed',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
