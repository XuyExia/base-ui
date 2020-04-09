// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from '@/api';
//import Router from 'vue-router';
import ProjectParam from '@/api/project_params'
Vue.prototype.$api = api;
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.ProjectParam = ProjectParam;

//在路由跳转的时候同一个路由多次添加是不被允许的
//重写路由的push方法
/*
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}*/


//在路由跳转之前判断，除了首页以外，其他页面必须登录才能访问,异步问题
router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/login' || to.path === '/activate' || to.path === '/register') {
    next();
  } else {
    next();
  }
});



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
