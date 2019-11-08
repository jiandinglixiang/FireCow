<template>
  <div id="KeyItem">
    <div class="title"><span>以下是您调用电竞接口的密钥，请注意保密</span><i class="icon-warn"></i></div>
    <div class="key-wrap">
      <div><span>Access Key：</span><span>{{ UserInfo.access_key }}</span></div>
      <div><span>Secret Key：</span><span>{{ UserInfo.secret_key }}</span></div>
    </div>
  </div>
</template>

<script>//
import { mapState } from 'vuex'

export default {
  name: 'KeyItem',
  computed: {
    ...mapState({
      UserInfo: state => state.mine.UserInfo
    })
  }
}
</script>
<style lang="scss" scoped>
  div#KeyItem {
    width: 94%;
    margin: 5% auto;
    position: relative;
    background-color: #1F2025;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);

    > div.title {
      width: 95%;
      margin: 0 auto;
      position: relative;
      height: 34px;
      line-height: 36px;
      text-align: left;
      font-size: 12px;
      border-bottom: 1px solid #43454C;

      > span {
        color: #80828F;
      }

      > i.icon-warn {
        position: absolute;
        right: 0;
        top: 0;
        margin: 5px 0 0 0;
        width: 22px;
        height: 22px;
        background-image: url("../assets/personalCenter/serve_ic_warm@2x.png");
        background-position: right center;
        background-size: 80% 80%;
      }
    }

    .key-wrap {
      position: relative;
      z-index: 1;
      padding: 2% 0 3% 0;
      text-align: center;
      color: white;

      > div {
        padding: 3% 0;

        > span:nth-child(1) {
          display: inline-block;
          text-align: right;
          width: 85px;
        }

        > span:nth-child(2) {
          display: inline-block;
          text-align: left;
          width: auto;
          color: #E83217;
          padding-left: 5px;
        }
      }
    }
  }
</style>
