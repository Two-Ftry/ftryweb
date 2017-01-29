/*
 * org.entry.js
 */
import Vue from 'vue';

require('common/css/normalize.css');
require('common/css/common');
require('assets/fonts/iconfont.css');

window.EventUtil = require('common/js/EventUtil');

var App = Vue.extend(require('./components/App.vue'));
new App({}).$mount('#app');
