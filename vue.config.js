const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:7777',
        changeOrigin: true
      }
    },
    disableHostCheck: true,
    port: 8886
  },
  configureWebpack: {
    plugins: [
        new CompressionWebpackPlugin({
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
    ]
  }
}
