import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://adabanaszak.com",
  base: "/paulinawlostowska-portfolio",
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
