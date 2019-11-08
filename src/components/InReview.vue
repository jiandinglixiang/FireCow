<template>
  <div id="InReview">
    <div class="wrap">
      <div class="title">您的企业认证正在审核中，请耐心等待！认证后可查看接口文档，测试接口！</div>
      <h1 class="top"></h1>
      <div class="content">
        <div class="img"></div>
      </div>
    </div>
  </div>
</template>

<script>//
export default {
  name: 'InReview'
}
</script>
<style lang="scss" scoped>
  div#InReview {
    margin-top: 20px;
    padding: 0;

    > div.wrap {
      padding: 0 15px;
      text-align: center;

      > div.title {
        display: inline-block;
        width: 90%;
        text-align: left;
        color: white;
        font-size: 14px;
        line-height: 22px;
        padding: 0 0 0 30px;
        background-image: url("../assets/personalCenter/ic_wait@2x.png");
        background-size: 22px auto;
        background-repeat: no-repeat;
        background-position: left top;
      }

      > h1.top {
        position: relative;
        z-index: 2;
        height: 17px;
        margin-top: 10px;
      }

      > div.content {
        padding: 8% 20px;
      }
    }
  }
</style>
