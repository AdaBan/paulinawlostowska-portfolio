import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
    viewTransitions: true,
  },
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
