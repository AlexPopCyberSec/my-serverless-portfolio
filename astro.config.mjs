// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// DELETE the import tailwindcss line

// https://astro.build/config
export default defineConfig({
  site: 'https://alexpopov.tech',
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});