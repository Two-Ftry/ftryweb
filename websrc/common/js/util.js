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

//类型转换
util.coerce = {
  boolean: val => {
    var r;
    if(typeof val === 'string'){
      if(val == 'true'){
        r = true;
      }else{
        r = false
      }
    }else if (val == null || val == undefined){
      r = false;
    }else{
      r = val;
    }
    return r;
  },
  number: val => {
    return typeof val === 'number' ? val :
          (val === null || val === undefined || isNaN(Number(val)) ? 0 : Number(val));
  },
  string: val => {
    return val == undefined || val === null ? '' : val + '';
  },
  pattern: val => {
    return val instanceof Function || val instanceof RegExp ? val : typeof val === 'string' ? new RegExp(val) : null;
  }
}

 module.exports = util;
