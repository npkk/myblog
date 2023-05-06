// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nathanchase/nuxt-dayjs-module',
  ],
  ssr: false,
  css: [
    "vuetify/styles",
    "@mdi/font/css/materialdesignicons.css",
  ],
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
  },
  router: {
    options: {
      strict: true,
    }
  }
})
