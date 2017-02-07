<template lang="html">
  <carousel>
    <carousel-item>
      <div class="slide-img-box">
        <img class="slide-img" src="~assets/images/coffee" alt="" />
        <p class="img-text text-1">来，在这里写一些文字吧</p>
      </div>
    </carousel-item>
    <carousel-item>
      <div class="slide-img-box">
        <img class="slide-img" src="~assets/images/mooncake" alt="" />
        <!-- <p class="img-text text-2">来，在这里写一些文字吧</p> -->
      </div>
    </carousel-item>
    <carousel-item>
      <div class="slide-img-box">
        <img class="slide-img" src="~assets/images/book2" alt="" />
        <p class="img-text text-3">来，在这里写一些文字吧</p>
      </div>
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

<style lang="sass">
@import "../../../../common/css/var.scss";
.slide-img-box{
  position: relative;
}
.img-text{
  position: absolute;
  font-size: 44px;
  color: #fff;
  font-family: '宋体';
}
.text-1{
  top: 120px;
  right: 250px;
}
.text-2{
  top: 120px;
  right: 350px;
  color: $green;
}
.text-3{
  top: 185px;
  left: 100px;
}
.slide-img{
  width: 100%;
}
</style>
