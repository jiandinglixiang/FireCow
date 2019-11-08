<template>
  <div id="home">
    <div class="img-world"></div>
    <div class="btn-wrap">
      <router-link class="btn login" to="/backCenter">立即登录</router-link>
      <br>
      <router-link class="btn register" to="/register">免费试用</router-link>
    </div>
  </div>
</template>

<script>//
export default {
  name: 'home'
//  watch: {
//    $route (route) {
//      console.log(route)
//    }
//  }
}
</script>
<style lang="scss" scoped>
  #home {
    position: relative;
    /*position: absolute;*/
    /*left: 0; */
    /*top: 48px;*/
    width: 100%;
    max-width: 640px;
    height: 100vh;
    z-index: 8;
    /*height: calc(100% - 48px);*/
    background-image: url("../../assets/home/home_bg@3x.jpg");
    background-size: cover;

    > div.img-world {
      position: absolute;
      left: 0;
      top: 0;
      width: 55%;
      margin: 23% 0 0 22.5%;
      padding: 30% 0;
      background-image: url("../../assets/home/home_word@2x.png");
      background-size: 100% auto;
      background-repeat: no-repeat;
      background-position: left top;
    }

    > div.btn-wrap {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      margin: 65% 0 0 0;
      text-align: center;

      > .btn {
        display: inline-block;
        font-size: 14px;
        padding: 1% 5%;
        border: 1px solid #E83217;
        color: white;
        border-radius: 6px;
        text-align: center;
      }

      > .login {
        background-color: rgba(232, 50, 23, 0.5);
        margin-bottom: 5%;
      }

      > .register {
        background-color: #E83217;
      }
    }

  }
</style>
