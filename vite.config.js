import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  root: '.',
  plugins: [svelte()],
  server: {
    port: 4173,
  },
  preview: {
    port: 4173,
  },
});
