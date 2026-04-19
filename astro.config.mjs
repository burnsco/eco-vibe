import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
  site: "https://eco-vibe.coreyburns.ca",
  integrations: [react()],

  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
