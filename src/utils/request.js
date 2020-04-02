import axios from 'axios'
/* import {
    Message,
    MessageBox
} from 'element-ui' */
// import router from '@/router'
// import store from '@/store'
import {
  //  getToken,
  setToken
} from '@/utils/common'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 1000 * 60 * 10, // request timeout
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
    'If-Modified-Since': 'Thu, 01 Jun 1970 00:00:00 GMT', // 避免 IE10 返回 304
    'shouldIntercept': true, // 若为 false,则不拦截在自己的请求里处理
    'authCode': ''
  },
  withCredentials: true
})
// request interceptor
service.interceptors.request.use(
  config => {
    let token = localStorage.getItem('authCode')
    // let token = getToken();
    config.headers['authCode'] = token
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const authCode = response.request.headers['authCode']
    setToken(authCode)
    if (response.request.responseType === 'blob') {
      console.log(response)
      return response
    } else {
      const res = response.data
      console.log(res)
      // eslint-disable-next-line prefer-promise-reject-errors
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
      err.message = '网络请求超时'
    }
    return Promise.reject(err)
  }
)

export default service
