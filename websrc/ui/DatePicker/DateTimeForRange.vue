<template>
    <div class="dp-datetime" tabindex="4" @blur="hideDatetime">
        <div class="datetime-panel">
            <div class="datetime-header">
                <span @click="prevYear" v-if="firstPanel"><span class="iconfont icon-drop-left">&lt;&lt;</span></span>
                <span @click="prevMonth" v-if="firstPanel"><span class="iconfont icon-drop-left">&lt;</span></span>
                <div class="time-wrap">
                    <div class="time-selector" @click="toggleYears">
                        {{data.year}}年
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
                        {{data.month+1}}月
                        <!-- <span class="iconfont icon-drop-up" v-show="showMonths"></span>
                        <span class="iconfont icon-drop-down" v-show="!showMonths"></span> -->
                    </div>
                    <!-- <div class="time-panel" v-show="showMonths">
                        <li v-for="month in months" @click="chooseMonth(month)">{{month}}月</li>
                    </div> -->
                </div>
                <span @click="nextYear"  v-if="!firstPanel"><span class="iconfont icon-drop-right">&gt;&gt;</span></span>
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
                <tr v-for="week in data.weeks">
                    <td v-for="date in week"><span
                            :class="{'today':date.date==today&&currentMonth==data.month&&currentYear==data.year,
                                      'choosed':date.choosed,
                                      'in-range': (date.inRange || date.inHoverRange) && !date.choosed,
                                      'prev-date': date.prev,
                                      'next-date': date.next}"
                            @click="chooseDay(date)"
                            @mouseenter="hoverDate(date)"
                            v-text="date.date"></span></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                // weeks: [],
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
          // weeks(){
          //   return this.data.weeks;
          // }
        },
        watch:{
          data(){
            // this.year = this.data.year;
            // this.month = this.data.month;
            // this.setMonth(this.data.year, this.data.month, true);
          }
        },
        mounted(){
          var dateTime = new Date(Date.now());
          this.currentYear = dateTime.getFullYear();
          this.currentMonth = dateTime.getMonth();
          this.today = dateTime.getDate();

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
                if (this.data.month-- <= 0) {
                    this.data.month = 11;
                    this.data.year--;
                }
                // this.setMonth(this.year, this.month);
                this.emitEvent();

            },
            prevYear(){
              this.data.year--;
              this.emitEvent();
            },
            nextMonth(){
                if (this.data.month++ >= 11) {
                    this.data.month = 0;
                    this.data.year++;
                }
                // this.setMonth(this.year, this.month);
                this.emitEvent();
            },
            nextYear(){
              this.data.year++;
              this.emitEvent();
            },
            isLeapYear(year) {
                return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)
            },


            chooseDay(date){
                if (!date) {
                    return
                }
                this.$emit('selected-date', date);
            },
            hoverDate(date){
              if (!date) {
                  return
              }
              this.$emit('event-hover-date', date);
            },
            //派发事件
            emitEvent(){
              this.$emit('event-date-change', {
                firstPanel: this.firstPanel,
                year: this.data.year,
                month: this.data.month
              });
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
        border-radius: 100%;
    }

    .choosed {
        background: #3cbaff;
        /*border-radius: 100%;*/
        color: #fff !important;
    }
    .in-range{
      background: #3cba00;
      color: #fff !important;
    }

    .dp-datetime td span:hover{
      background-color: #ccc;
      color: #000;
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
