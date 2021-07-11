module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://direcon-task.herokuapp.com',
      },
    },
  },

  transpileDependencies: ['vuetify'],
};
