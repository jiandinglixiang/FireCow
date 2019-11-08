<template>
  <div id="service">
    <service-nav-head @show="showExit" v-bind:title="this.UserInfo.mobile"></service-nav-head>
    <router-view style="position: relative; z-index: 2;" v-on:showAttestation="showAttestation"
                 v-on:showDisclaimer="showDisclaimer"
                 v-on:showFile="showFile"></router-view>
    <div class="tab-wrap">
      <router-link :class="{'is-active':$route.meta.active === '/backCenter'}" class="tab left-tab" replace
                   to="/backCenter">
        <div></div>
        <span>火牛服务</span></router-link>
      <router-link :class="{'is-active':$route.meta.active === '/personalCenter'}" class="tab right-tab" replace
                   to="/personalCenter">
        <div></div>
        <span>个人中心</span></router-link>
    </div>
    <exit-confirm @close="closeExit" v-show="this.exitDisplay"></exit-confirm>
    <company-attestation-attention @close="closeAttestation"
                                   v-show="this.attestationDisplay"></company-attestation-attention>
    <down-load-file :file_url="this.file_url" @close="closeFile" @downLoadFile="downLoadFile"
                    v-show="this.fileDisplay"></down-load-file>
    <disclaimer @close="closeDisclaimer" v-show="this.disclaimerDisplay"></disclaimer>
  </div>
</template>

<script>//
import ServiceNavHead from '@/components/ServiceNavHead'
import ExitConfirm from '@/components/ExitConfirm.vue'
import CompanyAttestationAttention from '@/components/CompanyAttestationAttention.vue'
import DownLoadFile from '@/components/DownLoadFile'
import Disclaimer from '@/components/Disclaimer'
import { mapActions, mapState } from 'vuex'
import { GET_USER_INFO } from '@/vuex/Mine'

export default {
  name: 'service',
  data: () => {
    return {
      exitDisplay: false,
      attestationDisplay: false,
      fileDisplay: false,
      disclaimerDisplay: false,
      file_url: ''
    }
  },
  methods: {
    showExit () {
      this.exitDisplay = true
    },
    closeExit () {
      this.exitDisplay = false
    },
    showAttestation () {
      this.attestationDisplay = true
    },
    closeAttestation () {
      this.attestationDisplay = false
    },
    showFile (obj) {
      this.fileDisplay = true
      this.file_url = 'https://hn-admin.oss-cn-shenzhen.aliyuncs.com/doc/%E7%81%AB%E7%89%9B%E7%94%B5%E7%AB%9EAPI%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3-v2.0.1.pdf'
    },
    closeFile () {
      this.fileDisplay = false
    },
    showDisclaimer () {
      this.disclaimerDisplay = true
    },
    closeDisclaimer () {
      this.disclaimerDisplay = false
    },
    downLoadFile () {
      //      this.file_url = 'https://hn-admin.oss-cn-shenzhen.aliyuncs.com/doc/%E7%81%AB%E7%89%9B%E7%94%B5%E7%AB%9EAPI%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3-v2.0.1.pdf';
      //      window.open('https://hn-admin.oss-cn-shenzhen.aliyuncs.com/doc/%E7%81%AB%E7%89%9B%E7%94%B5%E7%AB%9EAPI%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3-v2.0.1.pdf','_self');
      //      console.log('下载链接：' + this.file_url);
    },
    ...mapActions({
      getUserInfo: GET_USER_INFO
    })
  },
  components: {
    Disclaimer, DownLoadFile, CompanyAttestationAttention, ExitConfirm, ServiceNavHead
  },
  computed: {
    ...mapState({
      UserInfo: state => state.mine.UserInfo
    })
  },
  mounted () {
    if (JSON.stringify(this.UserInfo) === '{}') {
      this.getUserInfo().catch((msg) => {
        const message = JSON.parse(msg.message)
        if (message.code === 0) {
          this.$router.replace({ path: '/login' })
        }
      })
    }

    window.addEventListener('load', function () {
      document.getElementById('nb_icon_wrap').style.width = '60px'
      document.getElementById('nb_icon_wrap').style.height = '60px'
    })
  }
}
</script>
<style lang="scss" scoped>
  #service {
    width: 100%;
    height: 100%;
    max-width: 640px;
    margin: 0 auto;

    div.tab-wrap {
      position: fixed;
      z-index: 2;
      bottom: 0;
      /*left: 0;*/
      max-width: 640px;
      width: 100%;
      height: 54px;
      background-color: #111216;
      color: #92949B;
      font-size: 12px;

      .tab {
        position: relative;
        float: left;

        display: inline-block;
        width: 50%;
        text-align: center;

        div {
          display: none;
          position: absolute;
          z-index: 1;
          width: 40px;
          height: 40px;
          left: 0;
          top: 0;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: left top;
        }

        span {
          display: inline-block;
          position: relative;
          z-index: 2;
          color: #92949B;
          padding-top: 30px;
          background-size: 28px 28px;
          background-position: center 3px;
          background-repeat: no-repeat;
        }
      }

      .left-tab {
        span {
          background-image: url("../../assets/tab_left_nor@2x.png");
        }
      }

      .right-tab {
        div {
          right: 0;
        }

        span {
          background-image: url("../../assets/tab_right_nor@2x.png");
        }
      }

      .is-active {
        span {
          color: #E83217;
        }
      }

      .left-tab.is-active {
        span {
          background-image: url("../../assets/tab_left_sel@2x.png");
        }
      }

      .right-tab.is-active {
        span {
          background-image: url("../../assets/tab_right_sel@2x.png");
        }
      }
    }
  }
</style>
