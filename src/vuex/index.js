import Vue from 'vue'
import Vuex from 'vuex'
import { MineActions, MineMutations } from './Mine.js'
import { ServerActions, ServerMutations } from './Server.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mine: {
      state: {
        Device: { // 设备信息
          navInfo: { wx: false, ios: false, android: false },
          width: 100,
          height: 100
        },
        UserInfo: {}, // 用户基本信息
        EnterpriseStatus: 0, // 企业认证状态
        CompanyInfo: {}, // 企业认证信息
        MyServerList: [], // 我的服务
        WantedList: [] // 购买意愿
      },
      mutations: MineMutations,
      actions: MineActions
    },
    server: {
      state: {
        ServerList: [] // 服务列表
      },
      mutations: ServerMutations,
      actions: ServerActions
    }
  }
})
