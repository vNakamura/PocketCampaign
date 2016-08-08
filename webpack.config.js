autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './bin',
    filename: 'app.bundle.js'
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
          'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!stylus'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  }
}
