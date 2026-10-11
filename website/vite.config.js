import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { enrichSeo } from './scripts/seo.mjs';

export default defineConfig({
  base: '/',
  appType: 'mpa',
  plugins: [{ name: 'visible-content-seo', transformIndexHtml: enrichSeo }],
  build: {
    target: 'es2020',
    rollupOptions: {
      input: Object.fromEntries(['index.html', '404.html', 'rehberler/index.html', 'hakkinda/index.html', 'rehberler/platform-secimi/index.html', 'rehberler/toplu-urun-yukleme/index.html', 'rehberler/otomatik-one-cikarma/index.html'].map(path => [path, fileURLToPath(new URL(path, import.meta.url))])),
    },
  },
  server: { strictPort: true },
});
