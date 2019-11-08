import http from '../tool/http'
import { ShoppingCar } from '../tool/storeManage'

export const GET_SERVER_LIST = 'GET_SERVER_LIST'
export const SET_SERVER_LIST = 'SET_SERVER_LIST'

export const ServerMutations = {
  [SET_SERVER_LIST] (state, params) {
    state.ServerList = params
    // 删除购物车中失效的服务
    const list = ShoppingCar.History
    if (list.length > 0) {
      $.each(list, function (n, val) {
        if (state.ServerList.findIndex(i => i.id === val.id) === -1) {
          const index = list.findIndex(j => j.id === val.id)
          list.splice(index, 1)
          ShoppingCar.History = list
        }
      })
    }
  }
}

export const ServerActions = {
  [GET_SERVER_LIST] ({ commit }) {
    return http.getServiceList().then(data => {
      if (data && data.length) {
        commit(SET_SERVER_LIST, data)
      }
    })
  }
}
