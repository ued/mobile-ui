var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function (options) {
  options = options || {}
  // generate loader string to be used with extract text plugin
  function generateLoaders (loaders) {
    var sourceLoader = loaders.map(function (loader) {
      var extraParamChar
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?')
        extraParamChar = '&'
      } else {
        loader = loader + '-loader'
        extraParamChar = '?'
      }
      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
    }).join('!')

    if (options.extract) {
      return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
    } else {
      return ['vue-style-loader', sourceLoader].join('!')
    }
  }

  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return {
    css: generateLoaders(['css', 'postcss']),
    less: generateLoaders(['css', 'postcss', 'less']),
    sass: generateLoaders(['css', 'postcss', 'sass?indentedSyntax']),
    scss: generateLoaders(['css', 'postcss', 'sass']),
    stylus: generateLoaders(['css', 'postcss', 'stylus']),
    styl: generateLoaders(['css', 'postcss', 'stylus'])
  }
}
