<template>
  <div id="AccountConfirm">
    <div class="wrap">
      <h1 class="top"></h1>
      <div class="content">
        <div class="title">1、确认账号</div>
        <div class="input-group">
          <div>
            <i class="icon-user"></i><input @input="handleInputNum" maxlength="11" placeholder="请输入您的登录手机号" type="text"
                                            v-model="phone"/>
          </div>
          <button @click="nextStep" class="btn-nor" v-bind:class="{'available': phone}" v-bind:disabled="!phone">下一步
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>//
import { Toast } from 'mint-ui'
import Util from '@/tool/util'
import { mapActions } from 'vuex'
import { GET_CHECK_USER } from '../vuex/Mine'

export default {
  name: 'AccountConfirm',
  data: () => {
    return {
      phone: ''
    }
  },
  methods: {
    nextStep () {
      if (!Util.isMobile(this.phone)) {
        Toast('请输入正确的手机号!')
      } else {
        this.checkUser({
          param: { mobile: this.phone },
          func: () => {
            this.$emit('toNext', this.phone)
          }
        })
      }
    },
    handleInputNum (e) {
      this.phone = e.target.value.replace(/[^\d]/g, '')
    },
    ...mapActions({
      checkUser: GET_CHECK_USER
    })
  }
}
</script>
<style lang="scss" scoped>
  div#AccountConfirm {
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
        padding: 0 20px 30px 20px;

        > div.title {
          text-align: left;
          font-size: 18px;
          color: white;
          line-height: 26px;
          padding: 10px 0;
          margin-bottom: 30px;
        }

        > div.input-group {
          text-align: left;
          overflow: hidden;

          > div {
            position: relative;
            margin-bottom: 13%;

            > .icon-user {
              float: left;
              margin: 8px 4% 0 0;
            }

            > input {
              width: calc(97% - 37px);
              padding-left: 4%;
              font-size: 14px;
              border-bottom: 1px solid #43454C;
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
