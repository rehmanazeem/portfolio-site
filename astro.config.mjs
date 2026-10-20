// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Project site until the custom domain exists. When it does: set `site` to the domain,
// delete `base`, and add public/CNAME (see docs/BUILD_PLAN.md phase 4).
export default defineConfig({
  site: 'https://rehmanazeem.github.io',
  base: '/portfolio-site',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', de: 'de' } } }),
  ],
});
