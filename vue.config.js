module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api': {
        target: 'https://direcon-task.herokuapp.com/api',
      },
    },
    disableHostCheck: true,
  },

  transpileDependencies: ['vuetify'],
};
