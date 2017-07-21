var express = require("express");
var path = require('path')
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./dev/webpack.config");
var app = express();
var compiler = webpack(webpackConfig);
 

var staticPath = path.posix.join("/", "src")
app.use(staticPath, express.static('src'))

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/" // 大部分情况下和 `output.publicPath`相同
}));

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});