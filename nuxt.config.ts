import { defineNuxtConfig } from "nuxt";
import i18n from "./locales/i18n";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/scss/_main.scss"],

  modules: ["@intlify/nuxt3", "@nuxtjs/tailwindcss"],
  buildModules: [],
  intlify: {
    vueI18n: i18n,
  },
});
