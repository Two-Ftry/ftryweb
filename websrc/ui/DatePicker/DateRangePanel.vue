<template lang="html">
  <div class="dr-panel-box">
    <date-time-for-range
            :first-panel="firstPanel"
            :data.sync="panel.start"
            @event-date-change="changeYearMonth"
            @event-hover-date="onToHoverDate"
            @selected-date="getDate"></date-time-for-range>
    <date-time-for-range
            :data.sync="panel.end"
            @event-date-change="changeYearMonth"
            @event-hover-date="onToHoverDate"
            @selected-date="getDate"></date-time-for-range>
  </div>
</template>

<script>
import DateTimeForRange from './DateTimeForRange';
import dateUtil from './dateUtil';
export default {
  props:{
    panel: Object,
    selectedDate: Object
  },
  data() {
    return {
      hide: false,
      firstPanel: true,
      firstSelected: false, //是否选择了第一个日期
      secSelected: false, //是否选择了第二个日期
      hoverDate: {
        year: -1,
        month: -1,
        date: -1,
        time: -1
      }
    };
  },
  computed: {},
  ready() {},
  mounted(){
    this.initSelected();
    this.setMonth(this.panel.start.year, this.panel.start.month, 'panel', 'start');
    this.setMonth(this.panel.end.year, this.panel.end.month, 'panel', 'end');
    //
    // this.toSetDateStatus('panel', 'start');
    // this.toSetDateStatus('panel', 'end');
  },
  attached() {},
  methods: {
    initSelected(){
      if(this.selectedDate.start.year == -1 || this.selectedDate.end.year == -1){
        return;
      }
      this.firstSelected = true;
      this.secSelected = true;
    },
    getDate(date){
      if(!this.firstSelected && !this.secSelected){
        this.selectedDate.start = date;
        this.selectedDate.end = {
          year: -1,
          month: -1,
          date: -1,
          time: -1
        };
        this.firstSelected = true;
      }else if(this.firstSelected && this.secSelected){
        this.selectedDate.start = date;
        this.selectedDate.end = {
          year: -1,
          month: -1,
          date: -1,
          time: -1
        };
        this.secSelected = false;
      }else if(this.firstSelected && !this.secSelected){
        if(this.selectedDate.start.time <= date.time){
          this.selectedDate.end = date;
          this.secSelected = true;
          this.$emit('event-date-selected', {
            start: this.selectedDate.start,
            end: this.selectedDate.end
          });
        }else{
          this.selectedDate.start = date;
          this.selectedDate.end = {
            year: -1,
            month: -1,
            date: -1,
            time: -1
          };
        }
      }
      this.toSetDateStatus('panel', 'start');
      this.toSetDateStatus('panel', 'end');
    },
    onToHoverDate(hoverDate){
      if(this.firstSelected && !this.secSelected){
        this.hoverDate = hoverDate;
        // console.log(hoverDate.year + '-' +　(hoverDate.month+1) + '-' + hoverDate.date);
        this.toSetDateStatus('panel', 'start', hoverDate);
        this.toSetDateStatus('panel', 'end', hoverDate);
      }
    },
    changeYearMonth(dateObj){
      if(!dateObj){
        return;
      }
      if(dateObj.firstPanel){
        var nextYear = dateObj.year,
            nextMonth = dateObj.month+1;
        if(nextMonth > 11){
          nextYear++;
          nextMonth = 0;
        }
        this.panel.end = {
          year: nextYear,
          month: nextMonth
        };

      }else{
        var prevYear = dateObj.year,
            prevMonth = dateObj.month-1;
        if(prevMonth < 0){
          prevYear--;
          prevMonth = 11;
        }
        this.panel.start = {
          year: prevYear,
          month: prevMonth
        }
      }
      this.setMonth(this.panel.start.year, this.panel.start.month, 'panel', 'start');
      this.setMonth(this.panel.end.year, this.panel.end.month, 'panel', 'end');
      // this.toSetDateStatus('panel', 'start', this.hoverDate);
      // this.toSetDateStatus('panel', 'end', this.hoverDate);
    },
    setMonth(year, month, panel, startOrEnd){
        this[panel][startOrEnd].weeks = [];
        var firstDay = new Date(year, month, 1).getDay();
        var days = dateUtil.calculateDays(year, month);
        var weekLength = Math.ceil((days + firstDay) / 7);//本月有几周
        var trLength = 6;
        for (var i = 0; i < trLength; i++) {
            var week = [];
            // 填充上一个月的日期
            if(i == 0){
              var prevMonthLastDate = this.getPrevMonthLastDate(year, month);
              //填充一个星期
              if(prevMonthLastDate.length == 7){
                this[panel][startOrEnd].weeks.push(prevMonthLastDate);
                trLength --;
              }
              //填充最后几天在下面的for循环中填充
            }
            for (var k = 0; k < 7; k++) {
                var idx = i * 7 + k;
                var dateItem = this.generateDateObj(year, month, idx - firstDay + 1, 'cur');
                if(dateItem.date <= 0){//填充上一个月的日期
                   dateItem = prevMonthLastDate[k];
                }else if(dateItem.date > days){
                  let nextYear = year,
                      nextMonth = month+1;
                  if(nextMonth>11){
                    nextYear = year+1;
                    nextMonth = 0;
                  }
                  dateItem =this.generateDateObj(nextYear, nextMonth, dateItem.date - days, 'next');
                }
                week.push(dateItem);
            }
            this[panel][startOrEnd].weeks.push(week);
        }
    },
    //获取上一个月的最后几天
    getPrevMonthLastDate(year, month){
      var firstDay = new Date(year, month, 1).getDay();
      var days = dateUtil.calculateDays(year, month);
      var weekLength = Math.ceil((days + firstDay) / 7);//本月有几周

      var prevYear = year,
          prevMonth = month - 1;
      if(prevMonth<0){
        prevMonth = 11;
        prevYear --;
      }
      var prevMonthDates = dateUtil.calculateDays(prevYear, prevMonth);
      var prevMonthLastDate = [];
      if(firstDay == 0){
        if(weekLength < 6){
          for(var i = 6; i >= 0; i--){
            var o = this.generateDateObj(prevYear, prevMonth, prevMonthDates-i, 'prev');
            prevMonthLastDate.push(o);
          }
        }
      }else {
        for(var j = firstDay-1; j >= 0 ; j--){
          var o = this.generateDateObj(prevYear, prevMonth, prevMonthDates-j, 'prev');
          prevMonthLastDate.push(o);
        }
      }
      return prevMonthLastDate;
    },
    //生成日期对象
    generateDateObj(year, month, date, state){
      var dObj = {
        year: year,
        month: month,
        date: date,
        time: new Date(year, month, date).getTime()
      };
      dObj[state] = true;
      if(state == 'cur'){
        if(dObj.time == this.selectedDate.start.time ||
            dObj.time == this.selectedDate.end.time){
          dObj.choosed = true;
        }else if(dObj.time > this.selectedDate.start.time &&
            dObj.time < this.selectedDate.end.time){
          dObj.inRange = true;
        }else{
          dObj.choosed = false;
          dObj.inRange = false;
        }
      }
      return dObj;
    },
    //设置日期的样式，用于选中日期范围/hover日期范围
    toSetDateStatus(panel, startOrEnd, hoverDate){
      for(var i = 0, len = this[panel][startOrEnd].weeks.length; i < len; i++){
        for(var j = 0, jLen = this[panel][startOrEnd].weeks[i].length; j < jLen; j++){
          var item = this[panel][startOrEnd].weeks[i][j];
          var choosed = false,
              inRange = false,
              inHoverRange = false;
          if(item.cur){//是面板中显示的当前月日期
            if(item.time == this.selectedDate.start.time ||
                item.time == this.selectedDate.end.time){
              // this[panel][startOrEnd].weeks[i][j].choosed = true;
              choosed = true;
            }else if(item.time > this.selectedDate.start.time &&
                item.time < this.selectedDate.end.time){
              // this[panel][startOrEnd].weeks[i][j].inRange = true;
              // this[panel][startOrEnd].weeks[i][j].inHoverRange = false;
              inRange = true;
              inHoverRange = false;
            }else if(hoverDate &&
                item.time > this.selectedDate.start.time &&
                item.time <= hoverDate.time
              ){
              // this[panel][startOrEnd].weeks[i][j].inHoverRange = true;
              // this[panel][startOrEnd].weeks[i][j].inRange = false;
              inHoverRange = true;
              inRange = false;
            }else{
              // this[panel][startOrEnd].weeks[i][j].choosed = false;
              // this[panel][startOrEnd].weeks[i][j].inRange = false;
              // this[panel][startOrEnd].weeks[i][j].inHoverRange = false;
              choosed = false;
              inRange = false;
              inHoverRange = false;
            }
          }else{
            // this[panel][startOrEnd].weeks[i][j].choosed = false;
            // this[panel][startOrEnd].weeks[i][j].inRange = false;
            // this[panel][startOrEnd].weeks[i][j].inHoverRange = false;

          }
          var obj = Object.assign({}, this[panel][startOrEnd].weeks[i][j]);
          obj.choosed = choosed;
          obj.inRange = inRange;
          obj.inHoverRange = inHoverRange;
          this[panel][startOrEnd].weeks[i].splice(j, 1, obj);
        }
      }
      var me = this;
      //触发数组变异
      // setTimeout(function(){
        // for(var i = 0, len = me[panel][startOrEnd].weeks.length; i < len; i++){
        //   var item = me[panel][startOrEnd].weeks[i];
        //   me[panel][startOrEnd].weeks.splice(i, 1, item);
        //   // console.log(startOrEnd, me[panel][startOrEnd].weeks[i]);
        // }
      // }, 10);

    }

  },
  components: {
    DateTimeForRange
  }
};
</script>

<style lang="css">
.dr-panel-box{
  position: absolute;
  width: 710px;
  z-index: 100;
}
</style>
