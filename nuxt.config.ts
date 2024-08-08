// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      RECAPTCHA_SITE_KEY: '6LdArkEpAAAAADBzufkatG3E_FoW7Mep9f_j4HIm'
    }
  }
})
