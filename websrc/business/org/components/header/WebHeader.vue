<template lang="html">
  <div class="header-box">
    <div class="header-innerbox">
      <a href="#">首页</a>
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
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="sass">
@import "../../../../common/css/var.scss";
.header-box{
  width: 100%;
  height: 59px;
  line-height: 58px;
  background-color: $whiteColor;
  border-bottom: 1px solid #ccc;
  .header-innerbox{
    width: 1000px;
    margin: 0 auto;
    a{
      display: inline-block;
      line-height: 60px;
      padding: 0 20px;
    }
  }
}
</style>
