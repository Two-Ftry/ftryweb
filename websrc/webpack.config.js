/**
 * Created by Administrator on 2016/11/23.
 */
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

//util
var readEntrys = require('./webpack-util/readEntrys');

//变量
var nodeModules = 'node_modules';
var suffix = '.entry.js';

var entryFiles = readEntrys.getEntryFiles();
var entryPort = {};
entryFiles.forEach(function(filepath){
  // console.log(filepath);
  var dir = path.dirname(filepath);
  // var filename = filepath.split(dir)[1];
  // var key = filename.split(suffix)[0];
  // var key = filepath.replace(//g, function(match, code){
  //
  // });
  entryPort[key] = filepath;

  console.log('dir: %s, filename: %s, key: %s', dir, filename, key);
});

console.log(entryPort);


var config = {
  entry: {
    test: './test/test.js',
    test0: './test/test0.js',
    test1: './test/test1.js'
  },
  output: {
    path: '../public/',
    // publicPath: '/ftryweb/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: nodeModules,
        loader: 'babel',
        // query: {
        //   presets: ['es2015']
        // }
      },
      {
        test: /\.css$/,
        exclude: nodeModules,
        // loader: 'style!css!postcss'
        loader: ExtractTextWebpackPlugin.extract('style-loader', 'css-loader', 'postcss-loader')
      },
      {
        test: /\.(scss|sass)$/,
        exclude: nodeModules,
        // loader: 'style!css!sass!postcss'
        loader: ExtractTextWebpackPlugin.extract('style-loader', 'css-loader!sass-loader', 'postcss-loader')
      },
      {
        test: /\.(jpg|jpeg|png|gif|woff|svg|eot|ttf)\??.*$/,
        exclude: nodeModules,
        loader: 'url-loader?name=[path][name].[ext]'
      }
    ]
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions', 'IE 7']})],
  // babel: {
  //   presets: ['es2015']
  // },
  plugins: [
      new HtmlWebpackPlugin({
        title: 'ftryweb首页',
        template: './test/template.html',
        filename: 'ftryweb.html',
        inject: 'head',
        hash: true,
        chunks: ['test']
      }),
      new HtmlWebpackPlugin({
        title: 'ftryweb首页',
        template: './test/template.html',
        filename: 'ftryweb0.html',
        inject: 'head',
        hash: true,
        chunks: ['test0']
      }),
      new HtmlWebpackPlugin({
        title: 'ftryweb首页',
        template: './test/template.html',
        filename: 'ftryweb1.html',
        inject: 'head',
        hash: true,
        chunks: ['test1']
      }),
      new ExtractTextWebpackPlugin('[name].css?[contenthash]', {
        disable: false
      })
  ]
};


module.exports = config;
