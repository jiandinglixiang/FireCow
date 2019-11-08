<template>
  <div id="app">
    <transition name="bounce">
      <router-view/>
    </transition>
  </div>
</template>

<script>//
export default {
  name: 'App'
}
</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    max-width: 640px;
    margin: 0 auto;

    .bounce-enter-active {
      transition: opacity .5s;
    }

    .bounce-leave-active {
      display: none;
      opacity: 1;
    }

    .bounce-enter-active::before {
      position: fixed;
      z-index: 1;
      left: 0;
      background-color: #F1F4F6;
      height: 2px;
      content: '';
      animation: bounce-in .5s;
    }

  }

  @keyframes bounce-in {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
</style>
