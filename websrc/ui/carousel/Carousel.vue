<template lang="html">
  <div class="carousel-box">
    <div class="carousel-innerbox" :style="{width: innerWidth, left: left}">
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
    <div class="page-box prev-page-box" @click="prevPage">
    </div>
    <div class="page-box next-page-box" @click="nextPage">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    circle: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      indicator: [],
      index: 0, //当前活跃的index
      left: 0
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
      this.left = (-next*100) + '%';
    },
    prevPage(){
      if(this.index == 0 && !this.circle){
        return;
      }else if(this.index == 0 && this.circle){
          this.index = this.indicator.length - 1;
      }else{
        this.index --;
      }
    },
    nextPage(){
      if(this.index >= this.indicator.length-1 && !this.circle){
        return;
      }else if(this.index >= this.indicator.length - 1 && this.circle){
        this.index = 0;
      }else{
        this.index ++;
      }
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
      position: absolute;
      top: 0;
      height: 100%;
      overflow: hidden;
      transition: all 0.5s;
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
    .page-box{
      position: absolute;
      top: 0;
      width: 80px;
      height: 100%;
      background-color: #000;
      opacity: 0;
      cursor: pointer;
    }
    .page-box:hover{
      opacity: 0.3;
    }
    .prev-page-box{
      left: 0;
      box-shadow: 0 3px 15px #000;
    }
    .next-page-box{
      right: 0;
      box-shadow: 0 -3px 15px #000;
    }
  }

</style>
