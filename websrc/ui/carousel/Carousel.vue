<template lang="html">
  <div class="carousel-box">
    <div class="carousel-innerbox" :style="{width: innerWidth}">
      <slot></slot>
    </div>
    <div class="carousel-list-box clearfix">
      <ol class="carousel-list">
        <li v-for="item in indicator"
            :class="{'active': index == item}"
            @click="indicatorClick(item)"
            ></li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      indicator: [],
      index: 0, //当前活跃的index
    }
  },
  watch:{
    index(newVal, oldVal){
      this.slide(newVal, oldVal);
    }
  },
  computed: {
    innerWidth(){
      return (this.indicator.length * 100) + '%'
    }
  },
  attached () {},
  methods: {
    indicatorClick(i){
      this.index = i;
    },
    slide(next, prev){
      console.log('', next, prev);
      // for(var c in this.$children){
      //   var $child = this.$children[c];
      //   if($child.show){
      //
      //   }else{
      //
      //   }
      // }
    }
  },
  components: {}
}
</script>

<style lang="sass">
  .carousel-box{
    width: 100%;
    height: 100%;
    position: relative;
    .carousel-innerbox{
      position: relative;
      height: 100%;
    }
    .carousel-list-box{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 15px;
      text-align: center;
    }
    .carousel-list{
      display: inline-block;
      color: #fff;
      z-index: 999;
      list-style-type: none;
      li{
        float: left;
        width: 25px;
        height: 4px;
        margin-left: 5px;
        background-color: #fff;
      }
      .active, li:hover{
        background-color: #1abc9c;
        cursor: pointer;
      }
    }
  }

</style>
