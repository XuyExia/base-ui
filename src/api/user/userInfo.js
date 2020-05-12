import request from '@/utils/request'
import ProjectParam from '@/api/project_params'
export function getCurrentUser () {
  return request({
    url: `/user/getCurrentUser`,
    method: ProjectParam.REQ_GET,
    data: null
  })
}
export default {
  getCurrentUser
}
