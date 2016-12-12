/**
 * @desc 读取入口文件
 */
 var glob = require('glob');

var _pattern = '../../**/*.entry.js';

var readEntrys = {};

readEntrys.getEntryFiles = function(pattern){
    return glob.sync(pattern || _pattern, {
      ignore: ['node_modules']
    });
};

//test

var files = readEntrys.getEntryFiles();
console.log(files);
module.exports = readEntrys;
