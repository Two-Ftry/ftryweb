<template lang="html">
  <button class="fw-btn" type="button" name="button"
      :class="classObj"
      :style="btnStyle">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props:{
    type:{
      type: String, // primary|default|info|danger|success|warining|
      default: 'default'
    },
    width: String,
    disabled: [String, Boolean]
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
      return arr;
    }
  },
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="sass">
@import "../../common/css/var.scss";
.fw-btn{
  width: 206px;
  font-size: 14px;
  line-height: 36px;
  border: 2px solid transparent;
  box-sizing: border-box;
  outline:none;
  cursor: pointer;
  border-radius: 4px;
  color: $white;
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
</style>
