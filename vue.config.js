module.exports = {
  publicPath: '',

  devServer: {
    // proxy: {
    //   '/api': {
    //     target: 'https://vue-course-api.hexschool.io',
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
        args[0].title = 'Pomodoros'
        return args
      })
  }
}
