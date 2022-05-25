// 将提交的 form 表单的空字符的属性值变成 null && 移除对象中键值字符串两侧空白字符串
// 后端对 null 和 空字符的判断条件不一样的
export const convertBlankSpaceToNullForFormData = (obj:any) => {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return obj
  }
  const newObj:any = {}
  Object.keys(obj).forEach(key => {
    if (
      (typeof obj[key] === 'string' && obj[key].trim().length === 0) ||
      typeof obj[key] === 'undefined'
    ) {
      newObj[key] = null
    } else if (typeof obj[key] === 'string') {
      newObj[key] = obj[key].trim()
    } else {
      newObj[key] = obj[key]
    }
  })
  return newObj
}

export const showMessage = (status:number|string) : string => {
  let message:string = "";
  switch (status) {
      case 400:
          message = "请求错误(400)";
          break;
      case 401:
          message = "未授权，请重新登录(401)";
          break;
      case 403:
          message = "拒绝访问(403)";
          break;
      case 404:
          message = "请求出错(404)";
          break;
      case 408:
          message = "请求超时(408)";
          break;
      case 500:
          message = "服务器错误(500)";
          break;
      case 501:
          message = "服务未实现(501)";
          break;
      case 502:
          message = "网络错误(502)";
          break;
      case 503:
          message = "服务不可用(503)";
          break;
      case 504:
          message = "网络超时(504)";
          break;
      case 505:
          message = "HTTP版本不受支持(505)";
          break;
      default:
          message = `连接出错(${status})!`;
  }
  return `${message}，请检查网络或联系管理员！`;
};