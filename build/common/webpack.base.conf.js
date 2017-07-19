var path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
  },
  resolve: {
    extensions: ['.js',   '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    
    loaders: [{
            test: /\.js$/,
            exclude: /^node_modules$/,
            loader: 'babel'
    }],
      
    rules: [
   /*   {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },*/
 
      
      
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
      test: /api.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      
     
    ]
  }
}
