/*
 * org.entry.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

require('common/css/normalize.css');
require('common/css/common');
require('assets/fonts/iconfont.css');

window.common = require('common/js/');
require('common/js/directive');

var EcCommon = require('ui/');

//配置vue-router
Vue.use(VueRouter);

var routes = require('./router');
const router = new VueRouter({
  routes
});

//配置全局组件
Vue.use(EcCommon);

//使用Sentry.js
Vue.config('https://9de95d9d46fe4eabb18c276836ec5d57@sentry.io/142240')
  .addPlugin(RavenVue, Vue)
  .install();
Vue.config.errorHandler = function(){
  //TODO
};
var App = Vue.extend(require('./components/App.vue'));
new App({
  router
}).$mount('#app');
