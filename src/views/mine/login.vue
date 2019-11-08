<template>
  <div id="login">
    <div class="black-bg">
      <div class="form-wrap">
        <div class="content">
          <img class="logo" src="../../assets/firebull@2x.png"/>
          <div class="title">登录</div>
          <button @click="$router.back(-1)" class="btn-back">返回</button>
          <div class="input-group">
            <div>
              <i class="icon-user"></i><input @input="handleInputNum" maxlength="11" placeholder="请输入您的手机号" type="text"
                                              v-model="phone"/>
            </div>
            <div>
              <i class="icon-pwd"></i><input :type="seeStatus ? 'text' : 'password'" @input="handleInputPwd"
                                             maxlength="18"
                                             placeholder="请输入6-18位登录密码" v-model="password"/>
              <button @click="switchStatus" class="btn-see" v-bind:class="{'available': seeStatus}"></button>
            </div>
            <button @click="doRegister" class="btn-nor" v-bind:class="{'available': phone && password}"
                    v-bind:disabled="!phone || !password">登&emsp;录
            </button>
          </div>
          <div class="tip-wrap">
            <router-link style="float: left;color: white;" to="/resetPassword">忘记密码</router-link>
            没有账号？
            <router-link replace to="/register">请注册</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>//
import { Toast } from 'mint-ui'
import Util from '@/tool/util'
import { mapActions } from 'vuex'
import { LOGIN } from '@/vuex/Mine'

export default {
  name: 'login',
  data: () => {
    return {
      phone: '',
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
    handleInputPwd (e) {
      this.password = e.target.value.replace(/\s+/g, '')
      // eslint-disable-next-line no-control-regex
      this.password = e.target.value.replace(/[^\x00-\xff]/g, '')
    },
    doRegister () {
      if (this.phone && this.password) {
        if (!Util.isMobile(this.phone)) {
          Toast('请输入正确的手机号!')
          return
        }
        if (!this.password || this.password.length < 6) {
          Toast('请输入6-18位密码！')
          return
        }
        this.login({
          mobile: this.phone,
          password: this.password,
          deviceType: 'web'
        })
      }
    },
    ...mapActions({
      login: LOGIN
    })
  }
}
</script>
<style lang="scss" scoped>
  #login {
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
      height: 100%;

      > div.form-wrap {
        position: absolute;
        left: 0;
        top: 0;
        width: 90%;
        height: 92.5%;
        margin-left: 5%;
        margin-top: 5%;
        text-align: center;

        > div.content {
          padding: 0 6% 30px 6%;

          > button.btn-back {
            position: absolute;
            top: 0;
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

              > .icon-user, .icon-pwd {
                float: left;
                margin: 8px 4% 0 0;
              }

              > input {
                width: calc(97% - 37px);
                padding-left: 4%;
                font-size: 14px;
                border-bottom: 1px solid #43454C;
                border-radius: 0;
              }

              .btn-see {
                position: absolute;
                right: 0;
                top: 0;
                width: 24px;
                height: 22px;
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
