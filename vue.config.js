module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://direcon-task.herokuapp.com',
      },
    },
    disableHostCheck: true,
    allowedHosts: ['.herokuapp.com', 'herokuapp.com', 'localhost'],
  },

  transpileDependencies: ['vuetify'],
};
