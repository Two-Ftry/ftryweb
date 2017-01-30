<template lang="html">
  <div class="reg-box">
    <div class="reg-inner-box">
      注册页面
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
@import "../../../../common/css/var.scss";
.reg-box{
  height: 100%;
  background: url('~assets/images/rooster.jpg') top left no-repeat;
  background-size: 100%;
  .reg-inner-box{
      width: $boxWidth;
      margin: 0 auto;
  }
}
</style>
