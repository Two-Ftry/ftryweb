<template lang="html">
  <div class="ec-page-box clearfix">
    <div class="ec-page-inner-box">
      <ul>
        <li @click="prevPage"><span class="ftryweb icon-arrow-left"></span></li>
        <li v-for="n in totalPage" :class="{'active': curPage+1 == n}"
            @click="numberPage(n)"
        ><span>{{n}}</span></li>
        <li @click="nextPage"><span class="ftryweb icon-arrow-right"></span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    count:{
      type: [Number, String],
      default: 0
    },
    limit: {
      type: [Number, String],
      default: 10
    },
    numLen: { //页数过多的时候显示个数字页码
      type: [Number, String],
      default: 5
    }
  },
  data() {
    return {
      curPage: 0
    };
  },
  computed: {
    totalPage(){
      var _count = common.util.coerce.number(this.count);
      var page = Math.floor(_count/this.limit);
      return _count%this.limit ? page + 1 : page;
    }
  },
  attached() {},
  methods: {
    prevPage(){
      if(this.curPage == 0){
        return;
      }
      this.curPage--;
    },
    nextPage(){
      if(this.curPage >= this.totalPage-1){
        return;
      }
      this.curPage++;
    },
    numberPage(num){
      this.curPage = parseInt(num)-1;
    }
  },
  components: {}
};
</script>

<style lang="sass">
@import "../../common/css/var.scss";
.ec-page-box{

}
.ec-page-inner-box{
    float: right;
    li{
      float: left;
      display: inline-block;
      margin-left: 1px;
      padding: 0 18px;
      line-height: 34px;
      background-color: $gray;
      color: $white;
      font-size: 16px;
      cursor: pointer;
    }
    li:first-child{
      font-size: 14px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    li:last-child{
      font-size: 14px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    li:hover, .active{
      background-color: $green;
    }
}
</style>
