<template>
  <div id="product">
    <div class="title"></div>
    <div class="cont">
      <ul class="game-list">
        <li class="nth1">
          <div class="bg"></div>
          <div class="txt"><p class="nth3">KPL职业联赛<br>冠军杯国际赛<br>QGC职业联赛<br>TGA大奖赛<br>……</p></div>
        </li>
        <li class="nth2">
          <div class="bg"></div>
          <div class="txt"><p class="nth3">TI系列赛<br>巅峰联赛<br>震中杯<br>ESLONE系列赛<br>……</p></div>
        </li>
        <li class="nth3">
          <div class="bg"></div>
          <div class="txt"><p class="nth3">S系列赛<br>LPL职业联赛<br>MSI邀请赛<br>洲际赛<br>……</p></div>
        </li>
        <li class="nth4">
          <div class="bg"></div>
          <div class="txt"><p class="nth3">ESEA系列赛<br>IEM系列赛<br>ESL ONE系列赛<br>DREAMHACK系列赛<br>……</p></div>
        </li>
        <li class="nth5">
          <div class="bg"></div>
          <div class="txt"><p class="nth3">守望先锋联赛<br>OWWC世界杯<br><span
            style="letter-spacing: 8px;">OPENDIVISION公开赛</span><br>LANSTORY杯<br>……</p></div>
        </li>
      </ul>

      <div class="ul-wrap">
        <ul>
          <li>
            <div><i class="icon"></i>
              <h1>千余场重大赛事</h1>
              <p>洲际对抗赛<br>LCK<br>S9<br>…</p></div>
          </li>
          <li>
            <div><i class="icon icon-2"></i>
              <h1>赛前分析</h1>
              <p>出场名单<br>历史战绩<br>最近交锋<br>未来赛程<br>…</p></div>
          </li>
          <li>
            <div><i class="icon icon-3"></i>
              <h1>赛后即时比分</h1>
              <p>全场获胜比分<br>单局获胜比分<br>单局比分<br>单据首杀<br>单据一龙<br>…</p></div>
          </li>
          <li class="last">
            <div><i class="icon icon-4"></i>
              <h1>实时风控监测</h1>
              <p>技术对接<br>全程指导<br>全天候监测<br>专属客服<br>…</p></div>
          </li>
        </ul>
      </div>

      <div class="banner-wrap" id="banner">
        <div class="swipe">
          <mt-swipe :auto="2000" :show-indicators="false" @change="handleChange"
                    style="position: absolute; width: 100%; top: 0;">
            <mt-swipe-item :key="i" v-for="(n,i) in banner">
              <a :style="{'background-image': 'url('+ n +')'}" class="img" href="javascript:void(0)"></a>
            </mt-swipe-item>
          </mt-swipe>
          <div v-show="banner.length > 1">
            <div>
              <div :class="{'optFor':swipeIndex*1===i}" :key="i" v-for="(n,i) in banner"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>//
import { Swipe, SwipeItem } from 'mint-ui'

export default {
  name: 'product',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data: () => {
    return {
      banner: [
        require('../../assets/home/banner-1@2x.jpg'),
        require('../../assets/home/banner-2@2x.jpg'),
        require('../../assets/home/banner-3@2x.jpg')
      ],
      swipeIndex: 0
    }
  },
  methods: {
    handleChange (index) {
      this.swipeIndex = index
    }
  }
}
</script>
<style lang="scss" scoped>
  #product {
    /*position: absolute;*/
    /*top: 100%;*/
    width: 100%;
    max-width: 640px;
    z-index: 6;
    padding-top: 10%;
    background-color: #111216;
    text-align: center;
    /*min-height: calc(100% - 49px);*/
    background-image: url("../../assets/home/product_bg@2x.jpg");
    background-size: cover;
    background-position: center center;

    /*padding-top: 48px;*/
    > div.title {
      width: 100%;
      height: 26px;
      margin: 0 0 8% 0;
      background-image: url("../../assets/home/title_service@2x.png");
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: center top;
    }

    > div.cont {
      margin: 0 auto;
      text-align: center;

      > ul.game-list {
        display: inline-block;
        width: 95%;
        margin: 0 auto 18% auto;
        list-style: none;
        text-align: center;

        > li {
          position: relative;
          display: inline-block;
          float: left;

          > img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: none;
          }

          > div.bg {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            margin: 0 !important;
          }

          > div.txt {
            background-size: cover;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: none;
            animation: myfirst .8s;
            -webkit-animation: myfirst .8s;
            color: white;
            text-align: left;
            box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.7);
            position: relative;

            > p.nth3 {
              padding: 0 0 0 10px;
              font-size: 16px;
              font-weight: bold;
              letter-spacing: 20px;
              line-height: 45px;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              color: #FFFFFF;
              margin-top: 10%;
              text-align: center;
              text-shadow: 0 0 10px #000000;
            }
          }

          &:first-child {
            width: 62%;
            padding: 31% 0;
            margin-left: 3.5%;

            > .bg {
              background-image: url("../../assets/home/game-1@2x.jpg");
            }

            > div.txt {
              background-image: url("../../assets/home/game-3@2x.jpg");

              > p.nth3 {
                font-size: 18px;
                letter-spacing: 20px;
                line-height: 65px;
                margin-top: 20%;
              }
            }

          }

          &:nth-child(2) {
            width: 31%;
            padding: 15.5% 0;

            > .bg {
              background-image: url("../../assets/home/game-2@2x.jpg");
            }

            > div.txt {
              background-image: url("../../assets/home/game-2@2x.jpg");

              > p.nth3 {
                letter-spacing: 25px;
              }
            }

          }

          &:nth-child(3) {
            width: 31%;
            padding: 15.5% 0;

            > .bg {
              background-image: url("../../assets/home/game-3@2x.jpg");
            }

            > div.txt {
              background-image: url("../../assets/home/game-3@2x.jpg");

              > p.nth3 {
                letter-spacing: 25px;
              }
            }

          }
        }
      }

      > .ul-wrap {
        width: 85%;
        text-align: center;
        margin: 0 auto 0 auto;

        > ul {
          list-style: none;
          text-align: left;
          display: block;
          width: 100%;
          zoom: 1;

          > li {
            display: inline-block;
            float: left;
            width: 47%;
            height: 190px;
            margin-bottom: 15%;

            > div {
              display: inline-block;
              width: 100%;
              height: 190px;
              background-color: black;
              background-color: rgba(0, 0, 0, 0.55);
              text-align: center;
              color: white;
              border-radius: 8px;

              > i {
                display: inline-block;
                width: 35%;
                padding: 17.5% 0;
                background-repeat: no-repeat;
                background-size: 100% 100%;
                margin-top: -17%;

                &:first-child {
                  background-image: url("../../assets/home/service_icon_1@2x.png");
                }

                &.icon-2 {
                  background-image: url("../../assets/home/service_icon_2@2x.png");
                }

                &.icon-3 {
                  background-image: url("../../assets/home/service_icon_3@2x.png");
                }

                &.icon-4 {
                  background-image: url("../../assets/home/service_icon_4@2x.png");
                }
              }

              > h1 {
                font-size: 13px;
                margin-top: 5px;
                margin-bottom: 4%;
                font-weight: normal;
              }

              > p {
                font-size: 12px;
                line-height: 22px;
                color: #e83217;
                transform: scale(0.85);
              }
            }

            &:nth-child(2n) {
              float: right;
              margin-right: 0;
            }
          }

          &:after {
            content: '';
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
          }
        }
      }

      .banner-wrap {
        width: 88%;
        margin: -3% auto 0 auto;
        padding: 0;
        padding-bottom: 10%;

        div.swipe {
          position: relative;
          width: 100%;
          padding: 35.8% 0 0 0;
          /*height: 160px;*/
          .img {
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000000;
            /*background-image: url("../assets/banner-img@2x.png");*/
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
          }

          > div:last-child {
            position: absolute;
            bottom: -19%;
            left: 0;
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: center;
            height: 30px;
            /*background: rgba(0, 0, 0, .5);*/
            > p {
              letter-spacing: 2px;
              flex: 1 1;
              margin-left: 15px;
              font-size: 13px;
              color: white;
              font-weight: bold;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            > div {
              display: flex;
              flex-flow: row nowrap;
              align-items: center;
              margin-right: 5px;

              div {
                width: 12px;
                height: 2px;
                margin-left: 5px;
                background-color: #414145;
              }

              div.optFor {
                background-color: #FFFFFF;
              }
            }
          }
        }
      }

    }
  }

  /*.product-service .cont ul.game-list li:hover div.txt{*/
  /*display: block;*/
  /*transform: scale(1.1);*/
  /*z-index: 100;*/
  /*}*/

  @keyframes myfirst {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes myfirst {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes myfirst2 {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @-webkit-keyframes myfirst2 {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  /*.product-service .cont*/

  /*.product-service .cont .ul-wrap*/
  /*.product-service .cont .ul-wrap*/
  /*.product-service .cont .ul-wrap ul*/
  /*.product-service .cont .ul-wrap ul li:hover {*/
  /*cursor: pointer;*/
  /*transform: scale(1.08);*/
  /*}*/
  /*.product-service .cont .ul-wrap ul li.last{*/
  /*float: right;*/
  /*margin: 0;*/
  /*}*/

</style>
