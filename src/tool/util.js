/* 格式化 时间戳 */
export function formatDate (timestamp) {
  // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  timestamp = timestamp.toString().length === 10 ? timestamp * 1000 : timestamp
  let date = new Date(timestamp)
  let y = date.getFullYear()
  let MM = date.getMonth() + 1
  MM = MM < 10 ? ('0' + MM) : MM
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  let h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  let m = date.getMinutes()
  m = m < 10 ? ('0' + m) : m
  // let s = date.getSeconds();
  // s = s < 10 ? ('0' + s) : s;
  return y + '年' + MM + '月' + d + '日 ' + h + ':' + m
}

const iFPhone = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)

export default {
  isMobile (mobile) {
    return /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(16[0-9]{1})|(19[0-9]{1}))+\d{8})$/.test(mobile)
  },
  passwordValid (value) {
    return (/^(?!.*[\s])/.test(value) && /^.{6,18}$/.test(value))
  },
  smsValid (value) {
    return /^[A-Za-z0-9]{6}$/.test(value)
  },
  isQQ (qq) {
    return /^([1-9][0-9]{4})|([0-9]{6,10})/.test(qq)
  },
  iFPhone
}
