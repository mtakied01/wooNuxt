// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo'
  ],
  apollo: {
      clients: {
        default: {
          httpEndpoint: process.env.GQL_HOST
        }
      },
    }
})
