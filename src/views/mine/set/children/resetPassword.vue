<template>
  <div id="resetPassword">
    <service-nav-head @show="showExit" v-bind:title="this.UserInfo.mobile"></service-nav-head>
    <button @click="$router.back(-1)" class="btn-back">返回</button>
    <div>
      <account-confirm @toNext="toNext" v-show="this.stepIndex === 1"></account-confirm>
      <reset-password-input :phone="this.phone" @showResult="showResult"
                            v-show="this.stepIndex === 2"></reset-password-input>
      <result-show :resultCode="resultCode" :step="stepIndex" v-show="this.stepIndex === 3"></result-show>
    </div>
    <exit-confirm @close="closeExit" v-show="this.exitDisplay"></exit-confirm>
  </div>
</template>

<script>//
import ServiceNavHead from '@/components/ServiceNavHead'
import ExitConfirm from '@/components/ExitConfirm.vue'
import AccountConfirm from '@/components/AccountConfirm.vue'
import ResetPasswordInput from '@/components/ResetPasswordInput.vue'
import ResultShow from '../../../../components/ResultShow'
import { mapActions, mapState } from 'vuex'
import { GET_USER_INFO } from '@/vuex/Mine'
import { token } from '@/tool/storeManage'

export default {
  name: 'resetPassword',
  data: () => {
    return {
      phone: '',
      stepIndex: 1,
      exitDisplay: false,
      resultCode: 0
    }
  },
  methods: {
    toNext (val) {
      this.phone = val
      this.stepIndex = 2
    },
    showResult (code) {
      this.stepIndex = 3
      this.resultCode = code
    },
    //      toLogin () {
    //        this.$router.push('login');
    //      },
    showExit () {
      this.exitDisplay = true
    },
    closeExit () {
      this.exitDisplay = false
    },
    ...mapActions({
      getUserInfo: GET_USER_INFO
    })
  },
  computed: {
    ...mapState({
      UserInfo: state => state.mine.UserInfo
    })
  },
  mounted () {
    if (token.Token && JSON.stringify(this.UserInfo) === '{}') {
      this.getUserInfo().catch((msg) => {
        const message = JSON.parse(msg.message)
        if (message.code === 10001) {
          this.$router.replace({ path: '/login' })
        }
      })
    }
  },
  components: {
    ResultShow, ResetPasswordInput, AccountConfirm, ExitConfirm, ServiceNavHead
  }
}
</script>
<style lang="scss" scoped>
  #resetPassword {
    width: 100%;
    height: 100%;
    max-width: 640px;
    margin: 0 auto;
    padding: 46px 0 0 0;

    .btn-back {
      height: 24px;
      line-height: 24px;
      font-size: 15px;
      margin: 15px 0 0 25px;
      padding: 0 0 0 30px;
      color: white;
      background-color: transparent;
      background-image: url("../../../../assets/personalCenter/ic_goback@2x.png");
      background-repeat: no-repeat;
      background-size: auto 95%;
      background-position: left top;
    }
  }
</style>
