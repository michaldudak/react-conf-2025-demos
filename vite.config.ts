import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // Use BASE env var when provided (e.g., in CI for GitHub Pages);
  // defaults to '/' for local dev.
  base: process.env.BASE ?? '/',
  plugins: [tailwindcss(), tsconfigPaths()],
});
