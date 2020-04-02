import Vue from 'vue';
import App from './App.vue';
//import store from './store'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from '@/api';
import Router from 'vue-router';

Vue.prototype.$api = api;
Vue.config.productionTip = false
Vue.use(ElementUI)


//在路由跳转的时候同一个路由多次添加是不被允许的
//重写路由的push方法

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}


//在路由跳转之前判断，除了首页以外，其他页面必须登录才能访问,异步问题
router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/login' || to.path === '/activate' || to.path === '/register') {
    next();
  } else {
/* axios.get("/user/isLogin")
        .then(response => {
          console.log(response.data);
          let data = response.data;
          if (data.status === global.responseCode.OK && data.result === true) {
            console.log("登录成功");
            next();
          } else {
            next('/login?redirect=' + to.path);
          }
        });*/
  }
});



new Vue({
  el: '#app',
  router,
 // store,
  render: h => h(App),
}).$mount('#app')
