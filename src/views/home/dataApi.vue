<template>
  <div id="dataApi">
    <div class="title"></div>
    <img src="../../assets/home/data_api_img@2x.png"/>
    <ul>
      <li>
        <h1>我们做了什么？</h1>
        <p>提供电竞赛事数据，覆盖市场上主流电竞赛事，提供详尽的赛前分析，赛后即时比分输出。</p>
        <router-link class="btn register" to="/register">个性化定制</router-link>
      </li>
      <li>
        <h1>您获得什么？</h1>
        <p>压缩了开发成本和时间，专注运营和推广，获得更大经济效益。大量且稳定的数据支持，满足C端客户不同需求。专业技术实时监测，后期维护省心省力。</p>
        <router-link class="btn register" to="/register">&ensp;免费试用&ensp;</router-link>
      </li>
    </ul>
  </div>
</template>

<script>//
export default {
  name: 'dataApi'
}
</script>
<style lang="scss" scoped>
  #dataApi {
    /*position: absolute;*/
    /*top: 100%;*/
    width: 100%;
    max-width: 640px;
    z-index: 7;
    /*padding-top: 48px;*/
    background-color: #111216;
    text-align: center;

    > div.title {
      width: 100%;
      height: 26px;
      margin: 0 0 2% 0;
      background-image: url("../../assets/home/title_data_api@2x.png");
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: center top;
    }

    > img {
      /*padding: 2% 3% 1% 3%;*/
      width: 78%;
      margin: 5% auto;
    }

    > ul {
      list-style: none;
      width: 88%;
      margin: 0 auto;

      > li {
        background-color: #0D0E10;
        padding: 3.5% 0;
        border-radius: 10px;
        overflow: hidden;

        > h1 {
          font-size: 15px;
          padding: 0 3% 5px 3%;
          text-align: left;
          color: #FEFEFE;
        }

        > p {
          font-size: 12px;
          line-height: 18px;
          padding: 5px 3%;
          color: #BCB6B6;
          /*text-shadow: 0 5px 5px rgba(0,0,0,0.7);*/
          letter-spacing: 1px;
          margin-bottom: 10px;
          text-align: left;
        }

        > .btn {
          float: right;
          margin-right: 4%;
          display: inline-block;
          font-size: 12px;
          padding: 1% 4%;
          border: 1px solid #E83217;
          color: white;
          border-radius: 6px;
          text-align: center;

          &.login {
            margin-bottom: 5%;
          }

          &.register {

          }
        }

        &:first-child {
          margin-top: 5%;
        }

        &:last-child {
          margin-top: 10%;
        }
      }
    }
  }
</style>
