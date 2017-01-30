/**
 * @desc 定义vue的自定义指令
 */
import Vue from 'vue';

var __handleMouseWheel;

//鼠标滚轮指令
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

//滚动指令

Vue.directive('scroll', {
  inserted: function(el, binding, vnode, oldVnode){
    if(!common || !common.EventUtil){
      return;
    }
    var me = this;
    common.EventUtil.addHandler(el, 'scroll', function(event){
      common.util.throttle(function(){ //节流
        var offsetHeight = el.offsetHeight;
        var scrollHeight = el.scrollHeight;
        var scrollTop = el.scrollTop;
        if(scrollHeight - offsetHeight - scrollTop < 50){
          binding.value();
        }
      }, me);
    });
  }
});
