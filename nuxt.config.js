export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sarah bawabe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My name is Sarah, and I\'m a Software Engineer based in New York City.' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:title', property: 'og:title', content: 'Sarah Bawabe' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Sarah Bawabe' },
      { hid: 'og:type', property: 'og:type', content: 'page' },
      { hid: 'og:image', property: 'og:image', content: '/social.png' },
      { hid: 'og:url', property: 'og:url', content: 'https://sarahbawabe.com' },
      { hid: 'og:description', name: 'og:description', content: 'My name is Sarah, and I\'m a Software Engineer based in New York City.' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Sarah Bawabe' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'My name is Sarah, and I\'m a Software Engineer based in New York City.' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/social.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,400;0,500;0,700;1,100&display=swap' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,400;0,500;0,700;1,100&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap', },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/css/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#F16623', // orange
          accent: '#F4EE78', // yellow
          secondary: '#000000', // black
          info: '#F16623', // orange
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    linkActiveClass: 'nav-link--active',
    // base: '/personal-website/',
  }
}
