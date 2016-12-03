/**
 * Created by Administrator on 2016/11/23.
 */

var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var nodeModules = 'node_modules';

var config = {
  entry: {
    test: './test/test.js',
    test0: './test/test0.js',
    test1: './test/test1.js'
  },
  output: {
    path: '../public/',
    publicPath: '/ftryweb/',
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
      })
  ]
};


module.exports = config;
