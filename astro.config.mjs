// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexpopov.tech/', // <--- This line is critical for the sitemap
  integrations: [sitemap()],      // <--- This activates the sitemap plugin
  vite: {
    plugins: [tailwindcss()]
  }
});