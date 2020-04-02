import request from '@/utils/request'
import {baseURL} from '@/api/project_name'
const dataManager = baseURL.dataManager
export function loginByUsername (data) {
    return request({
        url: dataManager+`/user/getList`,
        method: 'post',
        data: data
    })
}



export default {
    loginByUsername
}
