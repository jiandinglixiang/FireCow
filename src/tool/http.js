// http服务
import Axios from 'axios'
import loading from './loading'
import { Toast } from 'mint-ui'
import { token } from './storeManage'
import router from '../router'

export function Provider (url) {
  // 每次返回新的对象

  const headers = { 'Content-Type': 'application/json; charset=utf-8' }
  let baseURL = url || '/business/'

  return {
    baseURL,
    headers,
    response (response) {
      // 响应
      return new Promise((resolve, reject) => {
        if (response.statusText === 'OK' && response.data && response.data.code === 1) {
          loading.hide()
          resolve(response.data.data)
        } else {
          // 有错误code
          this.codeError(response.data, reject)
        }
      })
    },

    error (error) {
      if (error.response) {
        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
      setTimeout(function () {
        loading.hide()
      }, 1000)
      return Promise.reject(error)
    },

    get (path = '', params = {}) {
      loading.show()
      const request = Axios({
        baseURL,
        url: path,
        method: 'get',
        timeout: 10000,
        params,
        headers
        // auth: this.auth
      })
      return request.then(response => this.response(response)).catch(this.error)
    },

    post (path = '', data = {}, params = {}) {
      loading.show()
      const request = Axios({
        baseURL,
        url: path,
        method: 'post',
        params,
        timeout: 10000,
        data,
        headers,
        transformRequest: [function (data) {
          // 对 data 进行任意转换处理
          if (Object.prototype.toString.call(data) === '[object FormData]') {
            return data
          }
          const formData = new FormData()
          for (let i in data) {
            data[i] !== undefined && data[i] !== '' && data[i] !== null && formData.append(i, data[i])
          }
          return formData
        }]
      })
      return request.then(response => this.response(response)).catch(this.error)
    },

    codeError (data, reject) {
      let error = {}
      switch (data.code * 1) {
        case 0:
          error = { data: data.data, code: 0, msg: data.msg || '未知错误' }
          if (data.msg.indexOf('重新登录') !== -1) {
            token.clearToken()
            setTimeout(function () {
              router.replace({ name: 'Login' })
            }, 1000)
          }
          break
        default:
          error = { data: data.data, code: -10000, msg: data.msg || '未知错误' }
      }
      Toast(error.msg)
      reject(new Error(JSON.stringify(error)))
    }
  }
}

// const Http = Provider()// 默认http实例
export const http = {
  getServiceList () {
    const Http = Provider()
    Http.headers['XX-Token'] = token.Token
    Http.headers['XX-Device-Type'] = 'web'
    return Http.get('index/getServiceList')
  },
  postLogin (data) {
    return Provider().post('user/login', data)
  },
  postLogout () {
    const Http = Provider()
    Http.headers['XX-Token'] = token.Token
    Http.headers['XX-Device-Type'] = 'web'
    return Http.post('user/logout')
  },
  getUserInfo () {
    const Http = Provider()
    Http.headers['XX-Token'] = token.Token
    Http.headers['XX-Device-Type'] = 'web'
    return Http.get('user/getUserInfo')
  },
  postRegister (data) {
    return Provider().post('user/register', data)
  },
  getUserCode (data) {
    return Provider().post('user/sendVerificationCode', data)
  },
  postCheckUser (data) {
    const Http = Provider()
    Http.headers['XX-Token'] = token.Token
    Http.headers['XX-Device-Type'] = 'web'
    return Http.post('user/checkUser', data)
  },
  postBindMobile (data) {
    const Http = Provider()
    Http.headers['XX-Token'] = token.Token
    Http.headers['XX-Device-Type'] = 'web'
    return Http.post('setting/bindMobile', data)
  },
  postResetPassword (data) {
    const Http = Provider()
    Http.headers['XX-Token'] = token.Token
    Http.headers['XX-Device-Type'] = 'web'
    return Http.post('user/resetPassWord', data)
  },
  getCompanyInfo () {
    const Http = Provider()
    Http.headers['XX-Token'] = token.Token
    Http.headers['XX-Device-Type'] = 'web'
    return Http.get('enterprise/getCompanyInfo')
  },
  getUserHaveServiceList () {
    const Http = Provider()
    Http.headers['XX-Token'] = token.Token
    Http.headers['XX-Device-Type'] = 'web'
    return Http.get('index/getUserHaveServiceList')
  },
  getUserWantServiceList () {
    const Http = Provider()
    Http.headers['XX-Token'] = token.Token
    Http.headers['XX-Device-Type'] = 'web'
    return Http.get('index/getUserWantServiceList')
  },
  postAddPurchaseIntention (data) {
    const Http = Provider()
    Http.headers['XX-Token'] = token.Token
    Http.headers['XX-Device-Type'] = 'web'
    return Http.post('index/addPurchaseIntention', data)
  },
  postAddEnterpriseCertification (data) {
    const Http = Provider()
    Http.headers['XX-Token'] = token.Token
    Http.headers['XX-Device-Type'] = 'web'
    return Http.post('enterprise/addEnterpriseCertification', data)
  }
}

export default http
