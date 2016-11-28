/**
 * Created by Administrator on 2016/11/23.
 */

var autoprefixer = require('autoprefixer');

var nodeModules = 'node_modules';

var config = {
  entry: {
    test: './test/test.js'
  },
  output: {
    path: '../public/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: nodeModules,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: nodeModules,
        loader: 'style!css!postcss'
      },
      {
        test: /\.(scss|sass)$/,
        exclude: nodeModules,
        loader: 'style!css!sass!postcss'
      },
      {
        test: /\.(jpg|jpeg|png|gif|woff|svg|eot|ttf)\??.*$/,
        exclude: nodeModules,
        loader: 'url-loader?name=[path][name].[ext]'
      }
    ]
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions', 'IE 7']})]
};


module.exports = config;
