const webpack = require('webpack')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  devServer: {
    port: 9090,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '^/business': {
        target: 'https://firebulls.net', // 代理转发地址
        changeOrigin: true,
        pathRewrite: { '^/business': '/business' }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        data: `@import "@/assets/css/global.scss";`
      }
    }
  }
}
