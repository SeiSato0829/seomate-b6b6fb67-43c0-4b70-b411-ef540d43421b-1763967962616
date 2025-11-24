import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://seomate-test-5-1763967960998.netlify.app',
  sitemap: true,
  integrations: [],
  vite: {
    define: {
      'import.meta.env.SITE_NAME': JSON.stringify('SEOメイト テストブログ 5'),
      'import.meta.env.SITE_DOMAIN': JSON.stringify('seomate-test-5-1763967960998.netlify.app'),
      'import.meta.env.THEME': JSON.stringify('default')
    }
  }
});
