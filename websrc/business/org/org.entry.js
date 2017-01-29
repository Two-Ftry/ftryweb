/*
 * org.entry.js
 */
import Vue from 'vue';

require('common/css/normalize.css');
require('common/css/common');
require('assets/fonts/iconfont.css');

window.common = require('common/js/');

require('common/js/directive');

var App = Vue.extend(require('./components/App.vue'));
new App({}).$mount('#app');
