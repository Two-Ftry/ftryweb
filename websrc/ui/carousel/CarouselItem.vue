<template lang="html">
  <div class="carousel-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      show: false
    }
  },
  computed:{
    show(){
      return this.$parent.index === this.index;
    }
  },
  mounted(){
    var $childs = this.$parent.$children;
    var i = 0;
    for(var key in $childs){
      if($childs[key] == this){
        this.index = i;
        break;
      }
      i++;
    }
    this.$parent.indicator.push(this.index);
  },
  computed: {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="sass">
  .carousel-item{
    // position: absolute;
    // top: 0;
    // left: 0;
    float: left;
  }
</style>
