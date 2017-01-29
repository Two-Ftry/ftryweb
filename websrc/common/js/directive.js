/**
 * @desc 定义vue的自定义指令
 */
import Vue from 'vue';

var __handleMouseWheel;

Vue.directive('mouse-wheel', {
  bind: function(el, binding, vnode, oldVnode){
    if(!common || !common.EventUtil){
      return;
    }
    var me = this;
    __handleMouseWheel = function(event){
      //函数节流
      common.util.throttle(function(){
        event = common.EventUtil.getEvent(event);
        var wheelDelta = common.EventUtil.getWheelDelta(event);
        binding.value(wheelDelta);
      }, me, 300);
    };

    common.EventUtil.addHandler(document, 'mousewheel', __handleMouseWheel);
    common.EventUtil.addHandler(window, 'DOMMouseScroll', __handleMouseWheel);
  },
  unbind: function(){
    if(!common || !common.EventUtil){
      return;
    }
    if(__handleMouseWheel){
      common.EventUtil.removeHandler(document, 'mousewheel', __handleMouseWheel);
      common.EventUtil.removeHandler(window, 'DOMMouseScroll', __handleMouseWheel);
    }
  }
});
