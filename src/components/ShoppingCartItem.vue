<template>
  <div id="ShoppingCartItem">
    <div class="title"><span>添加时间 {{ ShoppingCarList.time|formatDate }}</span>
      <button @click="deleteService">删除</button>
    </div>
    <div class="list-wrap">
      <table style="text-align: center" width="100%">
        <tr>
          <td width="100%">
            <i class="icon" v-bind:style="{ backgroundImage: 'url(' + ShoppingCarList.icon_url + ')' }"></i>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>//
import { MessageBox, Toast } from 'mint-ui'
import { formatDate } from '../tool/util'
import { ShoppingCar } from '../tool/storeManage'

export default {
  name: 'ShoppingCartItem',
  props: {
    ShoppingCarList: { type: Object }
  },
  methods: {
    deleteService () {
      MessageBox({
        title: '',
        message: '确认从购物车删除该服务?',
        showCancelButton: true,
        confirmButtonText: `删除`
      }).then(action => {
        if (action === 'confirm') {
          const his = ShoppingCar.History
          const index = his.findIndex(i => i.id === this.ShoppingCarList.id)
          his.splice(index, 1)
          ShoppingCar.History = his
          Toast('已删除该服务')
        }
      })
    }
  },
  filters: {
    formatDate
  },
  components: {
    [MessageBox.name]: MessageBox
  }
}
</script>
<style lang="scss" scoped>
  div#ShoppingCartItem {
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
        color: $font-color;
      }

      > button {
        color: $main-color;
        float: right;
        height: 34px;
        line-height: 36px;
        margin-right: 10px;
        transform: scale(0.85);
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
