<template>
  <div id="MobileConfirm">
    <div class="wrap">
      <h1 class="top"></h1>
      <div class="content">
        <div class="title">1、手机验证</div>
        <div class="input-group">
          <div>
            <i class="icon-user"></i><input @input="handleInputNum" maxlength="11" placeholder="请输入新的手机号" type="text"
                                            v-model="phone"/>
          </div>
          <div>
            <i class="icon-code"></i><input @input="handleInputCaptcha" maxlength="6" placeholder="请输入验证码" type="text"
                                            v-model="captcha"/>
            <captcha-button :phone="phone" :type="2" class="btn-captcha"></captcha-button>
          </div>
          <button @click="nextStep" class="btn-nor" v-bind:class="{'available': phone && captcha}"
                  v-bind:disabled="!phone || !captcha">下一步
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>//
import { Toast } from 'mint-ui'
import CaptchaButton from './CaptchaButton'
import Util from '@/tool/util'
import { mapActions } from 'vuex'
import { BIND_MOBILE } from '@/vuex/Mine'

export default {
  name: 'MobileConfirm',
  data: () => {
    return {
      phone: '',
      captcha: ''
    }
  },
  methods: {
    nextStep () {
      if (this.captcha && this.phone) {
        if (!Util.isMobile(this.phone)) {
          Toast({
            message: '请输入正确的手机号!',
            duration: 2000
          })
          return
        }
        if (this.captcha.length < 6) {
          Toast({
            message: '请输入6位验证码!',
            duration: 2000
          })
          return
        }
        var data = {
          mobile: this.phone,
          captcha: this.captcha
        }

        this.bindMobile({
          param: data,
          func: () => {
            this.$emit('showResult', 1)
            this.$router.replace('backCenter')
          }
        })
      }
    },
    handleInputCaptcha (e) {
      this.captcha = e.target.value.replace(/[\W]/g, '')
    },
    handleInputNum (e) {
      this.phone = e.target.value.replace(/[^\d]/g, '')
    },
    ...mapActions({
      bindMobile: BIND_MOBILE
    })
  },
  components: {
    CaptchaButton
  }
}
</script>
<style lang="scss" scoped>
  div#MobileConfirm {
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
          margin-bottom: 20px;
        }

        > div.input-group {
          text-align: left;
          overflow: hidden;

          > div {
            position: relative;
            margin-bottom: 10%;

            > .icon-user, .icon-code {
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
