import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  image: {
    domains: ['images.unsplash.com'],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});
