<template>
  <div id="Refuse">
    <div class="wrap">
      <div class="title">您的企业认证被拒，请与工作人员联系，重新提交认证</div>
      <h1 class="top"></h1>
      <div class="content">
        <div class="img"></div>
      </div>
    </div>
  </div>
</template>

<script>//
export default {
  name: 'Refuse',
  methods: {
    openServer () {
      const u = navigator.userAgent
      const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      if (isiOS) {
        if (u.toLowerCase().match(/MicroMessenger/i) === 'micromessenger') {
          window.open('http://wpa.qq.com/msgrd?v=3&uin=3174237134&site=qq&menu=yes')
        } else {
          window.open('mqq://im/chat?chat_type=wpa&uin=3174237134&version=1&src_type=we')
        }
      } else {
        if (u.toLowerCase().match(/MicroMessenger/i) === 'micromessenger') {
          window.open('http://wpa.qq.com/msgrd?v=3&uin=3174237134&site=qq&menu=yes')
        } else {
          window.open('mqqwpa://im/chat?chat_type=wpa&uin=3174237134&version=1&src_type=web&web_src=oicqzone.com')
        }
      }
    }
  },
  mounted () {
    const u = navigator.userAgent
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    var src = ''
    if (isiOS) {
      if (u.toLowerCase().match(/MicroMessenger/i) === 'micromessenger') {
        src = 'http://wpa.qq.com/msgrd?v=3&uin=3174237134&site=qq&menu=yes'
      } else {
        src = 'mqq://im/chat?chat_type=wpa&uin=3174237134&version=1&src_type=web'
      }
    } else {
      if (u.toLowerCase().match(/MicroMessenger/i) === 'micromessenger') {
        src = 'http://wpa.qq.com/msgrd?v=3&uin=3174237134&site=qq&menu=yes'
      } else {
        src = 'mqqwpa://im/chat?chat_type=wpa&uin=3174237134&version=1&src_type=web&web_src=oicqzone.com'
      }
    }
    $('#btn_server').attr('href', src)
  }
}
</script>
<style lang="scss" scoped>
  div#Refuse {
    margin-top: 20px;
    padding: 0;

    > div.wrap {
      padding: 0 15px;
      text-align: center;

      > div.title {
        display: inline-block;
        width: 90%;
        text-align: left;
        color: white;
        font-size: 14px;
        line-height: 22px;
        padding: 0 0 0 30px;
        background-image: url("../assets/personalCenter/serve_ic_warm@2x.png");
        background-size: 22px auto;
        background-repeat: no-repeat;
        background-position: left top;

        > a {
          color: $main-color;
          text-decoration: underline;
        }
      }

      > h1.top {
        position: relative;
        z-index: 2;
        height: 17px;
        margin-top: 10px;
      }

      > div.content {
        padding: 8% 20px;
      }
    }
  }
</style>
