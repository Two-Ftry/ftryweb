<template lang="html">
  <div class="carousel-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="sass">
  .carousel-box{
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
