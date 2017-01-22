<template lang="html">
  <carousel>
    <carousel-item>
      <div class="slide-img-box">
        <img class="slide-img" src="~assets/images/book" alt="" />
        <p class="text-1">来，在这里写一些文字吧</p>
      </div>
    </carousel-item>
    <carousel-item>
      <img class="slide-img" src="~assets/images/book2" alt="" />
    </carousel-item>
    <carousel-item>
      <img class="slide-img" src="~assets/images/coffee" alt="" />
    </carousel-item>
  </carousel>
</template>

<script>
import Carousel from 'ui/carousel/Carousel';
import CarouselItem from 'ui/carousel/CarouselItem';
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {
    Carousel,
    CarouselItem
  }
};
</script>

<style lang="css">
.slide-img-box{
  position: relative;
}
.text-1{
  position: absolute;
  top: 120px;
  right: 200px;
  font-size: 44px;
  color: #fff;
  font-family: '宋体';
}
</style>
