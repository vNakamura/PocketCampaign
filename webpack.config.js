var autoprefixer = require('autoprefixer');
var axis = require('axis');
var typographic = require('typographic');
var rupture = require('rupture');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'app.bundle.js'
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.styl$/,
        loader:
          'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!stylus-relative'
      }
    ]
  },
  stylus: {
    use: [typographic(),  axis(), rupture({ implicit: false })]
  },
  postcss: function () {
    return [autoprefixer];
  },
  eslint: {
    configFile: './.eslintrc.js',
    failOnWarning: false,
    failOnError: true
  },
  plugins: [
    new LodashModuleReplacementPlugin()
  ]
}
