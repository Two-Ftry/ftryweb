/**
 * @desc 事件处理工具类
 */
var EventUtil = {};

//绑定事件
EventUtil.addHandler = function(el, type, handler){
  if(el.addEventListener){
    el.addEventListener(type, handler, false);
  }else if(el.attachEvent){
    el.attachEvent('on' + type, handler);
  }else{
    el['on' + type] = handler;
  }
};

//事件解除绑定
EventUtil.removeHandler = function(el, type, handler){
  if(el.removeEventListener){
    el.removeEventListener(type, handler, false);
  }else if(el.attachEvent){
    el.detachEvent('on' + type, handler);
  }else{
    el['on' + type] = null;
  }
};

//获取事件对象
EventUtil.getEvent = function(event){
  return event || window.event;
};

//获取目标元素
EventUtil.getTarget = function(event){
  event = EventUtil.getEvent(event);
  return event.target || event.srcElement;//IE是srcElement
};

//获取鼠标滚轮数据
EventUtil.getWheelDelta = function(event){
  var wheelDelta = event.wheelDelta;
  if(!wheelDelta){
    wheelDelta = -event.detail * 40;
  }
  return wheelDelta;
};


module.exports = EventUtil;
