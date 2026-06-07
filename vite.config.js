import { defineConfig } from 'vite';

export default defineConfig({
  root: 'milz2-site',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
