<template>
  <div id="ServiceCenter">
    <div class="service-tab">
      <router-link replace to="/backCenter"><span>服务列表</span></router-link>
      <router-link replace to="/myService"><span>我的服务</span></router-link>
      <router-link replace to="/purchaseIntention"><span>购买意愿</span></router-link>
    </div>
    <router-view v-on:showAttestation="showAttestation" v-on:showFile="showFile"></router-view>
  </div>
</template>

<script>//
export default {
  name: 'ServiceCenter',
  methods: {
    showAttestation () {
      this.$emit('showAttestation')
    },
    showFile (obj) {
      this.$emit('showFile', obj)
    }
  }
}
</script>

<style lang="scss" scoped>
  #ServiceCenter {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 640px;
    margin: 0 auto;
    padding: 46px 0 54px 0;

    .service-tab {
      position: fixed;
      z-index: 2;
      top: 46px;
      width: 100%;
      max-width: 640px;
      height: 44px;
      background-color: #000000;
      /*border-bottom: 1px solid #DDDDDD;*/
      a {
        display: inline-block;
        float: left;
        width: 33.3333%;
        text-align: center;
        height: 44px;
        line-height: 44px;
        font-size: 15px;
        color: white;
      }

      a.router-link-exact-active {
        font-weight: bold;
        border-bottom: 1px solid #E83217;
      }

      a.router-link-active {
        font-weight: bold;
        border-bottom: 1px solid #E83217;
      }
    }
  }
</style>
