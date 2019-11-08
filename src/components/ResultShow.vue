<template>
  <div id="ResultShow">
    <div class="wrap">
      <h1 class="top"></h1>
      <div class="content">
        <div class="title">{{step}}、{{title[step]}}{{title[resultCode]}}</div>
        <div
          :class="[{ img_2: step==2 && resultCode==1 }, { img_3: step==3 && resultCode==1 }, { img_1: resultCode==0 }]"
          class="img img-step"></div>
      </div>
    </div>
  </div>
</template>

<script>//
export default {
  props: {
    step: { type: Number },
    resultCode: { type: Number }
  },
  name: 'ResultShow',
  data: () => {
    return {
      title: ['失败', '成功',
        '绑定',
        '重置'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  div#ResultShow {
    margin-top: 20%;
    padding: 0;

    > div.wrap {
      text-align: center;
      width: 94%;
      margin: 0 auto;
      padding: 0 0;
      background-color: #1F2025;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);

      > h1.top {
        position: relative;
        z-index: 2;
        height: 17px;
      }

      > div.content {
        padding: 0 20px 30px 20px;

        > div.title {
          text-align: left;
          font-size: 18px;
          color: white;
          line-height: 26px;
          padding: 10px 0;
        }

        > div.img {
          width: 50%;
          padding: 25% 0;
          margin: 5% auto;
          background-size: 80% auto;
          background-position: center center;
          background-repeat: no-repeat;
        }

        .img_1 {
          background-image: url("../assets/personalCenter/phone_fail@2x.png");
          background-size: 100% auto !important;
        }

        .img_2 {
          background-image: url("../assets/personalCenter/phone_success@2x.png");
        }

        .img_3 {
          background-image: url("../assets/personalCenter/password_success@2x.png");
        }
      }
    }
  }
</style>
