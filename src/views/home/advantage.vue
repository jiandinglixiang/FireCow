<template>
  <div id="advantage">
    <div class="title"></div>
    <ul>
      <li><p>在线注册<br>提交资料</p></li>
      <li class="img"></li>
      <li><p>商务对接<br>确认需求</p></li>
      <li class="img"></li>
      <li><p>免费试用/付费使用<br>技术对接测试</p></li>
      <li class="img"></li>
      <li><p>全程监测<br>在线反馈</p></li>
      <li class="img"></li>
      <li><p>根据意向<br>签订合同</p></li>
    </ul>
  </div>
</template>

<script>//
export default {
  name: 'advantage'
}
</script>
<style lang="scss" scoped>
  #advantage {
    /*position: absolute;*/
    /*top: 100%;*/
    width: 100%;
    max-width: 640px;
    z-index: 3;
    /*padding-top: 48px;*/
    background-color: #0D0E10;
    text-align: center;
    padding-top: 6%;

    > div.title {
      width: 100%;
      height: 26px;
      margin: 0 0 1% 0;
      background-image: url("../../assets/home/title_access_process@2x.png");
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: center top;
    }

    > ul {
      margin-top: 5%;
      list-style: none;
      padding-bottom: 8%;
      transform: scale(0.9);

      > li {
        text-align: center;

        > p {
          display: inline-block;
          background-color: black;
          border-radius: 12px;
          border: 1px solid #e83217;
          padding: 4px 35px;
          font-size: 12px;
          line-height: 20px;
          text-align: center;
          color: white;
        }

        &.img {
          border: none;
          display: inline-block;
          width: 40px;
          height: 40px;
          background-color: transparent;
          background-image: url("../../assets/home/arrow_down@2x.png");
          background-size: auto 60%;
          background-position: center center;
          background-repeat: no-repeat;
          border-radius: 0;
        }
      }

    }

  }
</style>
