
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Sarabun:400,500,600,700|Rubik:300,400,500' },
      { rel: 'stylesheet', href: '/css/pe-icon-7-stroke.css' },
      { rel: 'stylesheet', href: '/css/materialdesignicons.min.css' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/magnific-popup.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/colors/cyan.css', id: "color-opt"}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  target: 'server',
  components: true,
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/vue-youtube', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    'nuxt-purgecss',

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
    'bootstrap-vue/nuxt',
  ],
  purgeCSS: {
      enabled: ({ isDev, isClient }) => (!isDev && isClient), // or `false` when in dev/debug mode
      paths: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js'
      ],
      styleExtensions: ['.css'],
      whitelist: ['body', 'html', 'nuxt-progress'],
      extractors: [
        {
          extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
          extensions: ['html', 'vue', 'js']
        }
      ]
  },
  
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
