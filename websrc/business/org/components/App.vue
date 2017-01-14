<template lang="html">
  <div class="">
    <web-header></web-header>
    <div class="content-box">
      <carousel>
        <carousel-item>
          hhhh
        </carousel-item>
        <carousel-item>
          hhhh2
        </carousel-item>
      </carousel>
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
</style>
