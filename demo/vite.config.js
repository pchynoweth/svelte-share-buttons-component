import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        // Allow instantiation using `new Component()` for Svelte 4-style components
        compatibility: {
          componentApi: 4,
        },
      },
    }),
  ],
  build: {
    outDir: 'dist',
  },
  base: './',
});
