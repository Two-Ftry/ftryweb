<template lang="html">
  <div class="reg-box">
    <div class="reg-inner-box">
      <div class="reg-form-box">
        <div class="">
          <fw-input icon="geren" placeholder="请输入用户名"></fw-input>
        </div>
        <div class="">
          <fw-input placeholder="请输入密码"></fw-input>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import FwInput from 'ui/form/FwInput';
export default {
  components:{
    FwInput
  }
}
</script>

<style lang="sass">
@import "../../../../common/css/var.scss";
.reg-box{
  height: 100%;
  background: url('~assets/images/rooster.jpg') top left no-repeat;
  background-size: 100% 100%;
  .reg-inner-box{
      width: $boxWidth;
      margin: 0 auto;
  }
}
</style>
