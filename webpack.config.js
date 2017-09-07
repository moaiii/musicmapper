var path = require('path');

module.exports = {
  devtool: 'source-maps',
  entry: './app/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: path.join(__dirname, 'app'),
        loader: 'babel-loader'
      }
    ]
  },
  node: {
    fs: 'empty'
  }
};
