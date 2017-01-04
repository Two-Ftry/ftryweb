/**
 * Created by Administrator on 2016/11/23.
 */
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var yargs = require('yargs');
var os = require('os');
var utils = require('util');
var process = require('child_process');

//util
var readEntrys = require('./webpack-util/readEntrys');

//变量
var nodeModules = 'node_modules';
var suffix = '.entry.js';
var devPath = path.join(__dirname, './').replace(/\\/g, "/");
var port = 9999;

//命令行参数
var argv = yargs.argv;
//根据命令韩的env参数读取环境配置文件
var envConfig = require('./env/' + argv.env);

var entryFiles = readEntrys.getEntryFiles();
var entryPort = {};
entryFiles.forEach(function(filepath){
  var dir = filepath.replace(devPath, '');
  var key = path.dirname(dir);
  entryPort[key] = [];
  entryPort[key].push(filepath);
});

//webpack基本配置
var config = {
  entry: entryPort,
  output: {
    path: './public/ftryweb/',
    publicPath: '/ftryweb/',
    filename: envConfig.__IS_DEBUG__ ? '[name].js' : '[name]-[hash:6].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: nodeModules,
        loader: 'babel-loader',
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
        loader: envConfig.__IS_DEBUG__ ? 'url-loader?limit=10000&&name=./assets/[name].[ext]' :
        'url-loader?limit=10000&&name=./assets/[name]-[hash:6].[ext]'
      },
      {
        test: /\.html$/,
        exclude: nodeModules,
        loader: 'html-loader'
      }
    ]
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions', 'IE 7']})],
  plugins: [
      new ExtractTextWebpackPlugin(envConfig.__IS_DEBUG__ ? '[name].css' : '[name]-[contenthash:6].css', {
        disable: false
      })
  ],
  resolve:{
    extensions: ['', '.js', '.css', '.scss', '.sass', '.jpg', '.jpeg', '.png', 'gif', '.html']
  }
};

//plugin
var plugins = [];
for(var key in entryPort){
  var dir = path.dirname(entryPort[key][0]);
  var modelSetting = require(path.join(dir, 'model.js'));
  plugins.push(new HtmlWebpackPlugin({
        title: modelSetting.title + '',
        template: './websrc/common/template.ejs',
        filename: key + '.html',
        chunks: [key]
      }));
}
if(!envConfig.__IS_DEBUG__){
  plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: true,
        output: {
          comments: false
        }
      }));
}
config.plugins = config.plugins.concat(plugins);

//自动打开浏览器
if(envConfig.__IS_DEBUG__){
  //dev server配置
  config.devServer = {
    contentBase: path.resolve('./websrc/'),
    inline: true,
    host: '0.0.0.0',
    port: port
  };

  //获取网络接口
  var interfaces = os.networkInterfaces();
  var addresses = [];
  for(var k in interfaces){
    for(var index in interfaces[k]){
      var address = interfaces[k][index];
      if(address.family == 'IPv4' && !address.internal){
        addresses.push(address.address);
      }
    }
  }

  var startStr = utils.format('start http://%s:%s/index.html',addresses[0],port);
  setTimeout(function(){
    process.exec(startStr, function(error, stdout, stderr){
      if(error !== null){
        console.log('exec error: ' + error);
      }
    });
  }, 5000);

}


module.exports = config;
