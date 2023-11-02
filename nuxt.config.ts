// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  modules: [
    // ...
    '@pinia/nuxt','@nuxtjs/tailwindcss','@nuxtjs/i18n',,
  ],
  i18n: {
    vueI18n: 'plugins/i18n.config.ts' ,
 },




})
