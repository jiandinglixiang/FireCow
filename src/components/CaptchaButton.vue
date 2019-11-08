<template>
  <div class="captcha-button">
    <button :class="{disabled: disabled}" @click="getCaptcha" class="btn-captcha">{{text}}</button>
  </div>
</template>

<script>//
import { Toast } from 'mint-ui'
import { mapActions } from 'vuex'
import { GET_VERIFICATION_CODE } from '@/vuex/Mine'
import Util from '@/tool/util'

const textArr = ['点击获取验证码', ')后可重发']
export default {
  name: 'captchaButton',
  data () {
    return {
      disabled: false,
      text: textArr[0]
    }
  },
  props: ['phone', 'type'],
  methods: {
    getCaptcha () {
      if (Util.isMobile(this.phone)) {
        let times = 60
        const countDown = () => {
          setTimeout(() => {
            times--
            this.text = '(' + times + textArr[1]
            if (times === 0) {
              this.disabled = false
              this.text = textArr[0]
            } else {
              countDown()
            }
          }, 1000)
        }
        if (!this.disabled) {
          this.disabled = true
          this.text = '(' + times + textArr[1]
          // 发送短信API
          this.getUserCode({
            mobile: this.phone,
            type: this.type
          })
          countDown()
        }
      } else {
        Toast('请输入正确的手机号!')
      }
    },
    ...mapActions({
      getUserCode: GET_VERIFICATION_CODE
    })
  }
}
</script>
<style lang="scss" scoped>
  .captcha-button button.btn-captcha {
    border: 1px solid #E83217;
    border-radius: 50px;
    color: #E83217;
    height: 32px;
    width: 110px;
    font-size: 12px;
  }

  .captcha-button button.disabled {
    border: 1px solid #d7d7d7;
    background-color: #d7d7d7;
    color: white;
  }
</style>
