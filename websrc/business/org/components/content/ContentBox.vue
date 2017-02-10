<template lang="html">
  <div class="outer-box" :style="boxStyle">
    <div class="inner-box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    bg: String
  },
  data() {
    return {
    };
  },
  computed: {
    boxStyle(){
      var o = {};
      if(this.bg){
        o.background = this.bg;
      }
      return o;
    }
  },
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="sass">
@import "../../../../common/css/var.scss";
.outer-box{
  height: 100%;
  background-color: $white;
  background-size: 100% 100% !important;
  .inner-box{
    width: $boxWidth;
    height: 100%;
    margin: 0 auto;
  }
}
</style>
