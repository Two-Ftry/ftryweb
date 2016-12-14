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
var devPath = path.join(__dirname, './');
console.log('devPath', devPath);
var entryFiles = readEntrys.getEntryFiles();
var entryPort = {};
entryFiles.forEach(function(filepath){
  filepath = path.normalize(filepath);
  var dir = filepath.replace(devPath, '');
  var key = path.dirname(dir);
  console.log('dir: %s, key: %s', dir, key);
  entryPort[key] = filepath;
});
console.log(entryPort);

//webpack基本配置
var config = {
  entry: entryPort,
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
      },
      {
        test: /\.css$/,
        exclude: nodeModules,
        loader: ExtractTextWebpackPlugin.extract('style-loader', 'css-loader', 'postcss-loader')
      },
      {
        test: /\.(scss|sass)$/,
        exclude: nodeModules,
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
  plugins: [
      new ExtractTextWebpackPlugin('[name].css?[contenthash]', {
        disable: false
      })
  ]
};

//plugin
var plugins = [];
for(var key in entryPort){
  plugins.push(new HtmlWebpackPlugin({
        title: 'ftryweb首页',
        template: './common/template.html',
        filename: key + '.html',
        inject: 'head',
        hash: true,
        chunks: [key]
      }));
}
config.plugins = config.plugins.concat(plugins);

module.exports = config;
