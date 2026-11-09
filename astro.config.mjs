import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set `site` to the final production URL (Cloudflare Pages domain or custom domain).
export default defineConfig({
  site: 'https://mohamed-massous.pages.dev',
  output: 'static',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
