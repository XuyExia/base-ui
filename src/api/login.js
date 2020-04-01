import request from '@/utils/request'

export function loginByUsername (data) {
    return request({
        url: `/user/getList`,
        method: 'post',
        data: data
    })
}