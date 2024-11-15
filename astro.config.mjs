import { defineConfig } from 'astro/config';

import relativeLinks from 'astro-relative-links';

import tailwind from '@astrojs/tailwind';
// import basicSsl from '@vitejs/plugin-basic-ssl'


// https://astro.build/config
export default defineConfig({
  integrations: [relativeLinks(), tailwind()],
  // vite: {
  //   plugins: [ basicSsl() ]
  // }
});