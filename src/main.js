import Vue from 'vue'
import App from './App.vue'
import '@babel/polyfill'
import router from './router'
import store from './vuex/index'
import './assets/css/init.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
