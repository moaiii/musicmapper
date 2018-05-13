var path = require('path');
var webpack = require('webpack');
new webpack.optimize.OccurrenceOrderPlugin();
new webpack.optimize.DedupePlugin();

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './app/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'main.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: path.join(__dirname, 'app'),
        loader: 'babel-loader'
      }
    ]
  }
};
