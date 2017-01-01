var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

//util
var readEntrys = require('./webpack-util/readEntrys');

//变量
var devPath = path.join(__dirname, './').replace(/\\/g, "/");


//读取入口文件
var entryFiles = readEntrys.getEntryFiles();
var entryPort = {};
entryFiles.forEach(function(filepath){
  var dir = filepath.replace(devPath, '');
  var key = path.dirname(dir);
  entryPort[key] = [];
  entryPort[key].push(filepath);
});

//基础配置
var config = {
  entry: entryPort,
  output: {
    path: path.resolve(__dirname, "../public"),
    publicPath: "/ftryweb/",
    filename: "[name].js"
  },
  plugins: [
  ]
};

//plugins
var plugins = [];
for(var key in entryPort){
  var dir = path.dirname(entryPort[key][0]);
  var modelSetting = require(path.join(dir, 'model.js'));
  plugins.push(new HtmlWebpackPlugin({
        title: modelSetting.title + '',
        template: './websrc/common/template.html',
        filename: key + '.html',
        chunks: [key]
      }));
}
config.plugins = config.plugins.concat(plugins);

module.exports = config;
