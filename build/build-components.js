'use strict'

var path = require('path')
var fs = require('fs')
var Spinner = require('cli-spinner').Spinner
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var cssLoaders = require('./css-loaders')
var projectRoot = path.resolve(__dirname, '../')
// var HtmlWebpackPlugin = require('html-webpack-plugin')

// whether to generate source map for production files.
// disabling this can speed up the build.
var SOURCE_MAP = false

var config = {
  entry: {},
  output: {
    path: path.resolve(__dirname, '../components/'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: '[name].[ext]?[hash:7]'
      }
    }]
  },
  vue: {
    loaders: cssLoaders({
      sourceMap: SOURCE_MAP,
      extract: true
    })
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}

config.devtool = SOURCE_MAP ? 'source-map' : false

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('style.css')
])

var list = ''
process.argv.forEach(function (val, index, array) {
  if (index === 2) {
    list = val
  }
})

if (list) {
  list.split(',').forEach(function (name) {
    build(name)
  })
} else {
  var p = path.resolve(__dirname, '../src/components/')

  fs.readdir(p, function (err, files) {
    if (err) {
      throw err
    }
    files.filter(function (file) {
      // ignore files and folder named like _**
      return fs.statSync(path.join(p, file)).isDirectory() && file[0] !== '_'
    }).forEach(function (file) {
      build(file)
    })
  })
}

function build (name) {
  let spinner = new Spinner(`building ${name}`)
  spinner.setSpinnerString(17)
  spinner.start()

  config.entry = {}
  config.entry[name] = [path.resolve(__dirname, `../src/components/${name}/index`)]
  config.output.library = converName(name)
  config.output.path = path.resolve(__dirname, '../components/' + name + '/')
  webpack(config, function (err, stats) {
    // var jsonStats = stats.toJson()
    spinner.setSpinnerString(stats.endTime - stats.startTime)
    spinner.stop()
    if (err) {
      throw err
    }
  })
}

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function converName (name) {
  return ('mui-' + name).split('-').map(function (one, index) {
    return index === 0 ? one : capitalizeFirstLetter(one)
  }).join('')
}
