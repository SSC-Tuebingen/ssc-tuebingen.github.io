import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ssc-tuebingen.github.io',
  output: 'static',
  trailingSlash: 'always',
  cacheDir: './node_modules/.astro-cache',
});
