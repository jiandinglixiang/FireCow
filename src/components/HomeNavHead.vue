<template>
  <div id="HomeNavHead">
    <button @click="showMenu" class="icon-home-menu"></button>
  </div>
</template>

<script>//
export default {
  name: 'HomeNavHead',
  methods: {
    showMenu () {
      this.$emit('showMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
  #HomeNavHead {
    position: fixed;
    z-index: 8;
    width: 100%;
    height: 49px;
    max-width: 640px;
    line-height: 49px;
    text-align: center;
    background-color: #1C1D22;
    background-image: url("../assets/nav_logo_white@2x.png");
    background-size: auto 28px;
    background-position: 20px center;
    background-repeat: no-repeat;

    > button.icon-home-menu {
      position: absolute;
      top: 12px;
      right: 20px;
      width: 26px;
      height: 22px;
    }
  }
</style>
