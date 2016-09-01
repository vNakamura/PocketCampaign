var autoprefixer = require('autoprefixer');
var axis = require('axis');
var typographic = require('typographic');
var rupture = require('rupture');

module.exports = {
  module: {
    loaders: [
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
  }
}
