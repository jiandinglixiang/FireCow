<template>
  <div id="DownLoadFile">
    <div @click="onCloseDialog" class="mask"></div>
    <div class="content">
      <div class="message"><p>接口文档</p><img src="../assets/serviceCenter/service_download@2x.png"/></div>
      <div class="btn-group">
        <template v-if="this.isWX">
          <button @click="showMask" class="button confirm">下载</button>
        </template>
        <template v-else>
          <a class="button confirm"
             href="https://hn-admin.oss-cn-shenzhen.aliyuncs.com/doc/%E7%81%AB%E7%89%9B%E7%94%B5%E7%AB%9EAPI%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3-v2.0.1.pdf">下载</a>
        </template>
      </div>
    </div>
    <div @click="hideMask" class="wx-wrap" v-show="this.wxDisplay">
      <div class="shadow"></div>
      <div class="img">
        <template v-if="this.isIOS">
          <img src="../assets/yindaoye_ios@2x.png"/>
        </template>
        <template v-if="this.isAndroid">
          <img src="../assets/yindaoye_andr@2x.png"/>
        </template>
      </div>
      <h3>请按提示操作，即可跳转浏览器</h3>
    </div>
  </div>
</template>

<script>//
export default {
  name: 'DownLoadFile',
  props: {
    file_url: { type: String }
  },
  data: () => {
    return {
      dialogShow: false,
      isIOS: false,
      isAndroid: false,
      isWX: false,
      wxDisplay: false
    }
  },
  methods: {
    onCloseDialog () {
      this.$emit('close')
    },
    showMask () {
      this.wxDisplay = true
    },
    hideMask () {
      this.wxDisplay = false
    }
  },
  mounted () {
    const u = navigator.userAgent
    this.isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    this.isAndroid = !this.isIOS
    this.isWX = u.toLowerCase().match(/MicroMessenger/i) === 'micromessenger'
  }
}
</script>
<style lang="scss" scoped>
  div#DownLoadFile {
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    max-width: 640px;
    top: 0;

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
      width: 70%;
      margin-left: 15%;
      background-color: #1F2025;
      padding: 0 0;
      top: calc((100vh - 250px) / 2);
      text-align: center;

      > div.message {
        p {
          font-size: 16px;
          color: white;
          font-weight: bold;
          padding: 20px 0;
        }

        img {
          width: 45%;
        }
      }

      > div.btn-group {
        padding: 10px 0;

        .button {
          display: inline-block;
          width: 70%;
          height: 34px;
          line-height: 34px;
          color: white;
          margin: 0;
          padding: 0;
          font-size: 14px;
          border-top-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }

        .confirm {
          background: $main-color;
        }
      }
    }

    > div.wx-wrap {
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.5);

      > div.img {
        width: 100%;
        margin: 0 auto;

        > img {
          width: 100%;
        }
      }

      > h3 {
        position: absolute;
        width: 100%;
        bottom: 5%;
        color: red;
        font-size: 16px;
      }
    }
  }
</style>
