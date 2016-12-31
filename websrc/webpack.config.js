var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

//util
var readEntrys = require('./webpack-util/readEntrys');

var devPath = path.join(__dirname, './').replace(/\\/g, "/");
console.log('devPath', devPath);
//读取入口文件
var entryFiles = readEntrys.getEntryFiles();
var entryPort = {};
entryFiles.forEach(function(filepath){
  console.log('filepath', filepath);
  // filepath = path.normalize(filepath);
  console.log('filepath2', filepath);
  var dir = filepath.replace(devPath, '');
  console.log('dir', dir);
  var key = path.dirname(dir);
  entryPort[key] = [];
  entryPort[key].push(filepath);
});
console.log(entryPort);

var config = {
  entry: entryPort,
  // entry: {
  //   'business/customer': ['./websrc/business/customer/customer.entry.js'],
  //   'business/org': ['./websrc/business/org/org.entry.js']
  // },
  output: {
    path: path.resolve(__dirname, "../public"),
    publicPath: "/ftryweb/",
    filename: "[name].js"
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'This is greate',
    //   template: './websrc/common/template.html',
    //   filename: 'business/customer.html',
    //   chunks: ['business/customer']
    // }),
    // new HtmlWebpackPlugin({
    //   title: 'org',
    //   template: './websrc/common/template.html',
    //   filename: 'business/org.html',
    //   chunks: ['business/org']
    // })
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
