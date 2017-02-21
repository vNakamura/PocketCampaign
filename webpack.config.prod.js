var extend = require('lodash/extend');
var devConfig = require('./webpack.config');
var webpack = require('webpack');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = extend(devConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new LodashModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      },
      comments: false
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
});
