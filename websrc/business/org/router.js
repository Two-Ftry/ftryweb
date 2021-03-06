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
   },
   {
     path: '/org',
     component: require('./components/content/org/OrgSetting')
   },
   {
     path: '/role',
     component: require('./components/content/role/RoleSetting')
   },
   {
     path: '/orgList',
     component: require('./components/content/org/OrgList')
   }
 ];
