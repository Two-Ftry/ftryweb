<template lang="html">
  <div class="reg-box">
    <div class="reg-inner-box">
      <div class="reg-form-box">
        <div class="row">
          <fw-input icon="geren" type="white" placeholder="请输入用户名" width="300px"></fw-input>
        </div>
        <div class="row2">
          <fw-input type="white" placeholder="请输入密码" icon="iconfontlock" width="300px"></fw-input>
        </div>
        <div class="row3">
          <fw-button type="primary" width="300px">登录</fw-button>
          <fw-button type="warning" width="300px">登录</fw-button>
          <fw-button type="gray" width="300px">登录</fw-button>
          <fw-button type="danger" width="300px">登录</fw-button>
          <fw-button type="success" width="300px">登录</fw-button>
          <fw-button type="default" width="300px">登录</fw-button>
          <fw-button type="info" width="300px">登录</fw-button>
          <fw-button type="info" width="300px" disabled="true">登录</fw-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FwInput, FwButton} from 'ui/form/';
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
    FwButton
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
    .reg-form-box{
      display: inline-block;
      margin-top: 250px;
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
  }
}
</style>
