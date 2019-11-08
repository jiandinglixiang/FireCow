<template>
  <div id="ServiceNavHead">
    <div>
      <router-link class="logo-icon" tag="a" to="/"><img src="../assets/nav_logo_white@2x.png"></router-link>
      <span @click="showExit" class="right-content">{{title}}</span>
    </div>
  </div>
</template>

<script>//
export default {
  props: {
    title: { type: String }
  },
  methods: {
    showExit () {
      this.$emit('show')
    }
  }
}
</script>

<style lang="scss" scoped>
  #ServiceNavHead {
    width: 100%;
    height: 46px;
    z-index: 3;
    position: fixed;
    top: 0;

    div {
      max-width: 640px;
      width: 100%;
      height: 46px;
      position: relative;
      text-align: right;
      background-color: #1F2026;

      .logo-icon {
        position: absolute;
        left: 0;
        top: 0;
        margin: 8px 0 0 16px;
        display: inline-block;
        z-index: 1;

        img {
          height: 28px;
        }
      }

      .right-content {
        height: 46px;
        line-height: 46px;
        font-size: 15px;
        margin-right: 16px;
        color: white;
      }
    }
  }
</style>
