<template>
    <div class="dp-datetime" tabindex="4" @blur="hideDatetime">
        <div class="datetime-panel">
            <div class="datetime-header">
                <span @click="prevYear" v-if="firstPanel"><span class="iconfont icon-drop-left">&lt;&lt;</span></span>
                <span @click="prevMonth" v-if="firstPanel"><span class="iconfont icon-drop-left">&lt;</span></span>
                <div class="time-wrap">
                    <div class="time-selector" @click="toggleYears">
                        {{year}}年
                        <!-- <span class="iconfont icon-drop-up" v-show="showYears"></span>
                        <span class="iconfont icon-drop-down" v-show="!showYears"></span> -->
                    </div>
                    <!-- <ul class="time-panel" v-show="showYears">
                        <li v-for="year in years" @click="chooseYear(year)">{{year}}</li>
                        <li @click="prevYear"><span class="iconfont icon-drop-left"></span></li>
                        <li @click="nextYear"><span class="iconfont icon-drop-right"></span></li>
                    </ul> -->
                </div>
                <div class="time-wrap">
                    <div class="time-selector" @click="toggleMonths">
                        {{month+1}}月
                        <!-- <span class="iconfont icon-drop-up" v-show="showMonths"></span>
                        <span class="iconfont icon-drop-down" v-show="!showMonths"></span> -->
                    </div>
                    <!-- <div class="time-panel" v-show="showMonths">
                        <li v-for="month in months" @click="chooseMonth(month)">{{month}}月</li>
                    </div> -->
                </div>
                <span @click="nextMonth"  v-if="!firstPanel"><span class="iconfont icon-drop-right">&gt;&gt;</span></span>
                <span @click="nextMonth"  v-if="!firstPanel"><span class="iconfont icon-drop-right">&gt;</span></span>
            </div>
            <table>
                <tr>
                    <td><span>日</span></td>
                    <td><span>一</span></td>
                    <td><span>二</span></td>
                    <td><span>三</span></td>
                    <td><span>四</span></td>
                    <td><span>五</span></td>
                    <td><span>六</span></td>
                </tr>
                <tr v-for="week in weeks">
                    <td v-for="date in week"><span
                            :class="{'today':date.date==today&&currentMonth==month&&currentYear==year,
                                      'choosed':date.date==day,
                                      'prev-date': date.prev,
                                      'next-date': date.next}"
                            @click="chooseDay(date)"
                            v-text="date.date"></span></td>
                    <!-- <td><span
                            :class="{'today':week[1]==today&&currentMonth==month&&currentYear==year,'choosed':week[1]&&week[1]==day}"
                            @click="chooseDay(week[1])"
                            v-text="week[1]"></span></td>
                    <td><span
                            :class="{'today':week[2]==today&&currentMonth==month&&currentYear==year,'choosed':week[2]&&week[2]==day}"
                            @click="chooseDay(week[2])"
                            v-text="week[2]"></span></td>
                    <td><span
                            :class="{'today':week[3]==today&&currentMonth==month&&currentYear==year,'choosed':week[3]&&week[3]==day}"
                            @click="chooseDay(week[3])"
                            v-text="week[3]"></span></td>
                    <td><span
                            :class="{'today':week[4]==today&&currentMonth==month&&currentYear==year,'choosed':week[4]&&week[4]==day}"
                            @click="chooseDay(week[4])"
                            v-text="week[4]"></span></td>
                    <td><span
                            :class="{'today':week[5]==today&&currentMonth==month&&currentYear==year,'choosed':week[5]&&week[5]==day}"
                            @click="chooseDay(week[5])"
                            v-text="week[5]"></span></td>
                    <td><span
                            :class="{'today':week[6]==today&&currentMonth==month&&currentYear==year,'choosed':week[6]&&week[6]==day}"
                            @click="chooseDay(week[6])"
                            v-text="week[6]"></span></td> -->
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                weeks: [],
                year: 2016,
                month: 1,
                day: 32,
                choosedTime: '',
                today: 1,
                currentMonth: 0,
                currentYear: 0,
                years: [2011, 2016, 2012, 2017, 2013, 2018, 2014, 2019, 2015, 2020],
                months: [1, 7, 2, 8, 3, 9, 4, 10, 5, 11, 6, 12],
                showYears: false,
                showMonths: false
            }
        },
        props: {
            hide: Boolean,
            format: String,
            firstPanel: Boolean,
            data: Object
        },
        computed:{

        },
        watch:{
          data(){
            this.year = this.data.year;
            this.month = this.data.month;
            this.setMonth(this.data.year, this.data.month, true);
          }
        },
        mounted(){
          var dateTime = new Date(Date.now());
          this.currentYear = dateTime.getFullYear();
          this.currentMonth = dateTime.getMonth();
          if(!this.data){
            this.year = dateTime.getFullYear();
            this.month = dateTime.getMonth();
            this.day = this.today = dateTime.getDate();
            this.setMonth(this.year, this.month);
          }else{
            this.year = this.data.year;
            this.month = this.data.month;
            this.day = this.data.day;
            this.setMonth(this.year, this.month);
          }
        },
        methods: {
            toggleDatetime(){
                this.isHide = !this.isHide;
            },
            toggleYears(){
                this.showYears = !this.showYears
            },
            toggleMonths(){
                this.showMonths = !this.showMonths
            },
            hideDatetime(){
                // this.hide = true;
            },
            prevYear(){
                let length = this.years.length;
                for (var i = 0; i < length; i++) {
                    this.years.$set(i, this.years[i] - 1);
                }
                console.log(this.years);
            },
            nextYear(){
                let length = this.years.length;
                for (let i = 0; i < length; i++) {
                    this.years.$set(i, this.years[i] + 1);
                }
                console.log(this.years);
            },
            chooseYear(year){
                this.year = year;
                this.showYears = false;
                this.setMonth(this.year, this.month);
            },
            chooseMonth(month){
                this.month = month - 1;
                this.showMonths = false;
                this.setMonth(this.year, this.month);
            },
            prevMonth(){
                if (this.month-- <= 0) {
                    this.month = 11;
                    this.year--;
                }
                this.setMonth(this.year, this.month);
            },
            prevYear(){
              //TODO
            },
            nextMonth(){
                if (this.month++ >= 11) {
                    this.month = 0;
                    this.year++;
                }
                this.setMonth(this.year, this.month);
            },
            nextYear(){
              //TODO
            },
            isLeapYear(year) {
                return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)
            },
            calculateDays(year, month) {
                var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
                var days = months[month]
                if (1 == month && this.isLeapYear(year)) {
                    days = 29
                }
                return days
            },
            setMonth(year, month, noEvent){
                this.weeks = [];
                var firstDay = new Date(year, month, 1).getDay();
                var days = this.calculateDays(year, month);
                var weekLength = Math.ceil((days + firstDay) / 7);//本月有几周
                var trLength = 6;
                for (var i = 0; i < trLength; i++) {
                    var week = [];
                    // 填充上一个月的日期
                    if(i == 0){
                      var prevMonthLastDate = this.getPrevMonthLastDate(year, month);
                      //填充一个星期
                      if(prevMonthLastDate.length == 7){
                        this.weeks.push(prevMonthLastDate);
                        trLength --;
                      }
                      //填充最后几天在下面的for循环中填充
                    }
                    for (var k = 0; k < 7; k++) {
                        var idx = i * 7 + k;
                        var dateItem = this.generateDateObj(year, month, idx - firstDay + 1);
                        if(dateItem.date <= 0){//填充上一个月的日期
                           dateItem = prevMonthLastDate[k];
                        }else if(dateItem.date > days){
                          let nextYear = year,
                              nextMonth = month+1;
                          if(nextMonth>11){
                            nextYear = year+1;
                            nextMonth = 0;
                          }
                          dateItem =this.generateDateObj(nextYear, nextMonth, dateItem.date - days);
                        }
                        week.push(dateItem);
                    }
                    this.weeks.push(week);
                }
                //同步到上一级组件
                if(!noEvent){
                  this.$emit('event-date-change', {
                    firstPanel: this.firstPanel,
                    year: year,
                    month: month
                  });
                }
            },
            chooseDay(day){
                if (!day) {
                    return
                }
                var monthStr, dayStr;

                day.toString().length < 2 ? dayStr = '0' + day : dayStr = day;
                (this.month + 1).toString().length < 2 ? monthStr = '0' + (this.month + 1) : monthStr = (this.month + 1);
                this.day = dayStr;

                this.choosedTime = this.year + '-' + monthStr + '-' + dayStr;
                this.$emit('selected-date', this.choosedTime);
            },
            //获取上一个月的最后几天
            getPrevMonthLastDate(year, month){
              var firstDay = new Date(year, month, 1).getDay();
              var days = this.calculateDays(year, month);
              var weekLength = Math.ceil((days + firstDay) / 7);//本月有几周

              var prevYear = year,
                  prevMonth = month - 1;
              if(prevMonth<0){
                prevMonth = 11;
                prevYear --;
              }
              var prevMonthDates = this.calculateDays(prevYear, prevMonth);
              var prevMonthLastDate = [];
              if(firstDay == 0){
                if(weekLength < 6){
                  for(var i = 6; i >= 0; i--){
                    var o = this.generateDateObj(prevYear, prevMonth, prevMonthDates-i);
                    prevMonthLastDate.push(o);
                  }
                }
              }else {
                for(var j = firstDay-1; j >= 0 ; j--){
                  var o = this.generateDateObj(prevYear, prevMonth, prevMonthDates-j);
                  prevMonthLastDate.push(o);
                }
              }
              return prevMonthLastDate;
            },
            //生成日期对象
            generateDateObj(year, month, date){
              var dObj = {
                date: date
              };
              if(month < this.month){
                dObj.prev = true;
              }else if(month > this.month && year < this.year){
                dObj.prev = true;
              }else if(month > this.month && year >= this.year){
                dObj.next = true;
              }else {
                dObj.cur = true;
              }
              return dObj;
            }
        }
    }
</script>

<style type="scss" scoped>
    .dp-datetime .icon-drop-up, .dp-datetime .icon-drop-down {
        float: none;
        vertical-align: middle;
        padding-left: 6px;
        color: #3cbaff;
    }

    ,
    .dp-datetime .icon-drop-down {

        color: #caced8;
    }

    .dp-datetime {
        moz-user-select: -moz-none;
        -moz-user-select: none;
        -o-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        width: 355px;
        /*position: absolute;*/
        z-index: 100;
        float: left;
    }

    .datetime-header {
        padding-bottom: 10px;
    }

    .time-wrap {
        position: relative;
        display: inline-block;
        padding: 0 7px;
    }

    .time-selector {
        display: inline-block;
        background: #5e6273;
        border: 1px solid #777e8b;
        border-radius: 2px;
        width: 96px;
        height: 27px;
        line-height: 27px;
        text-align: center;
    }

    .time-panel {
        background: #ffffff;
        border-radius: 2px;
        width: 98px;
        height: 139px;
        position: absolute;
        margin-top: 5px;
    }

    .time-panel > li {
        font-size: 12px;
        line-height: 23px;
        display: inline-block;
        width: 40px;
        color: #a4a4a4;
    }

    .time-panel > li:hover {
        color: #3cbaff;
    }

    .datetime-panel {
        width: 355px;
        height: 270px;

        background: rgba(26, 32, 55, .69);
        border-radius: 2px;

        font-size: 12px;
        color: #ffffff;
        text-align: center;
        padding: 12px 0;

    }

    .datetime-panel table {
        margin: 0 auto;
        width: 100%;
    }

    .dp-datetime td {
        width: 50px;
    }

    .dp-datetime td span {
        display: inline-block;
        width: 31px;
        height: 31px;
        text-align: center;
        line-height: 31px;
    }

    .choosed {
        background: #3cbaff;
        border-radius: 100%;
        color: #fff !important;
    }

    .today {
        color: #57eebe;
    }

    .hide {
        display: none;
    }
    .prev-date{
      color: red;
    }
    .next-date{
      color: yellow;
    }
</style>
