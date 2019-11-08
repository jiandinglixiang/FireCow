// import Vue from 'vue'
import http from '../tool/http'
import { ShoppingCar, token } from '../tool/storeManage'
import router from '../router'
import { Toast } from 'mint-ui'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SET_LOGOUT = 'SET_LOGOUT'
export const REGISTER = 'REGISTER'
export const SET_USER_TOKEN = 'SET_USER_TOKEN'
export const GET_USER_INFO = 'GET_USER_INFO'
export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_ENTERPRISE_STATUS = 'SET_ENTERPRISE_STATUS'
export const GET_COMPANY_INFO = 'GET_COMPANY_INFO'
export const SET_COMPANY_INFO = 'SET_COMPANY_INFO'
export const GET_VERIFICATION_CODE = 'GET_VERIFICATION_CODE'
export const BIND_MOBILE = 'BIND_MOBILE'
export const SET_MOBILE = 'SET_MOBILE'
export const GET_CHECK_USER = 'GET_CHECK_USER'
export const RESET_PASSWORD = 'RESET_PASSWORD'
export const GET_HAVE_SERVICE = 'GET_HAVE_SERVICE'
export const SET_HAVE_SERVICE = 'SET_HAVE_SERVICE'
export const GET_WANT_SERVICE = 'GET_WANT_SERVICE'
export const SET_WANT_SERVICE = 'SET_WANT_SERVICE'
export const ADD_PURCHASE_INTENTION = 'ADD_PURCHASE_INTENTION'
export const ADD_ENTERPRISE_CERTIFICATION = 'ADD_ENTERPRISE_CERTIFICATION'

export const MineMutations = {
  [SET_USER_INFO] (state, params) {
    state.UserInfo = params
  },
  [SET_USER_TOKEN] (state, params) {
    token.Token = params
    const redirect = router.currentRoute.query.redirect || '/backCenter'
    let query = router.currentRoute.query
    delete query.redirect
    router.replace({ path: redirect, query: query })
  },
  [SET_LOGOUT] (state) {
    token.clearToken()
    router.replace({ name: 'index' })
    state.UserInfo = {}
    state.WantedList = []
    state.MyServerList = []
    state.CompanyInfo = {}
    state.EnterpriseStatus = 0
  },
  [SET_ENTERPRISE_STATUS] (state, params) {
    state.EnterpriseStatus = params
  },
  [SET_COMPANY_INFO] (state, params) {
    state.CompanyInfo = params
  },
  [SET_MOBILE] (state, params) {
    state.UserInfo.mobile = params
  },
  [SET_HAVE_SERVICE] (state, params) {
    state.MyServerList = params
  },
  [SET_WANT_SERVICE] (state, params) {
    state.WantedList = params
  }
}

export const MineActions = {
  [LOGIN] ({ commit }, params = {}) {
    // 登录
    http.postLogin(params).then(data => {
      if (data) {
        commit(SET_USER_TOKEN, data.token)
      }
    })
  },
  [LOGOUT] ({ commit }, params = {}) {
    // 退出
    http.postLogout().then(data => {
      commit(SET_LOGOUT, data)
    })
  },
  [REGISTER] ({ commit }, params = {}) {
    // 注册
    http.postRegister(params).then(data => {
      // Toast('注册成功！')
      commit(SET_USER_TOKEN, data.token)
    })
  },
  [GET_USER_INFO] ({ commit, state }, params = {}) {
    // 获取用户信息
    return http.getUserInfo().then(data => {
      if (data) {
        commit(SET_USER_INFO, data)
        const enterpriseStatus = data.enterprise ? data.enterprise.status : 0
        commit(SET_ENTERPRISE_STATUS, enterpriseStatus)
        if (JSON.stringify(data.enterprise) !== '{}' && data.enterprise.status === 1) {
          commit(SET_COMPANY_INFO, data.enterprise)
        }
      }
    })
  },
  [GET_VERIFICATION_CODE] ({ commit }, params = {}) {
    // 获取手机验证码
    http.getUserCode(params).then(data => {
      Toast('发送成功！')
    })
  },
  [BIND_MOBILE] ({ commit }, params = {}) {
    // 绑定手机号
    http.postBindMobile(params.param).then(data => {
      Toast('修改绑定手机成功！')
      commit(SET_MOBILE, params.param.mobile)
      params.func() // 显示结果
    })
  },
  [GET_CHECK_USER] ({ commit }, params = {}) {
    // 修改密码-验证用户
    http.postCheckUser(params.param).then(data => {
      params.func() // 跳转下一步
    })
  },
  [RESET_PASSWORD] ({ commit }, params = {}) {
    // 修改密码
    http.postResetPassword(params.param).then(data => {
      Toast('密码修改成功，请重新登录！')
      params.func() // 显示结果
    })
  },
  [GET_COMPANY_INFO] ({ commit }, params = {}) {
    // 获取企业信息
    return http.getCompanyInfo().then(data => {
      if (data) {
        commit(SET_COMPANY_INFO, data)
      }
    })
  },
  [GET_HAVE_SERVICE] ({ commit }, params = {}) {
    // 获取用户已购买的服务
    return http.getUserHaveServiceList().then(data => {
      if (data && data.length) {
        commit(SET_HAVE_SERVICE, data)
      }
    })
  },
  [GET_WANT_SERVICE] ({ commit }, params = {}) {
    // 获取用户意愿购买的服务
    return http.getUserWantServiceList().then(data => {
      if (data && data.length) {
        commit(SET_WANT_SERVICE, data)
      }
    })
  },
  [ADD_PURCHASE_INTENTION] ({ commit }, params = {}) {
    // 提交购买意愿
    http.postAddPurchaseIntention(params).then(data => {
      // if (data) {
      Toast('提交成功！')
      ShoppingCar.clearHistory()
      router.replace({ name: 'purchaseIntention' })
      // }
    })
  },
  [ADD_ENTERPRISE_CERTIFICATION] ({ commit, state }, params = {}) {
    // 提交企业认证申请
    http.postAddEnterpriseCertification(params.param).then(data => {
      Toast('提交成功！')
      state.EnterpriseStatus = 2
      // params.func() // 显示正在审核中
    })
  }
}
