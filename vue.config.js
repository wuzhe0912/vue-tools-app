module.exports = {
  // vue router 第二層路由需要透過 publicPath 添加/ 否則會出現解析錯誤
  publicPath: '/',

  devServer: {
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // },
    // host: 'localhost',
    // port: 8080
  },

  chainWebpack: config => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'DoDo Bird Tools App'
        return args
      })
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
