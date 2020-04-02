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
        name: 'Login',
        component: () => import('@/pages/login/login')
    }



]
// 路由初始化
export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: routerlists
})
