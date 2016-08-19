var autoprefixer = require('autoprefixer');
var axis = require('axis');
var typographic = require('typographic');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './bin',
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
    use: [typographic(),  axis()]
  },
  postcss: function () {
    return [autoprefixer];
  },
  eslint: {
    configFile: './.eslintrc.js',
    failOnWarning: false,
    failOnError: true
  }
}
