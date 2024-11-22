// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,
    customTabs: [
      {
        name: "histoire",
        title: "Histoire",
        icon: "/histoire-logo.svg",
        view: { type: "iframe", src: "http://localhost:6006/" },
      },
    ],
  },
  modules: [
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    [
      "@vee-validate/nuxt",
      {
        autoImports: false,
        componentNames: {
          Form: "VeeForm",
          Field: "VeeField",
          FieldArray: "VeeFieldArray",
          ErrorMessage: "VeeErrorMessage",
        },
      },
    ],
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
  ],
  shadcn: {
    prefix: "ShadCN",
  },
  colorMode: {
    fallback: "light",
    classSuffix: "",
  },
});
