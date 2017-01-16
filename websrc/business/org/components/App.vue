<template lang="html">
  <div class="">
    <web-header></web-header>
    <div class="content-box">
      <div class="content-slide-box">
        <carousel>
          <carousel-item>
            <img class="slide-img" src="~assets/images/book" alt="" />
          </carousel-item>
          <carousel-item>
            <img class="slide-img" src="~assets/images/book2" alt="" />
          </carousel-item>
        </carousel>
      </div>
    </div>
    <web-footer></web-footer>
  </div>
</template>

<script>
import WebHeader from './header/WebHeader';
import WebFooter from './footer/WebFooter';
import Carousel from 'ui/carousel/Carousel';
import CarouselItem from 'ui/carousel/CarouselItem';
export default {
  data() {
    return {
    };
  },
  computed: {},
  mounted() {},
  attached() {},
  methods: {},
  components: {
    WebHeader,
    WebFooter,
    Carousel,
    CarouselItem
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
  height: 861px;
  overflow: hidden;
}
.slide-img{
  width: 100%;
}
</style>
