// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
              '@use "~/assets/scss/_colors.scss" as *;' +
              '@use "~/assets/scss/mixins/media.scss" as *;',
              // [
              // '@use "~/assets/scss/main.scss as *;',
              // '@use "~/assets/scss/_colors.scss" as *;',
              // '@use "~/assets/scss/mixins/media.scss" as *;',
          // ]
        }
      }
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  // ssr: false,
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
    '@nuxt/eslint'
  ],
  eslint: {
    checker: true // <---
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      'storeToRefs',
      'skipHydrate'
    ],
    storesDirs: ['./stores/**'],
  },
  runtimeConfig: { 
    public: {
      BASE_URL_API: process.env.BASE_URL_API, 
    }
  },
})
