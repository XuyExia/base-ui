import request from '@/utils/request'
import {baseURL} from '@/api/project_params'
const dataManager = baseURL.dataManager
export function loginByUsername (data) {
    return request({
        url: dataManager+`/gateway/login`,
        method: 'post',
        data: data
    })
}



export default {
    loginByUsername
}
