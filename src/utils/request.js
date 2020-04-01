import axios from 'axios'
import {
    Message,
    MessageBox
} from 'element-ui'
// import router from '@/router'
import store from '@/store'
import {
    getToken,
    removeToken
} from '@/utils/common'

// create an axios instance
const service = axios.create({
    baseURL: process.env.BASE_API, // api 的 base_url
    timeout: 1000 * 60 * 10, // request timeout
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
        'If-Modified-Since': 'Thu, 01 Jun 1970 00:00:00 GMT', // 避免 IE10 返回 304
        'shouldIntercept': true // 若为 false,则不拦截在自己的请求里处理
    },
    withCredentials: true
})
// request interceptor
service.interceptors.request.use(
    config => {
         config.headers['authCode'] = getToken();
        return config
    },
    error => {
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * 下面的注释为通过在response里，自定义code来标示请求状态
     * 当code返回如下情况则说明权限有问题，登出并返回到登录页
     * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
     * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
     */
    response => {
        if (response.request.responseType === 'blob') {
            console.log(response)
            return response
        } else {
            const res = response.data
            // console.log(res)
            if (res.code && res.code !== 0) {
                // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
                if (res.code === 400) {
                    // 请自行在引入 MessageBox
                    // import { Message, MessageBox } from 'element-ui'
                    MessageBox.confirm('登录超时，请重新登录！', '登录超时', {
                        confirmButtonText: '重新登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        store.state.user.token = ''
                        store.state.user.user = {}
                        removeToken()
                        console.log(store)
                        // router.push({
                        //   path: '/login'
                        // })
                        window.location.hash = '/login'
                        location.reload() // 为了重新实例化vue-router对象 避免bug
                    })
                }
                console.log(res)
                // eslint-disable-next-line prefer-promise-reject-errors
            }
            return response.data
        }
    },
    err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '请求错误'
                    break
                case 401:
                    err.message = '未授权，请登录'
                    break
                case 403:
                    err.message = null
                    MessageBox.confirm('您没有访问权限！', '警告', {
                        confirmButtonText: '重新登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        store.state.user.token = ''
                        store.state.user.user = {}
                        removeToken()
                        console.log(store)
                        // router.push({
                        //   path: '/login'
                        // })
                        // let redirectUrl = window.location.hash.slice(1)
                        // window.location.hash = `/login?redirect=${redirectUrl}`
                        location.reload() // 为了重新实例化vue-router对象 避免bug
                    })
                    break
                case 404:
                    err.message = `请求地址出错: ${err.response.config.url}`
                    break
                case 408:
                    err.message = '请求超时'
                    break
                case 500:
                    err.message = '服务器内部错误'
                    break
                case 501:
                    err.message = '服务未实现'
                    break
                case 502:
                    err.message = '网关错误'
                    break
                case 503:
                    err.message = '服务不可用'
                    break
                case 504:
                    err.message = '网关超时'
                    break
                case 505:
                    err.message = 'HTTP版本不受支持'
                    break
                default:
            }
        }
        console.log('err' + err) // for debug
        if (err.code === 'ECONNABORTED') {
            err.message = '网络请求超时'
        }
        if (err.message) {
            Message({
                showClose: true,
                message: err.message,
                type: 'error'
            })
        }
        return Promise.reject(err)
    }
)

export default service
