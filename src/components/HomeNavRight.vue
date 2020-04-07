<template>
  <div id="HomeNavRight">
    <div @click="hideMenu" class="shadow"></div>
    <div id="main-wrap">
      <div class="logo-wrap">
        <button @click="hideMenu" class="icon-home-menu-close"></button>
      </div>
      <div id="nav-button">
        <a @click="switchNav(0)" class="is-active" href="javascript:void(0)"><span>首页</span></a>
        <a href="https://score.firebulls.net" target="_blank"><span>火牛比分网</span></a>
        <a @click="switchNav(1)" href="javascript:void(0)"><span>电竞数据API</span></a>
        <a @click="switchNav(2)" href="javascript:void(0)"><span>产品服务</span></a>
        <a @click="switchNav(3)" href="javascript:void(0)"><span>更多服务</span></a>
        <a @click="switchNav(4)" href="javascript:void(0)"><span>关于火牛</span></a>
        <a @click="switchNav(5)" href="javascript:void(0)"><span>接入流程</span></a>
        <a @click="switchNav(6)" href="javascript:void(0)"><span>客户案例</span></a>
        <a @click="switchNav(7)" href="javascript:void(0)"><span>联系我们</span></a>
        <a @click="switchNav(8)" href="javascript:void(0)"><span>免费试用</span></a>
      </div>
    </div>
  </div>
</template>

<script>//
export default {
  name: 'HomeNavRight',
  data: () => {
    return {
      nameList: [
        'home',
        'dataApi',
        'product',
        'service',
        'aboutUs',
        'advantage',
        'case',
        'connectUs'
      ]
    }
  },
  methods: {
    hideMenu () {
      this.$emit('hideMenu')
    },
    switchNav (i) {
      $('#nav-button').children().attr('class', '')
      $('#nav-button').children().eq(i).attr('class', 'is-active')
      if (i <= 7) {
        this.$router.replace({ path: '/' })
        //          var ttt = parseInt($("#"+this.nameList[i]).css("height"));
        var ttt = document.getElementById(this.nameList[i]).offsetTop
        window.scrollTo(0, ttt)
      } else {
        this.$router.push({ path: '/register' })
      }
      this.hideMenu()
    }
  }
}
</script>

<style lang="scss" scoped>
  #HomeNavRight {
    position: fixed;
    display: none;
    z-index: 9;
    top: 0;
    width: 100%;
    height: 100%;
    max-width: 640px;

    > div.shadow {
      position: absolute;
      z-index: 4;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(19, 19, 19, 0.5);
    }

    > div#main-wrap {
      position: absolute;
      z-index: 4;
      right: -70%;
      width: 55%;
      height: 100%;

      .logo-wrap {
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        height: 49px;
        line-height: 49px;
        background-color: #1B1D23;
        /*background-image: url("../assets/home/nav_logo@2x.png");*/
        /*background-size: auto 30px;*/
        /*background-position: 10% center;*/
        /*background-repeat: no-repeat;*/
        .icon-home-menu-close {
          float: right;
          width: 49px;
          height: 49px;
          background-size: 20px 20px;
          background-position: center;
          margin: 0 10% 0 0;
        }
      }

      #nav-button {
        position: absolute;
        z-index: 4;
        width: 100%;
        height: 100%;
        top: 49px;
        right: 0;
        background-color: #1B1D23;

        > a {
          display: block;
          color: #9C9DA0;

          > span {
            display: block;
            padding: 7% 0 7% 20%;
            font-size: 15px;
            line-height: 1;

            &.icon-home-menu-free {
              color: $main-color;
              width: auto;
              height: auto;
              font-weight: bold;
              background-position: 6% 20%;
              background-size: auto 62%;
            }
          }

          &.is-active {
            color: $main-color;

            > span {
              font-weight: bold;
              background-image: url("../assets/home/menu_sel@2x.png");
              background-repeat: no-repeat;
              background-position: 6% center;
              background-size: auto 45%;
            }
          }

          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }
</style>
