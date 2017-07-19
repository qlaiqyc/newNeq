const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var baseWebpackConfig = require('../common/webpack.base.conf');
var merge = require('webpack-merge')
// add hot-reload related code to entry chunks

 



Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  //baseWebpackConfig.entry[name] = hotClient.concat(baseWebpackConfig.entry[name])
})

console.log("==============");
console.log(baseWebpackConfig.entry);

module.exports = merge(baseWebpackConfig,{
  entry: './src/js/main.js',

  plugins: [
    new HtmlWebpackPlugin({ title: 'test html'   }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin() // 启用 HMR
  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devServer: {
    //historyApiFallback: true,
    //inline:true,
    //progress:true,
    hot: true, // 告诉 dev-server 我们在使用 HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
});