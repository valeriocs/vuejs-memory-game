module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      '/api': {
        secure: false,
        changeOrigin: true,
        target: 'http://5bcb34c5a2d1240013579b5c.mockapi.io/api/v1/',
        pathRewrite: {
          '^/api/': '',
        },
      },
    },
  },
};
