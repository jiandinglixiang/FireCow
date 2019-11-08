<template>
  <div id="home2">
    <home></home>
    <data-api></data-api>
    <product></product>
    <service></service>
    <about-us></about-us>
    <advantage></advantage>
    <case></case>
    <connect-us></connect-us>
  </div>
</template>

<script>//
import Home from '../home/index'
import dataApi from '../home/dataApi'
import AboutUs from '../home/aboutUs'
import Product from '../home/product'
import Service from '../home/service'
import Advantage from '../home/advantage'
import ConnectUs from '../home/connectUs'
import Case from './case'

export default {
  components: { Case, ConnectUs, Advantage, Service, Product, AboutUs, dataApi, Home },
  name: 'home2',
  data: () => {
    return {
      clientHeight: 0
    }
  },
  mounted () {
    //        window.onload = function () {
    // 获取浏览器可视区域高度
    //          const hv = document.documentElement.clientHeight || document.body.clientHeight;
    //          this.clientHeight = hv - 48;
    //          $('#product').css('top', (this.clientHeight+$('#dataApi').height())+'px');
    //          $('#service').css('top', (this.clientHeight+$('#dataApi').height()+$('#product').height())+'px');
    //          $('#aboutUs').css('top', (this.clientHeight+$('#dataApi').height()+$('#product').height()+$('#service').height())+'px');
    //          $('#advantage').css('top', (this.clientHeight+$('#dataApi').height()+$('#product').height()+$('#service').height()+$('#aboutUs').height())+'px');
    //          $('#case').css('top', (this.clientHeight+$('#aboutUs').height()+$('#product').height()+$('#service').height()+$('#advantage').height()+$('#dataApi').height())+'px');
    //          $('#connectUs').css('top', (this.clientHeight+$('#aboutUs').height()+$('#product').height()+$('#service').height()+$('#advantage').height()+$('#dataApi').height()+$('#case').height())+'px');
    //        }
  },
  created () {

  },
  watch: {
    $route (route) {
      //        console.log(route)
    }
  }
}
</script>
<style lang="scss" scoped>
  #home2 {
    position: absolute;
    top: 48px;
    min-height: calc(100% - 48px);
    width: 100%;
  }
</style>
