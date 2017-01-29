/**
 * @desc 常用的js方法
 */

 var util = {};

//函数节流
util.throttle = function(method, context, timeout){
  window.clearTimeout(method.tId);
  method.tId = setTimeout(function(){
    method.call(context);
  }, timeout || 100);
};

 module.exports = util;
