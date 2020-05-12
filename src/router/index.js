import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routerlists = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login', // 登录
    name: 'login',
    component: () => import('@/pages/login/login')
  },
  {
    path: '/homepage', // 登录
    component: () => import('@/pages/homepage/homepage'),
    children: [
      {
        path: 'main',
        name: '首页',
        component: () => import('@/pages/main'),
      },
      {
        path: 'organization',
        name: '组织管理',
        component: () => import('@/pages/organization/userinfo/userinfoList'),
        children: [ {
          path: 'userinfo/userinfoList',
          name: '用户列表',
          component: () => import('@/pages/organization/userinfo/userinfoList'),
        },]
      },
      {
        path: 'page2',
        name: '页面2',
        component: () => import('@/pages/page2'),
      },
      {
        path: 'page3',
        name: '页面3',
        component: () => import('@/pages/page3'),
      },
      {
        path: 'page4',
        name: '页面4',
        component: () => import('@/pages/page4'),
      }
    ]
  }


]
// 路由初始化
export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  mode: 'history',
  routes: routerlists
})
