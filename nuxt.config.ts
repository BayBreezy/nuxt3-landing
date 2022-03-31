import { defineNuxtConfig } from "nuxt3";
import svgLoader from "vite-svg-loader";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },
  vite: {
    plugins: [svgLoader()],
  },
  css: ["@/assets/css/main.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
