var webpack = require('webpack');
var path = require('path');
var notifier = require('node-notifier');
new webpack.optimize.OccurrenceOrderPlugin();
new webpack.optimize.DedupePlugin();


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
        loaders: ['style', 'css', 'sass']
      },
      {
        test: path.join(__dirname, 'app'),
        loader: 'babel-loader'
      },
      { 
        test: /\.node$/, 
        loader: 'node' 
      },
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    // new FlowStatusWebpackPlugin({
    //   onSuccess: function(stdout) { notifier.notify({ title: 'Flow', message: 'Flow is happy!' }); },
    //   onError: function(stdout) { notifier.notify({ title: 'Flow', message: 'Flow is sad!' }); }
    // })
  ]
};
