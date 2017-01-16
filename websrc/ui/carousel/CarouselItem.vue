<template lang="html">
  <div class="carousel-item">
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
  .carousel-item{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
</style>
