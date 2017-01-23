var assign = require('lodash/assign');
var devConfig = require('./webpack.config');
var webpack = require('webpack');

module.exports = assign(devConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    })
  ]
});
