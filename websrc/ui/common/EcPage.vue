<template lang="html">
  <div class="ec-page-box clearfix">
    <div class="ec-page-inner-box">
      <ul>
        <li @click="prevPage" :class="{'unactive': curPage == 0}"><span class="ftryweb icon-arrow-left"></span></li>
        <li v-for="n in showPages" :class="{'active': curPage+1 == n}"
            @click="numberPage(n)"
        ><span>{{n}}</span></li>
        <li @click="nextPage" :class="{'unactive': curPage == totalPage - 1}"><span class="ftryweb icon-arrow-right"></span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EcPage',
  props:{
    count:{
      type: [Number, String],
      default: 0
    },
    limit: {
      type: [Number, String],
      default: 10
    },
    numLen: { //页数过多的时候显示numLen个数字页码
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
    },
    showPages(){
      var arr = [];

      var isOdd = !(this.numLen%2 == 0);
      var _half = Math.floor(this.numLen/2);

      var _start = this.curPage - _half;
      var _end = this.curPage + (isOdd ? _half : _half -1);

      if(_start < 0){
        _end -= _start;
        _start = 0;
      }

      if(_end > this.totalPage - 1){
        _start -= _end - (this.totalPage - 1);
        _end = this.totalPage - 1;
        if(_start < 0){
          _start = 0;
        }
      }

      for(var i = _start; i <= _end; i++){
        arr.push(i+1);
      }

      return arr;
    }
  },
  attached() {},
  methods: {
    prevPage(){
      if(this.curPage == 0){
        return;
      }
      this.curPage--;
      this.$emit('event-ec-page', {
        curPage: this.curPage
      });
    },
    nextPage(){
      if(this.curPage >= this.totalPage-1){
        return;
      }
      this.curPage++;
      this.$emit('event-ec-page', {
        curPage: this.curPage
      });
    },
    numberPage(num){
      var _page = parseInt(num)-1;
      if(_page < 1){
        this.curPage = 0;
      }else if(_page > this.totalPage-1){
        this.curPage = this.totalPage-1;
      }else{
        this.curPage = _page;
      }
      this.$emit('event-ec-page', {
        curPage: this.curPage
      });
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
    .unactive:hover, .unactive:active{
      background-color: $gray;
    }
}
</style>
