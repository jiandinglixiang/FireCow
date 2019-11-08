<template>
  <div id="Set">
    <div class="wrap">
      <h1 class="top"></h1>
      <div class="content">
        <div>
          <span>绑定手机</span>
          <div>
            <p>您已绑定手机{{UserInfo.mobile}}，可用于登录</p>
            <router-link class="button" to="/bindPhone">修改</router-link>
          </div>
        </div>
        <div>
          <span>登录密码</span>
          <div>
            <p>上次更改密码时间为，建议定期修改密码</p>
            <router-link class="button" to="/resetPassword">修改</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>//
import { mapState } from 'vuex'

export default {
  name: 'Set',
  computed: {
    ...mapState({
      UserInfo: state => state.mine.UserInfo
    })
  }
}
</script>

<style lang="scss" scoped>
  #Set {
    position: relative;
    z-index: 1;
    padding: 46px 0 54px 0;

    > div.wrap {
      padding: 0 15px;
      text-align: center;

      > h1.top {
        position: relative;
        z-index: 2;
        height: 17px;
        margin-top: 10px;
      }

      > div.content {
        text-align: left;
        background-color: #1F2025;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
        padding: 20px 20px 20px 20px;

        > div {
          margin-bottom: 10%;
          font-size: 13px;
          line-height: 22px;

          > span {
            font-size: 16px;
            display: block;
            color: white;
            margin-right: 30px;
            text-align: left;
            padding-bottom: 10px;
          }

          > div {
            display: block;
            overflow: hidden;

            p {
              color: #80828F;
            }

            .button {
              float: right;
              display: inline-block;
              background-color: transparent;
              width: 30%;
              margin-top: 10px;
              text-align: center;
              height: 26px;
              line-height: 26px;
              color: $main-color;
              border: 1px solid $main-color;
              border-radius: 50px;
            }
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
</style>
