<template>
  <div id="PurchaseIntentionItem">
    <div class="title"><span>有效期至 {{ WantedList.time|formatDate }}</span><i
      v-bind:class="[WantedList.status === 1 ? 'icon-handle-status-processed' : 'icon-handle-status-untreated']"></i>
    </div>
    <div class="list-wrap">
      <table width="100%">
        <tr>
          <td width="100%">
            <i :key="m.id" class="icon" v-bind:style="{ backgroundImage: 'url(' + m.icon_url + ')' }"
               v-for="m in WantedList.projects_data"></i>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>//
import { formatDate } from '../tool/util'

export default {
  name: 'PurchaseIntentionItem',
  props: {
    WantedList: { type: Object }
  },
  filters: {
    formatDate
  }
}
</script>
<style lang="scss" scoped>
  div#PurchaseIntentionItem {
    position: relative;
    margin: 5% 0;
    background-color: #1F2025;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);

    > div.title {
      width: 95%;
      margin: 0 auto;
      position: relative;
      height: 34px;
      line-height: 36px;
      text-align: left;
      font-size: 12px;
      border-bottom: 1px solid #43454C;

      > span {
        color: #80828F;
      }

      > i.icon-handle-status-untreated, i.icon-handle-status-processed {
        position: absolute;
        z-index: 2;
        right: 0;
        top: -4px;
        width: 25px;
        height: 56px;
        background-size: 100% auto;
      }
    }

    .list-wrap {
      position: relative;
      z-index: 1;
      padding: 2% 10px 3% 10px;
      text-align: left;
      color: #333;

      .icon {
        display: inline-block;
        width: 50px;
        height: 50px;
        background-size: 100% 100%;
      }
    }
  }
</style>
