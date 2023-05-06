// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  typescript: {
    shim: false,
  },
  ssr: false,
  css: ["vuetify/styles",
    "@mdi/font/css/materialdesignicons.css",],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    build: {
      commonjsOptions: {
        esmExternals: true,
      }
    },
    define: {
      "process.env.DEBUG": true,
    },
    server: {
      watch: {
        usePolling: true,
      }
    },
  }
})
