// import Cookies from 'js-cookie'
import ProjectParam from '@/api/project_params'
// 从sessionStorage中获取token
const getToken = function getToken () {
  // return Cookies.get(TokenKey)
  return localStorage.getItem(ProjectParam.AUTH_NAME)
}

// 给sessionStorage设置token
const setToken = function setToken (token) {
  // return Cookies.set(TokenKey, token)
  return localStorage.setItem(ProjectParam.AUTH_NAME, token)
}

// 从sessionStorage移除token
const removeToken = function removeToken () {
  // return Cookies.remove(TokenKey)
  return localStorage.removeItem(ProjectParam.AUTH_NAME)
}
export {
  getToken,
  setToken,
  removeToken

}
