<template>
  <div id="ServiceItem">
    <div class="img" v-bind:style="{ backgroundImage: 'url(' + list.img_url + ')' }"><span class="icon"
                                                                                           v-bind:style="{ backgroundImage: 'url(' + list.icon_url + ')' }"></span>
    </div>
    <div class="btn-group">
      <template v-if="EnterpriseStatus===1">
        <button @click="addShoppingCart()">购买</button>
        <button @click="showFile('file_url')">文档</button>
      </template>
      <template v-else>
        <button @click="showAttestation" class="one">购买/试用</button>
      </template>
    </div>
  </div>
</template>

<script>//
import { Toast } from 'mint-ui'
import { mapState } from 'vuex'
import { ShoppingCar } from '../tool/storeManage'

export default {
  name: 'ServiceItem',
  props: {
    list: { type: Object }
  },
  computed: {
    ...mapState({
      EnterpriseStatus: state => state.mine.EnterpriseStatus
    })
  },
  methods: {
    addShoppingCart () {
      if (ShoppingCar.History.length > 0) {
        if (ShoppingCar.History.findIndex(i => i.id === this.list.id) === -1) {
          const obj = {
            time: (new Date()).getTime(),
            ...this.list
          }
          const his = [...ShoppingCar.History]
          his.unshift(obj)
          ShoppingCar.History = his
          Toast('已添加到购物车')
        } else {
          Toast('购物车已有该服务')
        }
      } else {
        const obj = {
          time: (new Date()).getTime(),
          ...this.list
        }
        const his = []
        his.push(obj)
        ShoppingCar.History = his
        Toast('已添加到购物车')
      }
      this.$emit('upDateLne')
    },
    showAttestation () {
      this.$emit('showAttestation')
    },
    showFile (obj) {
      this.$emit('showFile', obj)
    }
  }
}
</script>
<style lang="scss" scoped>
  div#ServiceItem {
    position: relative;
    margin-bottom: 4%;

    > div.img {
      position: relative;
      width: 100%;
      padding: 70% 0;
      background-size: 100% 100%;
      background-position: center top;
      background-repeat: no-repeat;

      > span.icon {
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        width: 46%;
        padding: 23% 0;
        margin: 15% 0 0 27%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
      }

      > span.service-status {
        display: inline-block;
        position: absolute;
        right: 0;
        top: 0;
        width: 40px;
        height: 88px;
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: left top;
        margin-top: -3px;
        margin-right: 17px;

        &.done {
          background-image: url("data:image/png;base64,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");
        }
      }
    }

    .btn-group {
      padding: 2% 0;
      text-align: center;

      > button {
        padding: 2% 0;
        border: 1px solid $main-color;
        font-size: 12px;
        width: 42%;
        color: white;
        background-color: $main-color;
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;

        &:nth-child(2) {
          background-color: #612821;
          margin-left: 6%;
        }

        &.one {
          width: 94%;
        }
      }
    }
  }
</style>
