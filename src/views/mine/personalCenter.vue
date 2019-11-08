<template>
  <div id="PersonalCenter">
    <div class="personal-tab">
      <router-link replace to="/personalCenter"><i class="icon-set"></i><span>账号设置</span></router-link>
      <router-link replace to="/companyAttestation"><i class="icon-company"></i><span>企业认证</span></router-link>
    </div>
    <router-view v-on:showDisclaimer="showDisclaimer"></router-view>
  </div>
</template>

<script>//
export default {
  name: 'PersonalCenter',
  methods: {
    showExit () {
      this.$emit('show')
    },
    showDisclaimer () {
      this.$emit('showDisclaimer')
    }
  }
}
</script>

<style lang="scss" scoped>
  #PersonalCenter {
    position: relative;
    z-index: 3;
    padding: 46px 0 54px 0;

    .personal-tab {
      position: fixed;
      z-index: 3;
      top: 46px;
      width: 100%;
      max-width: 640px;
      height: 44px;

      a {
        position: relative;
        display: inline-block;
        float: left;
        width: 50%;
        text-align: center;
        height: 44px;
        line-height: 44px;
        font-size: 15px;
        color: $font-color;
        background-color: #000000;

        i {
          position: absolute;
          top: 0;
          margin-top: 10px;
          background-size: 100% auto;
          background-position: center center;
        }

        span {
          padding-left: 25px;
        }
      }

      a.router-link-exact-active, a.router-link-active {
        border-bottom: 1px solid $main-color;

        i.icon-set {
          background-image: url("../../assets/personalCenter/ic_set_sel@2x.png");
        }

        i.icon-company {
          background-image: url("../../assets/personalCenter/ic_co_sel@2x.png");
        }
      }
    }
  }
</style>
