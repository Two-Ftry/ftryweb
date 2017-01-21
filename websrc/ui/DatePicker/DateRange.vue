<template lang="html">
  <div class="dr-box">
    <input class="dr-input" type="text" name="name" v-model="data.val"
            @click="onToShow"
            @blur="onToBlur"
    />
    <i class="iconfont icon-calendar-large calendar-icon"></i>
    <date-range-panel
      ref="datePanel"
      v-show="!hide"
      :panel="panel"
      :selected-date="selectedDate"
      @event-date-selected="onToSelectedDate"
    ></date-range-panel>
  </div>
</template>

<script>
import DateRangePanel from './DateRangePanel';
import dateUtil from './dateUtil';
export default {
  props:{
    data: Object
  },
  data() {
    return {
      hide: true,
      panel:{
        start:{//开始日期的面板
          year: 2017,
          month: 0,
          weeks: []
        },
        end: {//介绍日期的面板
          year: 2017,
          month: 1,
          weeks: []
        }
      },
      minYear: 1970,
      maxYear: 2099,
      selectedDate: {//选中的日期
        start:{
          year: -1,//表示还没有初始化
          month: 0,
          date: 1,
          time: 0
        },
        end: {
          year: -1,//表示还没有初始化
          month: 1,
          date: 1,
          time: 0
        }
      }
    };
  },
  watch:{
  },
  computed: {},
  created(){
    this.onToParse();
  },
  mounted() {
  },
  attached() {},
  methods: {
    getDate(){

    },
    onToShow(){
      this.hide = !this.hide;
    },
    onToParse(){
      if(this.data.val){
        this.toParseDate();
      }else{
        var dateTime = new Date(Date.now());
        this.panel.start.year = dateTime.getFullYear();
        this.panel.start.month = dateTime.getMonth();
      }
      this.toSetEndDate();
    },
    toParseDate(){
      var exp = /(\d{4})-(\d{1,2})-*(\d{1,2})\s*-\s*(\d{4})-*(\d{1,2})-*(\d{1,2})/gi;
      var matches = exp.exec(this.data.val);
      var startTemp = {
        year: parseInt(matches[1]),
        month: parseInt(matches[2]) - 1,
        date: parseInt(matches[3])
      };
      var endTemp = {
        year: parseInt(matches[4]),
        month: parseInt(matches[5]) - 1,
        date: parseInt(matches[6])
      };
      if(startTemp.year < this.minYear || startTemp.year > this.maxYear ||
        endTemp.year < this.minYear || endTemp.year > this.maxYear
        ){
        return;
      }
      if(startTemp.month < 0 || startTemp.month > 11 ||
        endTemp.month < 0 || endTemp.month > 11
        ){
        return;
      }
      var startDate = dateUtil.calculateDays(startTemp.year, startTemp.month);
      if(startTemp.date < 1 || startTemp.date > startDate){
        return;
      }
      var endDate = dateUtil.calculateDays(endTemp.year, endTemp.month);
      if(endTemp.date < 1 || endTemp.date > endDate){
        return;
      }
      if(matches){
        this.selectedDate.start = startTemp;
        this.selectedDate.end = endTemp;
        this.setVal();
        this.panel.start.year = this.selectedDate.start.year;
        this.panel.start.month = this.selectedDate.start.month;
      }
    },
    toSetEndDate(){
      this.panel.end.year = this.panel.start.year;
      this.panel.end.month = this.panel.start.month+1;
      if(this.panel.end.month > 11){
        this.panel.end.month  = 0;
        this.panel.end.year++;
      }
    },
    setVal(){
      var start = this.selectedDate.start,
          end = this.selectedDate.end;
      if(!start || !end){
        return;
      }
      this.data.start = new Date(start.year, start.month, start.date).getTime();
      this.data.end = new Date(end.year, end.month, end.date).getTime();

      this.selectedDate.start.time = this.data.start;
      this.selectedDate.end.time = this.data.end;
    },
    onToBlur(){
      if(this.data.val){
        this.toParseDate();
        this.toSetEndDate();
      }
      this.$refs.datePanel.setMonth(this.panel.start.year, this.panel.start.month, 'panel', 'start');
      this.$refs.datePanel.setMonth(this.panel.end.year, this.panel.end.month, 'panel', 'end');
    },
    onToSelectedDate(eventData){
      var start = eventData.start,
          end = eventData.end;
      if(!start || !end){
        return;
      }
      this.data.start = start.time;
      this.data.end = end.time;
      this.data.val = start.year + '-' +
                      (start.month+1>9 ? start.month+1: '0' + (start.month+1)) + '-' +
                      (start.date>9?start.date:'0'+start.date);
      this.data.val += ' - ';
      this.data.val += end.year + '-' +
                      (end.month+1>9 ? end.month+1: '0' + (end.month+1)) + '-' +
                      (end.date>9?end.date:'0'+end.date);
      this.onToShow();
    }
  },
  components: {
    DateRangePanel
  }
};
</script>

<style lang="css">
.dr-box{
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.dr-input{
  width: 240px;
  height: 28px;
  border-radius: 4px;
  background-color: #ffffff;
  border: solid 1px #dfe1e5;
  text-indent: 10px;
}
.calendar-icon{
  position: absolute;
  top: 6px;
  right: 5px;
}
</style>
