<template lang="html">
  <div class="">
    <web-header></web-header>
    <div class="content-box">
      <div class="content-inner-box" :style="{height: innerBoxHeight}">
        <router-view></router-view>
      </div>
    </div>
    <web-footer></web-footer>
  </div>
</template>

<script>
import WebHeader from './header/WebHeader';
import WebFooter from './footer/WebFooter';
import DateRange from 'ui/DatePicker/DateRange';
import $ from 'jQuery';
export default {
  data() {
    return {
      dateRange:{
        val : '',
        start: -1,
        end: -1
      },
      innerBoxHeight: '500px'
    };
  },
  computed: {

  },
  mounted() {
    this.setInnerBoxHeight();
  },
  attached() {},
  methods: {
    setInnerBoxHeight(){
      var screenHeight = $(window).height(),
          headerHeight = $('.nav-box').height(),
          footerHeight = $('.footer-box').height();
      var contentHeight = screenHeight - headerHeight - footerHeight;
      this.innerBoxHeight = contentHeight + 'px';
    }
  },
  components: {
    WebHeader,
    WebFooter,
    DateRange
  }
};
</script>

<style lang="css">
body{
  /*background: url('../../../assets/images/book') top left no-repeat;*/
}
.content-box{
  width: 100%;
}
.content-inner-box{
  height: 500px;
  overflow: hidden;
}

</style>
