import { defineConfig } from 'astro/config'; // import lit from '@astrojs/lit';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: "https://wrejcodes.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});