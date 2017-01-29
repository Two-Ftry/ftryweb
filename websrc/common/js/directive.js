/**
 * @desc 定义vue的自定义指令
 */
import Vue from 'vue';

var __handleMouseWheel;

Vue.directive('mouse-wheel', {
  bind: function(el, binding, vnode, oldVnode){
    if(!EventUtil){
      return;
    }
    __handleMouseWheel = function(event){
      event = EventUtil.getEvent(event);
      var wheelDelta = EventUtil.getWheelDelta(event);
      //TODO
    };

    EventUtil.addHandler(document, 'mousewheel', __handleMouseWheel);
    EventUtil.addHandler(document, 'DOMMouseScroll', __handleMouseWheel);
  },
  unbind: function(){
    if(!EventUtil){
      return;
    }
    if(__handleMouseWheel){
      EventUtil.removeHandler(document, 'mousewheel', __handleMouseWheel);
      EventUtil.removeHandler(document, 'DOMMouseScroll', __handleMouseWheel);
    }
  }
});
