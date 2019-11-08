<template>
  <div id="CompanyInfo">
    <div class="wrap">
      <div class="title">企业认证已通过！可查看接口文档，测试接口！</div>
      <h1 class="top"></h1>
      <div class="content">
        <div><span>企业名称</span><span>{{CompanyInfo.title}}</span></div>
        <div><span>联系人</span><span>{{CompanyInfo.name}}</span></div>
        <div><span>联系电话</span><span>{{CompanyInfo.mobile}}</span></div>
        <div><span>常用QQ</span><span>{{CompanyInfo.qq}}</span></div>
        <div class="img-wrap"><span>营业执照</span>
          <div class="img" v-bind:style="{ backgroundImage: 'url(' + CompanyInfo.img + ')' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>//
import { mapActions, mapState } from 'vuex'
import { GET_USER_INFO } from '@/vuex/Mine'

export default {
  name: 'CompanyInfo',
  method: {
    ...mapActions({
      getUserInfo: GET_USER_INFO
    })
  },
  computed: {
    ...mapState({
      CompanyInfo: state => state.mine.CompanyInfo
    })
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>
<style lang="scss" scoped>
  div#CompanyInfo {
    margin-top: 20px;
    padding: 0;

    > div.wrap {
      padding: 0 15px;
      text-align: center;

      > div.title {
        display: inline-block;
        text-align: left;
        color: white;
        font-size: 13px;
        line-height: 22px;
        padding: 0 0 0 30px;
        background-image: url("../assets/personalCenter/serve_ic_sure@2x.png");
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
        text-align: left;
        padding: 10px 20px;

        > div {
          margin-bottom: 6%;
          font-size: 14px;

          span:nth-child(1) {
            display: inline-block;
            width: 60px;
            text-align: right;
            color: white;
            margin-right: 30px;
          }

          span:nth-child(2) {
            color: #80828F;
          }
        }

        > div.img-wrap {
          > span {
            float: left;
          }

          > div.img {
            display: inline-block;
            background-color: $bg-color;
            width: 50%;
            padding: 25% 0;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
          }
        }
      }
    }
  }
</style>
