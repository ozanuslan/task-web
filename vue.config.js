module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://direcon-task.herokuapp.com',
        disableHostCheck: true,
      },
    },
  },

  transpileDependencies: ['vuetify'],
};
