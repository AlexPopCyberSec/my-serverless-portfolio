// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexpopov.tech',
  integrations: [
    sitemap(),
    tailwind() // This handles all CSS automatically
  ],
});