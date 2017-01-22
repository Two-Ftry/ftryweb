<template lang="html">
  <div class="">
    <web-header></web-header>
    <div class="content-box">
      <div class="content-slide-box" :style="{height: slideBoxHeight}">
        <carousel-com circle="false"></carousel-com>
        <!-- <date-range :data="dateRange"></date-range> -->
      </div>
    </div>
    <web-footer></web-footer>
  </div>
</template>

<script>
import WebHeader from './header/WebHeader';
import WebFooter from './footer/WebFooter';
import CarouselCom from './content/CarouselCom';
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
      slideBoxHeight: '500px'
    };
  },
  computed: {

  },
  mounted() {
    this.setSlideBoxHeight();
  },
  attached() {},
  methods: {
    setSlideBoxHeight(){
      var screenHeight = $(window).height(),
          headerHeight = $('.nav-box').height(),
          footerHeight = $('.footer-box').height();
      var contentHeight = screenHeight - headerHeight - footerHeight;
      this.slideBoxHeight = contentHeight + 'px';
    }
  },
  components: {
    WebHeader,
    WebFooter,
    CarouselCom,
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
.content-slide-box{
  height: 500px;
  overflow: hidden;
}
.slide-img{
  width: 100%;
}
</style>
