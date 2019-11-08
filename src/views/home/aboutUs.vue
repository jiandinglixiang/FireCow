<template>
  <div id="aboutUs">
    <div class="title"></div>
    <div class="cont">
      <h1>火牛电竞数据服务商</h1>
      <p>&emsp;&emsp;福建四合文化传媒有限公司是一家专注电竞行业的年轻公司，我们将电竞的一切作为我们未来产品和服务的根本，不断为客户提供稳定优质的服务。数据服务是我们的产品核心也是我们的立足根本，致力于电子竞技，为产业上下游提供数据分析、个性化建议和即时数据展示等数据服务。
        <br>&emsp;&emsp;我们拥有成熟的研发技术团队，团队成员拥有超10年行业相关经验以及资源，同时具备完善的软硬件技术。坚持不断创新，实现客户所想，玩家所需，致力成为与时俱进的电竞数据服务商。
      </p>
      <a href="javascript:void(0)">了解更多</a>
      <img src="../../assets/home/about-fire-img@2x.png"/>
    </div>
  </div>
</template>

<script>//
export default {
  name: 'aboutUs'
}
</script>
<style lang="scss" scoped>
  #aboutUs {
    /*position: absolute;*/
    /*left: 0; */
    /*top: 100%;*/
    width: 100%;
    max-width: 640px;
    z-index: 4;
    background-color: #111216;
    padding-top: 10%;
    padding-bottom: 8%;

    > div.title {
      width: 100%;
      height: 26px;
      margin: 0 0 1% 0;
      background-image: url("../../assets/home/title_about_firebulls@2x.png");
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: center top;
    }

    > div.cont {
      width: 85%;
      margin: 0 auto;
      text-align: center;

      > h1 {
        font-size: 14px;
        padding: 10% 0 10px 0;
        color: white;
        font-weight: normal;
      }

      > p {
        font-size: 12px;
        line-height: 22px;
        color: #BCB6B6;
      }

      > a {
        display: inline-block;
        border: 1px solid $main-color;
        border-radius: 8px;
        color: white;
        font-size: 12px;
        padding: 3px 15px;
        margin-top: 15px;
      }

      > img {
        display: block;
        width: 58%;
        margin: 13% auto 0 auto;
      }
    }

  }
</style>
