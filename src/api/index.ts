import request from '../utils/http'

export function login(data: any) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
