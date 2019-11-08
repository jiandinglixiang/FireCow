<template>
  <div id="MyServiceItem">
    <div class="title">
      <span>有效期至 {{ MyServerList.expired_time|formatDate }}</span>
      <template v-if="MyServerList.status === 0">
        <i class="service-status over-date">已过期</i>
      </template>
      <template v-else>
        <i class="service-status">使用中</i>
      </template>
    </div>
    <div class="list-wrap">
      <table width="100%">
        <tr>
          <td width="82%">
            <i class="icon" v-bind:style="{ backgroundImage: 'url(' + MyServerList.project.icon_url + ')' }"></i>
          </td>
          <td width="18%">
            <router-link replace tag="button" to="/backCenter">续费</router-link>
            <button @click="showFile('file_url')">文档</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>//
import { formatDate } from '../tool/util'

export default {
  name: 'MyServiceItem',
  props: {
    MyServerList: { type: Object }
  },
  methods: {
    showFile (obj) {
      this.$emit('showFile', obj)
    }
  },
  filters: {
    formatDate
  }
}
</script>
<style lang="scss" scoped>
  div#MyServiceItem {
    /*position: relative;*/
    margin: 5% 0;
    background-color: #1F2025;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);

    > div.title {
      width: 95%;
      margin: 0 auto;
      height: 34px;
      line-height: 36px;
      text-align: left;
      font-size: 12px;
      border-bottom: 1px solid #43454C;

      > span {
        color: #80828F;
      }

      > i.service-status {
        position: relative;
        font-style: normal;
        font-weight: bold;
        float: right;
        color: $main-color;

        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50px;
          background-color: $main-color;
          margin-top: 15px;
          margin-left: -12px;
        }

        &.over-date {
          color: gray;
        }

        &.over-date:before {
          background-color: gray;
        }
      }
    }

    .list-wrap {
      position: relative;
      /*z-index: 1;*/
      padding: 2% 10px 3% 10px;
      text-align: left;
      color: #333;

      button {
        display: block;
        width: 100%;
        padding: 5% 0;
        border: 1px solid $main-color;
        font-size: 12px;
        color: white;
        background-color: $main-color;
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;

        &:nth-child(2) {
          background-color: #612821;
          margin-top: 10px;
        }
      }

      .icon {
        display: inline-block;
        width: 40px;
        height: 40px;
        background-size: 100% 100%;
      }
    }
  }
</style>
