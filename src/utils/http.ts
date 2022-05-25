import axios, { AxiosRequestConfig } from "axios"
import qs from 'qs'
import { ElMessage } from 'element-plus'
import { convertBlankSpaceToNullForFormData, showMessage } from './index'

interface RequestModel {
  url: string,
  method: string,
  data?: any
}
const request = axios.create({
  withCredentials: true,
  timeout: 1000,
  baseURL: ''
})

request.defaults.headers.post = {
  'Content-Type': 'application/x-www-from-urlencoded'
}
request.defaults.headers.common = {
  'Auth-Type': 'company-web',
  'X-Requested-With': 'XMLHttpRequest',
  token: 'sdfjlsdfjlsdjflsjflsfjlskd'
}

request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const method = config.method?.toUpperCase()
    if(method === 'POST' || method === 'PUT'){
      config.data = convertBlankSpaceToNullForFormData(config.data)
      switch (config.headers?.['Content-Type']) {
        case 'application/x-www-form-urlencoded':
          config.data = qs.stringify(config.data, { arrayFormat: 'indices' })
          break
        case 'application/json':
          config.data = JSON.stringify(config.data)
          break
      }
    }
    if (method === 'GET') {
      config.params = convertBlankSpaceToNullForFormData(config.params)
      config.paramsSerializer = function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat', skipNulls: true })
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (res) => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  (err) => {
    ElMessage.error(err)
    const { response } = err
    if (response) {
      showMessage(response.status)
    }
    ElMessage.error('请求失败')
    return true
  }
)

export default request