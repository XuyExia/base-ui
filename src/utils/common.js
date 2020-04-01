// import Cookies from 'js-cookie'

const TokenKey = 'authCode'

// 从sessionStorage中获取token
const getToken = function getToken () {
    // return Cookies.get(TokenKey)
    return localStorage.getItem(TokenKey)
}

// 给sessionStorage设置token
const setToken = function setToken (token) {
    // return Cookies.set(TokenKey, token)
    return localStorage.setItem(TokenKey, token)
}

// 从sessionStorage移除token
const removeToken = function removeToken () {
    // return Cookies.remove(TokenKey)
    return localStorage.removeItem(TokenKey)
}
