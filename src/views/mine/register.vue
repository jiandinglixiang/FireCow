<template>
  <div id="register">
    <div class="black-bg">
      <div class="form-wrap">
        <div class="content">
          <button @click="$router.back(-1)" class="btn-back">返回</button>
          <img class="logo" src="../../assets/firebull@2x.png"/>
          <div class="title">注册</div>
          <div class="input-group">
            <div>
              <i class="icon-user"></i><input @input="handleInputNum" maxlength="11" placeholder="请输入您的手机号" type="text"
                                              v-model="phone"/>
            </div>
            <div>
              <i class="icon-pwd"></i><input :type="seeStatus ? 'text' : 'password'" @input="handleInputPwd"
                                             maxlength="18"
                                             placeholder="请输入6-18位登录密码，不含空格" v-model="password"/>
              <button @click="switchStatus" class="btn-see" v-bind:class="{'available': seeStatus}"></button>
            </div>
            <div>
              <i class="icon-code"></i><input @input="handleInputCaptcha" maxlength="6" placeholder="请输入验证码" type="text"
                                              v-model="captcha"/>
              <captcha-button :phone="phone" :type="0" class="btn-captcha"></captcha-button>
            </div>
            <button @click="register" class="btn-nor" v-bind:class="{'available': phone && captcha && password}"
                    v-bind:disabled="!phone || !captcha || !password">注册
            </button>
          </div>
          <div class="tip-wrap">已有账号？
            <router-link replace to="/login">去登陆</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>//
import { Toast } from 'mint-ui'
import CaptchaButton from '@/components/CaptchaButton'
import Util from '@/tool/util'
import { mapActions } from 'vuex'
import { REGISTER } from '@/vuex/Mine'

export default {
  name: 'register',
  data: () => {
    return {
      phone: '',
      captcha: '',
      password: '',
      seeStatus: false
    }
  },
  methods: {
    switchStatus () {
      this.seeStatus = !this.seeStatus
    },
    handleInputNum (e) {
      this.phone = e.target.value.replace(/[^\d]/g, '')
    },
    handleInputCaptcha (e) {
      this.captcha = e.target.value.replace(/[\W]/g, '')
    },
    handleInputPwd (e) {
      this.password = e.target.value.replace(/\s+/g, '')
      // eslint-disable-next-line no-control-regex
      this.password = e.target.value.replace(/[^\x00-\xff]/g, '')
    },
    register () {
      if (this.captcha && this.phone && this.password) {
        if (!Util.isMobile(this.phone)) {
          Toast('请输入正确的手机号!')
          return
        }
        if (this.captcha.length < 6) {
          Toast('请输入6位验证码!')
          return
        }
        if (this.password.length < 6) {
          Toast('请输入6-18位密码!')
          return
        }
        this.doRegister({
          mobile: this.phone,
          captcha: this.captcha,
          password: this.password
        })
      }
    },
    ...mapActions({
      doRegister: REGISTER
    })
  },
  components: {
    CaptchaButton
  }
}
</script>
<style lang="scss" scoped>
  #register {
    position: absolute;
    /*left: 0; */
    top: 0;
    width: 100%;
    max-width: 640px;
    min-height: 100%;
    background-image: url("../../assets/login_bg@3x.jpg");
    background-size: cover;
    background-position: center center;

    > div.black-bg {
      position: absolute;
      width: 100%;
      min-height: 100%;
      padding-top: 5%;

      > div.form-wrap {
        position: absolute;
        left: 0;
        width: 90%;
        min-height: 92.5%;
        margin-left: 5%;
        text-align: center;

        > div.content {
          position: relative;
          padding: 0 6% 30px 6%;

          > button.btn-back {
            position: absolute;
            left: 0;
            margin: 10px 0 0 3%;
            height: 24px;
            line-height: 24px;
            font-size: 15px;
            padding: 0 0 0 28px;
            color: white;
            background-color: transparent;
            background-image: url("../../assets/personalCenter/ic_goback@2x.png");
            background-repeat: no-repeat;
            background-size: auto 95%;
            background-position: left top;
          }

          > img.logo {
            padding-top: 25%;
            width: 19%;
            max-width: 70px;
          }

          > div.title {
            text-align: center;
            font-size: 18px;
            color: white;
            padding: 5% 0 8% 0;
            margin-bottom: 20px;
          }

          > div.input-group {
            text-align: left;
            overflow: hidden;

            > div {
              position: relative;
              margin-bottom: 20%;

              > .icon-user, .icon-code, .icon-pwd {
                float: left;
                margin: 8px 4% 0 0;
              }

              > input {
                width: calc(97% - 37px);
                padding-left: 4%;
                font-size: 14px;
                border-bottom: 1px solid #43454C;
              }

              .btn-captcha {
                position: absolute;
                right: 0;
                top: 0;
                margin: -0.5% 3.5% 0 0;
              }

              .btn-see {
                position: absolute;
                right: 0;
                top: 0;
                margin: 2% 5% 0 0;
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

          .tip-wrap {
            padding-top: 5%;
            text-align: right;
            color: white;
            font-size: 12px;

            > a {
              color: #E83217;
              padding-right: 4%;
            }
          }
        }
      }
    }
  }
</style>
