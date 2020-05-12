import request from '@/utils/request'
import ProjectParam from '@/api/project_params'
export function loginByUsername (data) {
    return request({
        url: `/gateway/login`,
        method: ProjectParam.REQ_POST,
        data: data
    })
}



export default {
    loginByUsername
}
