var glob = require('glob');
var path = require('path');
var dynamicRoutes = getDynamicPaths({
  '/project': 'project/posts/*.json'
});

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'labs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Collection of front-end demos' }
    ],
    script: [
      { src: 'https://buttons.github.io/buttons.js', async: true, defer: true }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/zor5ibn.css' }
    ]
  },
  css: [
      'assets/sass/main.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#a1a1a1' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  /*
  ** Register middleware files
  */
  router: {
    base: '',
    middleware: 'pages'
  },
  /*
  ** Route config for pre-rendering
  */
  generate: {
    routes: dynamicRoutes
  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}