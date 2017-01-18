<template lang="html">
  <div class="carousel-item" :style="{width: width}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      show: false,
      width: '100%'
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
    this.width = (100/$childs.length) + '%';
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
    float: left;
  }
</style>
