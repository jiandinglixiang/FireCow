<template>
  <div id="ServiceTab">
    <div>
      <router-link class="tab left-tab" to="/serviceCenter">
        <div>火牛服务</div>
      </router-link>
      <router-link class="tab right-tab" to="/personalCenter">
        <div>个人中心</div>
      </router-link>
    </div>
  </div>
</template>

<script>//
export default {
  name: 'ServiceTab',
  methods: {
    showExit () {
      this.$emit('show')
    }
  }
}
</script>

<style lang="scss" scoped>
  #ServiceTab {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 54px;
    z-index: 1;

    div {
      position: relative;
      width: 100%;
      height: 54px;
      max-width: 640px;
      background-color: white;
      color: $font-color;
      font-size: 16px;

      .tab {
        display: inline-block;
        width: 50%;
        float: left;
        line-height: 54px;
        text-align: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: left top;

        &.left-tab.router-link-exact-active {
          background-image: url("../assets/tab_left_sel@2x.png");
        }

        &.right-tab.router-link-exact-active {
          background-image: url("../assets/tab_right_sel@2x.png");
        }
      }
    }
  }
</style>
