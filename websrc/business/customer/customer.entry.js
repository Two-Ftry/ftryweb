/**
 * customer.entry.js
 */
require('./style.css');
require('../../assets/fonts/iconfont.css');
require('../../assets/fonts/iconfont.js');

let txt = 'welcome to webpack, it work well!!!还有热加载';


var app = document.getElementById('app');

app.outerHTML = require('./template');

$(function(){
  // $('img').click(function(){
  //   alert('jquery is in global~~')
  // });
});
