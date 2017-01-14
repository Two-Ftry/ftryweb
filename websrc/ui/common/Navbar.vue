<template lang="html">
  <div class="nav-box">
    <div class="nav-innerbox clearfix">
      <div class="nav-left">
          <slot name="left"></slot>
      </div>
      <div class="nav-right">
          <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="sass">
@import "../../common/css/var.scss";
.nav-box{
  background-color: $defaultColor;
  width: 100%;
  min-height: 60px;
  .nav-innerbox{
    max-width: $boxWidth;
    margin: 0 auto;
    color: $white;
    line-height: 60px;
    .nav-left{
      float: left;
    }
    .nav-right{
      float: right;
    }
  }
}
</style>
