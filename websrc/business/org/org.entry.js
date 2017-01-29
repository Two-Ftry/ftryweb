/*
 * org.entry.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

require('common/css/normalize.css');
require('common/css/common');
require('assets/fonts/iconfont.css');

window.common = require('common/js/');

require('common/js/directive');

//配置vue-router
Vue.use(VueRouter);

var routes = require('./router');
const router = new VueRouter({
  routes
});

var App = Vue.extend(require('./components/App.vue'));
new App({
  router
}).$mount('#app');
