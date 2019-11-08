<template>
  <div id="ExitConfirm">
    <div @click="onCloseDialog" class="mask"></div>
    <div class="content">
      <div class="message">是否退出当前账户</div>
      <div class="btn-group">
        <button @click="onCloseDialog" class="button cancel">暂不退出</button>
        <button @click="logout" class="button confirm">确认退出</button>
      </div>
    </div>
  </div>
</template>

<script>//
import { mapActions } from 'vuex'
import { LOGOUT } from '@/vuex/Mine'

export default {
  name: 'ExitConfirm',
  data: () => {
    return {
      dialogShow: false
    }
  },
  methods: {
    onCloseDialog () {
      this.$emit('close')
    },
    logout () {
      this.logout()
    },
    ...mapActions({
      logout: LOGOUT
    })
  }
}
</script>
<style lang="scss" scoped>
  div#ExitConfirm {
    position: absolute;
    z-index: 5;
    top: 0;
    width: 100%;
    height: 100%;
    max-width: 640px;

    > div.mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 2;
    }

    > div.content {
      position: relative;
      z-index: 3;
      top: calc((100vh - 164px) / 2);
      width: 70%;
      margin-left: 15%;
      padding: 0 0;
      background-color: #1F2025;
      text-align: center;

      > div.message {
        font-size: 16px;
        color: white;
        font-weight: bold;
        line-height: 26px;
        padding: 40px 0;
      }

      > div.btn-group {
        text-align: center;
        padding-bottom: 20px;

        .button {
          display: inline-block;
          width: 40%;
          height: 30px;
          color: white;
          margin: 0;
          padding: 0;
          font-size: 15px;
          border-bottom-right-radius: 8px;
          border-top-left-radius: 8px;
        }

        .cancel {
          background-color: #31323B;
          margin-right: 10px;
        }

        .confirm {
          background: $main-color;
        }
      }
    }
  }
</style>
