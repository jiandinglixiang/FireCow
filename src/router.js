import Vue from 'vue'
import Router from 'vue-router'
import loading from './tool/loading'
import { token } from './tool/storeManage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/Index.vue').default,
      children: [
        {
          path: '',
          name: 'index',
          component: require('@/views/home/index2.vue').default
        }
        //   path: '/login', // 登录
        //   name: 'Login',
        //   component: () => import(/* webpackChunkName:"login" */'./views/mine/login.vue')
        // }, {
        //   path: '/register', // 注册
        //   name: 'register',
        //   component: () => import(/* webpackChunkName:"register" */'./views/mine/register.vue')
        // }
        //   path: 'aboutUs',
        //   component: require('@/views/home/aboutUs.vue').default
        // }, {
        //   path: 'product',
        //   component: require('@/views/home/product.vue').default
        // children: [
        //   {
        //     path: '',
        //     name: 'ESportGames',
        //     component: () => import(/* webpackChunkName:"ESportGames" */'./views/home/children/ESportGames.vue'),
        //     meta: {
        //       active: '/product'
        //     }
        //   },
        //   {
        //     path: '/dataProducts',
        //     name: 'dataProducts',
        //     component: () => import(/* webpackChunkName:"dataProducts" */'./views/home/children/dataProducts.vue'),
        //     meta: {
        //       active: '/product'
        //     }
        //   }
        // ]
        // }, {
        //   path: 'service',
        //   component: require('@/views/home/service.vue').default
        // }, {
        //   path: 'advantage',
        //   component: require('@/views/home/advantage.vue').default
        // }, {
        //   path: 'connectUs',
        //   component: require('@/views/home/connectUs.vue').default
        // },
      ]
    },
    {
      path: '/login', // 登录
      name: 'Login',
      component: () => import(/* webpackChunkName:"login" */'./views/mine/login.vue')
    }, {
      path: '/register', // 注册
      name: 'register',
      component: () => import(/* webpackChunkName:"register" */'./views/mine/register.vue')
    },
    {
      path: '/backCenter', // 服务平台
      meta: { requiresAuth: true },
      name: 'backCenter',
      component: () => import(/* webpackChunkName:"backCenter" */'./views/backCenter/backCenter.vue'),

      children: [
        {
          path: '', // 服务中心
          name: 'serviceCenter',
          component: () => import(/* webpackChunkName:"serviceCenter" */'./views/service/serviceCenter.vue'),
          meta: {
            active: '/backCenter',
            requiresAuth: true
          },
          children: [
            {
              path: '', // 服务列表
              name: 'serviceList',
              component: () => import(/* webpackChunkName:"serviceList" */'./views/service/serviceList.vue'),
              meta: {
                active: '/backCenter',
                requiresAuth: true
              }
            },
            {
              path: '/myService', // 我的服务
              name: 'myService',
              component: () => import(/* webpackChunkName:"myService" */'./views/service/myService.vue'),
              meta: {
                active: '/backCenter',
                requiresAuth: true
              }
            },
            {
              path: '/purchaseIntention', // 购买意愿
              name: 'purchaseIntention',
              component: () => import(/* webpackChunkName:"purchaseIntention" */'./views/service/purchaseIntention.vue'),
              meta: {
                active: '/backCenter',
                requiresAuth: true
              }
            }
          ]
        },
        {
          path: '/personalCenter', // 个人中心
          name: 'personalCenter',
          component: () => import(/* webpackChunkName:"personalCenter" */'./views/mine/personalCenter.vue'),
          meta: {
            active: '/personalCenter',
            requiresAuth: true
          },
          children: [
            {
              path: '', // 账号设置
              name: 'set',
              component: () => import(/* webpackChunkName:"set" */'./views/mine/set/set.vue'),
              meta: {
                active: '/personalCenter',
                requiresAuth: true
              }
            },
            {
              path: '/companyAttestation', // 企业认证
              name: 'companyAttestation',
              component: () => import(/* webpackChunkName:"companyAttestation" */'./views/mine/companyAttestation/companyAttestation.vue'),
              meta: {
                active: '/personalCenter',
                requiresAuth: true
              }
            }
          ]
        },
        {
          path: '/shoppingCart', // 购物车
          name: 'shoppingCart',
          component: () => import(/* webpackChunkName:"shoppingCart" */'./views/service/shoppingCart.vue'),
          meta: {
            active: '/backCenter',
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '/resetPassword', // 重置密码
      name: 'resetPassword',
      component: () => import(/* webpackChunkName:"resetPassword" */'./views/mine/set/children/resetPassword.vue')
    },
    {
      path: '/bindPhone', // 绑定手机号
      name: 'bindPhone',
      component: () => import(/* webpackChunkName:"bindPhone" */'./views/mine/set/children/bindPhone.vue')
    }
  ]
})

router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth && !token.Token) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
  // next()
})
router.afterEach(function (to, from) {
  loading.hide()
})

export default router
