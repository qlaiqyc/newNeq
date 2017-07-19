const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './assets/js/main.js',

  plugins: [
    new webpack.HotModuleReplacementPlugin() // 启用 HMR
  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devServer: {
    hot: true, // 告诉 dev-server 我们在使用 HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};