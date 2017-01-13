<template lang="html">
  <!-- <div class="header-box">
    <div class="header-innerbox clearfix">
      <div class="header-left-part">
        <a href="#" class="active">首页</a>
      </div>
      <div class="header-right-part">
        <a href="#">登录</a>
        <a href="#">注册</a>
      </div>
    </div>
  </div> -->
  <navbar>
    <div class="logo-box" slot="left">
      <a href="#">
        <i class="ftryweb icon-yezi">ftry</i>
      </a>
    </div>
    <header-right slot="right"></header-right>
  </navbar>
</template>

<script>
import Navbar from 'ui/common/Navbar';
import HeaderRight from './HeaderRight';
export default {
  data() {
    return {
    };
  },
  computed: {},
  attached() {},
  methods: {},
  components: {
    Navbar,
    HeaderRight
  }
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
  box-shadow: 1px 1px 1px #ccc;
  .header-innerbox{
    width: 1000px;
    margin: 0 auto;
    .header-left-part{
      float: left;
    }
    .header-right-part{
      float: right;
    }
    a{
      display: inline-block;
      line-height: 60px;
      padding: 0 20px;
    }
    a.active{
      color: $activeColor;
    }
    a.active:hover{
      color: $whiteColor;
    }

  }
}
.logo-box {
  position: relative;
  a{
    position: absolute;
    top: -15px;
    left: 0;
    height: 75px;
    padding: 0 15px;
    background-color:  $green;
  }
  i{
    line-height: 85px;
    font-size: 28px;
    color: $whiteColor;
  }
}
</style>
