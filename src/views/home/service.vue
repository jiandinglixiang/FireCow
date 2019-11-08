<template>
  <div id="service">
    <img src="../../assets/home/arrow_down@2x.png" width="26px"/>
    <div class="title"></div>
    <ul>
      <li>
        <div class="txt">
          <h1>电竞数据应用合作</h1>
          <p>为线上、线下非官方赛事，电竞职业俱乐部，行业研究机构及电竞自媒体提供数据支持，帮助合作方更好的开展活动，帮助电竞爱好者深耕行业。</p>
          <a @click="customerService" href="javascript:void(0)">在线咨询</a>
        </div>
        <div class="img"></div>
      </li>
      <li>
        <div class="img"></div>
        <div class="txt" style="margin: 0 0 0 40%;">
          <h1>产品定制研发</h1>
          <p>为线上、线下非官方赛事，电竞职业俱乐部，行业研究机构及电竞自媒体提供数据支持，帮助合作方更好的开展活动，帮助电竞爱好者深耕行业。</p>
          <a @click="customerService" href="javascript:void(0)">联系我们</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>//
export default {
  name: 'service',
  methods: {
    customerService () {
      console.log(1)
      $('#nb_icon_wrap').click()
    }
  }
}
</script>
<style lang="scss" scoped>
  #service {
    /*position: absolute;*/
    /*top: 100%;*/
    width: 100%;
    max-width: 640px;
    z-index: 5;
    /*padding-top: 48px;*/
    background-color: #0D0E10;
    text-align: center;
    padding-top: 6%;

    > div.title {
      width: 100%;
      height: 26px;
      margin: 0 0 1% 0;
      background-image: url("../../assets/home/title_more_service@2x.png");
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: center top;
    }

    > ul {
      list-style: none;
      width: 100%;
      margin: 10% auto 0 auto;
      overflow: hidden;

      > li {
        position: relative;
        text-align: left;
        color: white;
        margin-bottom: 7%;
        overflow: hidden;
        transform: scale(0.9);

        > div.txt {
          width: 60%;
          overflow: hidden;

          > h1 {
            font-size: 14px;
            margin-bottom: 3%;
          }

          > p {
            color: #BCB6B6;
            font-size: 12px;
            line-height: 22px;
            /*padding-bottom: 5%;*/
            /*transform: scale(0.9);*/
          }

          > a {
            display: inline-block;
            float: right;
            background-color: #e83217;
            color: white;
            border-radius: 6px;
            font-size: 12px;
            padding: 3px 15px;
            margin-right: 0;
            margin-top: 3%;
          }
        }

        > div.img {
          position: absolute;
          top: 0;
          width: 38%;
          height: 100%;
        }

        &:first-child {
          > div.img {
            right: 0;
            background-image: url("../../assets/home/more_service_1@2x.jpg");
            background-size: auto 100%;
            background-repeat: no-repeat;
            background-position: center center;
          }
        }

        &:last-child {
          > div.img {
            left: 0;
            background-image: url("../../assets/home/more_service_2@2x.jpg");
            background-size: auto 100%;
            background-repeat: no-repeat;
            background-position: center center;
          }
        }
      }
    }
  }
</style>
