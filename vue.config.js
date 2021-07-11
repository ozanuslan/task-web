module.exports = {
  configureWebpack: {
    output: {
      publicPath: '/static/',
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://direcon-task.herokuapp.com',
      },
    },
  },

  transpileDependencies: ['vuetify'],
};
