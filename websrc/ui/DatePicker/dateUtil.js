/**
 * @desc 日期工具类
 */

var dateUtil = {};

dateUtil.isLeapYear = function(year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)
};

dateUtil.calculateDays = function(year, month) {
      var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      var days = months[month]
      if (1 == month && dateUtil.isLeapYear(year)) {
          days = 29
      }
      return days
  };

module.exports = dateUtil;
