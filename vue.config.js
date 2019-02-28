const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css', 'ttf']
const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'axios': 'axios',
  'iview': 'iView'
}
const cdn = {
  // 开发环境
  dev: {
    css: [
      'https://unpkg.com/iview@3.2.2/dist/styles/iview.css'
    ],
    js: ['https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
      'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
      'https://unpkg.com/iview@3.0.1/dist/iview.min.js']
  },
  // 生产环境
  build: {
    css: [
      'https://unpkg.com/iview@3.2.2/dist/styles/iview.css'
    ],
    js: [
      'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
      'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
      'https://unpkg.com/iview@3.0.1/dist/iview.min.js'
    ]
  }
}
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://115.159.154.37:7777',
        changeOrigin: true
      }
    },
    disableHostCheck: true,
    port: 8886
  },
  configureWebpack: config => {
    const myConfig = {}
    myConfig.externals = externals
    if (process.env.NODE_ENV === 'production') {
      myConfig.plugins = [
        new CompressionWebpackPlugin({
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      ]
    }
    return myConfig
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        if (process.env.NODE_ENV === 'production') {
          args[0].cdn = cdn.build
        }
        if (process.env.NODE_ENV === 'development') {
          args[0].cdn = cdn.dev
        }
        return args
      })
  }
}
