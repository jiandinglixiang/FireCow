<template>
  <div id="ResetPasswordInput">
    <div class="wrap">
      <h1 class="top"></h1>
      <div class="content">
        <div class="title">2、重置密码</div>
        <div class="input-group">
          <div>
            <i class="icon-code"></i><input @input="handleInputCaptcha" maxlength="6" placeholder="请输入验证码" type="text"
                                            v-model="captcha"/>
            <captcha-button :phone="phone" :type="1" class="btn-captcha"></captcha-button>
          </div>
          <div>
            <i class="icon-user"></i><input @input="handleInputPwd" maxlength="18" placeholder="请输入新的6-18位登录密码"
                                            type="password"
                                            v-model="password"/>
          </div>
          <button @click="nextStep" class="btn-nor" v-bind:class="{'available': password && captcha}"
                  v-bind:disabled="!password || !captcha">下一步
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>//
import { Toast } from 'mint-ui'
import CaptchaButton from './CaptchaButton'
import { mapActions } from 'vuex'
import { RESET_PASSWORD } from '../vuex/Mine'
import { token } from '../tool/storeManage'

export default {
  name: 'ResetPasswordInput',
  data: () => {
    return {
      captcha: '',
      password: ''
    }
  },
  props: ['phone'],
  methods: {
    handleInputCaptcha (e) {
      this.captcha = e.target.value.replace(/[\W]/g, '')
    },
    handleInputPwd (e) {
      this.password = e.target.value.replace(/\s+/g, '')
      // eslint-disable-next-line no-control-regex
      this.password = e.target.value.replace(/[^\x00-\xff]/g, '')
    },
    nextStep () {
      if (this.captcha && this.password) {
        if (this.captcha.length < 6) {
          Toast('请输入6位验证码!')
          return
        }
        if (this.password.length < 6) {
          Toast('请输入6-18位密码!')
          return
        }

        this.resetPwd({
          param: {
            mobile: this.phone,
            captcha: this.captcha,
            password: this.password
          },
          func: () => {
            this.$emit('showResult', 1)
            token.clearToken()
            this.$router.push('login')
          }
        })
      }
    },
    ...mapActions({
      resetPwd: RESET_PASSWORD
    })
  },
  components: {
    CaptchaButton
  }
}
</script>
<style lang="scss" scoped>
  div#ResetPasswordInput {
    margin-top: 20%;
    padding: 0;

    > div.wrap {
      width: 94%;
      margin: 0 auto;
      padding: 0 0;
      text-align: center;
      background-color: #1F2025;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);

      > h1.top {
        position: relative;
        z-index: 2;
        background-size: 100% auto;
        background-repeat: no-repeat;
        height: 17px;
      }

      > div.content {
        padding: 0 6% 30px 6%;

        > div.title {
          text-align: left;
          font-size: 18px;
          color: white;
          line-height: 26px;
          padding: 10px 0;
        }

        > div.input-group {
          text-align: left;
          margin-top: 20px;

          > div {
            position: relative;
            margin-bottom: 10%;

            > .icon-user, .icon-code {
              float: left;
              margin: 8px 4% 0 0;
            }

            > input {
              width: calc(97% - 37px);
              height: 38px;
              padding-left: 4%;
              line-height: 38px;
              font-size: 14px;
              border-bottom: 1px solid #43454C;
            }

            .btn-captcha {
              position: absolute;
              right: 0;
              top: 0;
              margin-top: -0.5%;
              margin-right: 3.5%;
            }
          }

          .btn-nor {
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 15px;
            border-radius: 8px;
          }
        }
      }
    }
  }
</style>
