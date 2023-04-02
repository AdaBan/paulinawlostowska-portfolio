import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "src/styles/variables.scss" as *;`,
        },
      },
    },
  },
});
