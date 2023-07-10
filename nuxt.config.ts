export default defineNuxtConfig ({
  runtimeConfig: {
    public: {
      apiBase: "/blog",
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kapster-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Agdasima&display=swap'
      }
    ],
      
    script: [
      {
        src: '/bootstrap.bundle.min.js',
      }
    ],


  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ { src: '~/assets/bootstrap/main.scss', lang: 'sass'} 
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '/helpers/fhtml.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module'
  ],
  imports: {
    dirs: ['./stores']
  }, 

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@pinia/nuxt',],
    pinia: {
      autoImports: [
        // automatically imports `defineStore`
        'defineStore', // import { defineStore } from 'pinia'
        ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      ],
    },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
})