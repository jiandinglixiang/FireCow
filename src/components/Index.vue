<template>
  <div id="onePage">
    <home-nav-head @showMenu="showMenu"></home-nav-head>
    <home-nav-right @hideMenu="hideMenu"></home-nav-right>
    <router-view/>
    <div class="right-wrap">
      <a @click="backTop" class="btn-backTop" href="javascript:void(0)"></a>
      <img class="qr-img" src="../assets/qr.png"/>
      <!--<a id="btn_server" href=""><i>购买<br>咨询</i></a>-->
    </div>
  </div>
</template>

<script>//
import HomeNavHead from './HomeNavHead'
import HomeNavRight from './HomeNavRight'

export default {
  name: 'onePage',
  methods: {
    backTop () {
      window.scrollTo(0, 0)
    },
    handleScroll () {
      const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 滚动条到底部的条件
      if (scrollTop >= clientHeight * 0.6) {
        $('.btn-backTop').css('display', 'inline-block')
      } else {
        $('.btn-backTop').css('display', 'none')
      }
    },
    hideMenu () {
      $('#HomeNavRight .shadow').hide()
      $('#main-wrap').animate({ 'right': '-70%' }, 150, 'linear', function () {
        $('#HomeNavRight').hide()
      })
    },
    showMenu () {
      $('#HomeNavRight .shadow').show()
      $('#HomeNavRight').show()
      $('#main-wrap').animate({ 'right': '0' }, 300)
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll) //  离开页面清除（移除）滚轮滚动事件
    }
  },
  watch: {
    $route (route) {
      this.hideMenu()
    }
  },
  mounted () {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll, true)

    window.addEventListener('load', function () {
      document.getElementById('nb_icon_wrap').style.width = '60px'
      document.getElementById('nb_icon_wrap').style.height = '60px'
    })

    //    const u = navigator.userAgent;
    //    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    //    var src = '';
    //    if(isiOS){
    //      if(u.toLowerCase().match(/MicroMessenger/i) == "micromessenger"){
    //        src = 'http://wpa.qq.com/msgrd?v=3&uin=3174237134&site=qq&menu=yes';
    //      }else{
    //        src = 'mqq://im/chat?chat_type=wpa&uin=3174237134&version=1&src_type=web';
    //      }
    //    }else{
    //      if(u.toLowerCase().match(/MicroMessenger/i) == "micromessenger"){
    //        src = 'http://wpa.qq.com/msgrd?v=3&uin=3174237134&site=qq&menu=yes';
    //      }else{
    //        src = 'mqqwpa://im/chat?chat_type=wpa&uin=3174237134&version=1&src_type=web&web_src=oicqzone.com';
    //      }
    //    }
    //    $('#btn_server').attr('href',src);
  },
  components: {
    HomeNavRight, HomeNavHead
  }
}
</script>

<style lang="scss" scoped>
  #onePage {
    max-width: 640px;

    .right-wrap {
      position: fixed;
      bottom: 5%;
      right: 0;

      > a#btn_server {
        float: right;
        display: inline-block;
        width: 40px;
        height: 40px;
        font-size: 12px;
        color: white;
        text-align: center;
        background-color: #FF624B;

        > i {
          display: inline-block;
          font-style: normal;
          padding-top: 3px;
        }
      }

      > .qr-img {
        float: right;
        display: inline-block;
        width: 40px;
        height: 40px;
        border: 1px solid #FF624B;
      }

      > .btn-backTop {
        display: none;
        width: 40px;
        height: 40px;
        color: white;
        text-align: center;
        background-color: white;
        float: right;
        background-image: url("../assets/home/ic_backtop.png");
        background-size: contain;
        background-position: center center;
      }
    }
  }
</style>
