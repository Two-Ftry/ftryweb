/**
 * @desc 读取入口文件
 */
 var glob = require('glob');
var path = require('path');

var _pattern = './business/**/*.entry.js';

var readEntrys = {};

readEntrys.getEntryFiles = function(pattern){
  var _p = path.resolve(pattern || _pattern);
  return glob.sync(_p);
};

//test
// var files = readEntrys.getEntryFiles();
// console.log('files', files);
module.exports = readEntrys;
