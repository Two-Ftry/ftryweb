/*
 * org.entry.js
 */
import Vue from 'vue';

require('common/css/normalize.css');
require('common/css/common');

var App = Vue.extend(require('./components/App.vue'));
new App({}).$mount('#app');
