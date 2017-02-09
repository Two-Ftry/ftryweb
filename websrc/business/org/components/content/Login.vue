<template lang="html">
  <content-box bg="url('/assets/images/rooster.jpg') top left no-repeat">
      <div class="login-form-box">
        <div class="row">
          <fw-input icon="geren" type="white" placeholder="请输入用户名" width="300px"></fw-input>
        </div>
        <div class="row2">
          <fw-input type="white" placeholder="请输入密码" icon="iconfontlock" width="300px"></fw-input>
        </div>
        <div class="row3">
          <fw-button type="primary" width="300px">登录</fw-button>
        </div>
      </div>
  </content-box>
</template>

<script>
import {FwInput, FwButton} from 'ui/form/';
import ContentBox from './ContentBox';
export default {
  data() {
    return {
      data: {
        value: 'init value'
      }
    };
  },
  components:{
    FwInput,
    FwButton,
    ContentBox
  }
}
</script>

<style lang="sass">
@import "../../../../common/css/var.scss";
    .login-form-box{
      display: inline-block;
      margin-top: 120px;
      padding: 24px 23px 20px;
      border-radius: 6px;
      background-color: #eceff1;
      .row2{
        margin-top: 8px;
      }
      .row3{
        margin-top: 15px;
      }
    }
</style>
