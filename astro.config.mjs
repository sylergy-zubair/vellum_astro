import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://vellum.example',
  output: 'server',
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
});
