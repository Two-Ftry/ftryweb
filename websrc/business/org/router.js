/**
 * @desc 路由配置
 */
 module.exports = [
   {
     path: '/',
     component: require('./components/content/Index')
   },
   {
     path: '/index',
     component: require('./components/content/Index')
   },
   {
     path: '/register',
     component: require('./components/content/Register')
   },
   {
     path: '/login',
     component: require('./components/content/Login')
   }
 ];
