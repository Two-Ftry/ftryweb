<template lang="html">
  <carousel>
    <carousel-item>
      <img class="slide-img" src="~assets/images/book" alt="" />
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
</style>
