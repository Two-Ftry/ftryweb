<template lang="html">
  <button class="fw-btn" type="button" name="button"
      :class="classObj"
      :style="btnStyle"
      @click="onToClick"
      >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'EcButton',
  props:{
    type:{
      type: String, // primary|default|info|danger|success|warining|
      default: 'default'
    },
    width: String,
    disabled: {
      type: [Boolean, String],
      default: false
    },
    position: {
      type: String, // left | right
      default: 'left'
    },
    size: {
      type: String,
      default: 'default' //default|large|small
    }
  },
  data() {
    return {

    };
  },
  computed: {
    btnStyle(){
      var o = {};
      if(this.width){
        o.width = this.width;
      }
      return o;
    },
    classObj(){
      var arr = [];
      arr.push(this.type + '-btn');
      if(this._disabled){
        arr.push('disabled-btn');
      }
      if(this.position == 'right'){
        arr.push('fw-btn-right');
      }
      if(this.size != 'default'){
        arr.push('fw-btn-size-' + this.size);
      }
      return arr;
    },
    _disabled(){
      if(this.disabled == 'disabled'){
        return true;
      }
      return common.util.coerce.boolean(this.disabled);
    }
  },
  attached() {},
  methods: {
    onToClick(){
      this.$emit('event-ecbutton-click');
    }
  },
  components: {}
};
</script>

<style lang="sass">
@import "../../common/css/var.scss";
.fw-btn{
  width: 206px;
  font-size: 14px;
  line-height: 36px;
  height: 36px;
  border: 2px solid transparent;
  box-sizing: border-box;
  outline:none;
  cursor: pointer;
  border-radius: 4px;
  color: $white;
}
.fw-btn-size-large{
    width: 256px;
    line-height: 44px;
    height: 44px;
    font-size: 16px;
}
.fw-btn-size-small{
  width: 120px;
  line-height: 30px;
  height: 30px;
  font-size: 12px;
}
.fw-btn-right{
  float: right;
}
// default
.default-btn{
  background-color: $default;
  border-color: $default;
}
.default-btn:hover, .default-btn:focus{
  background-color: $defaultHover;
  border-color: $defaultHover;
}
.default-btn:active{
  background-color: $defaultActive;
  border-color: $defaultActive;
}

// primary
.primary-btn{
  background-color: $primary;
  border-color: $primary;
}
.primary-btn:hover, .primary-btn:focus{
  background-color: $primaryHover;
  border-color: $primaryHover;
}
.primary-btn:active{
  background-color: $primaryActive;
  border-color: $primaryActive;
}
// warning
.warning-btn{
  background-color: $warning;
  border-color: $warning;
}
.warning-btn:hover, .warning-btn:focus{
  background-color: $warningHover;
  border-color: $warningHover;
}
.warning-btn:active{
  background-color: $warningActive;
  border-color: $warningActive;
}
// gray
.gray-btn{
  background-color: $gray;
  border-color: $gray;
}
.gray-btn:hover, .gray-btn:focus{
  background-color: $grayHover;
  border-color: $grayHover;
}
.gray-btn:active{
  background-color: $grayActive;
  border-color: $grayActive;
}
// danger
.danger-btn{
  background-color: $danger;
  border-color: $danger;
}
.danger-btn:hover, .danger-btn:focus{
  background-color: $dangerHover;
  border-color: $dangerHover;
}
.danger-btn:active{
  background-color: $dangerActive;
  border-color: $dangerActive;
}
// info
.info-btn{
  background-color: $info;
  border-color: $info;
}
.info-btn:hover, .info-btn:focus{
  background-color: $infoHover;
  border-color: $infoHover;
}
.info-btn:active{
  background-color: $infoActive;
  border-color: $infoActive;
}
// success
.success-btn{
  background-color: $success;
  border-color: $success;
}
.success-btn:hover, .success-btn:focus{
  background-color: $successHover;
  border-color: $successHover;
}
.success-btn:active{
  background-color: $successActive;
  border-color: $successActive;
}
//disabled
.disabled-btn,
.disabled-btn:hover,
.disabled-btn:focus,
.disabled-btn:active{
  background-color: $disbaledColor;
  border-color: $disbaledColor;
  cursor: default;
}
</style>
