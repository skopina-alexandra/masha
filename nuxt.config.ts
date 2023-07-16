// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      title: "Дог-тренер - Маша Ковальская",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  css: ["assets/styles/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
