<template>
  <div id="shoppingCart">
    <button @click="goServiceList" class="button goBack">添加购买意愿</button>
    <div class="item-wrap">
      <template v-if="ShoppingCarList.length > 0">
        <div :key="m.id" class="item" v-for="m in ShoppingCarList">
          <shopping-cart-item :ShoppingCarList="m"></shopping-cart-item>
        </div>
      </template>
      <template v-else>
        <div class="no-content">购物车为空</div>
      </template>
    </div>
    <div style="text-align: right">
      <button @click="emptyShoppingCar" class="button empty">清空购物车</button>
      <button @click="handOn" class="button submit">提交购买意愿</button>
    </div>
  </div>
</template>

<script>//
import { MessageBox, Toast } from 'mint-ui'
import ShoppingCartItem from '../../components/ShoppingCartItem'
import { ShoppingCar } from '../../tool/storeManage'
import { mapActions } from 'vuex'
import { ADD_PURCHASE_INTENTION } from '@/vuex/Mine'

export default {
  name: 'shoppingCart',
  data: () => {
    return {
      ShoppingCarList: ShoppingCar.History
    }
  },
  methods: {
    emptyShoppingCar () {
      MessageBox({
        title: '',
        message: '确认清空购物车?',
        showCancelButton: true,
        confirmButtonText: `清空`
      }).then(action => {
        if (action === 'confirm') {
          ShoppingCar.clearHistory()
          this.ShoppingCarList = []
          Toast('购物车已清空')
        }
      })
    },
    handOn () {
      if (this.ShoppingCarList.length > 0) {
        const arr = []
        $.each(this.ShoppingCarList, function (n, val) {
          arr.push(val.id)
        })
        const param = {
          pids: arr,
          remarks: ''
        }
        this.addPurchaseIntention(param)
      } else {
        Toast('无可提交服务')
      }
    },
    goServiceList () {
      this.$router.go(-1)
    },
    ...mapActions({
      addPurchaseIntention: ADD_PURCHASE_INTENTION
    })
  },
  components: {
    ShoppingCartItem,
    [MessageBox.name]: MessageBox
  }
}
</script>

<style lang="scss" scoped>
  #shoppingCart {
    position: relative;
    z-index: 1;
    padding: 46px 15px 54px 15px;
    text-align: center;

    .button {
      height: 34px;
      line-height: 34px;
      border: none;
      outline: none;
      box-shadow: none;
      font-weight: bold;
      margin: 15px 0;
      border-top-left-radius: 8px;
      border-bottom-right-radius: 8px;

      &.goBack {
        width: 45%;
        background-color: $main-color;
        color: white;
      }

      &.submit {
        width: 40%;
        border: 1px solid $main-color;
        background-color: rgba(232, 50, 23, 0.2);
        color: $main-color;
      }

      &.empty {
        float: left;
        width: 40%;
        border: 1px solid #999;
        background-color: rgba(153, 153, 153, 0.2);
        color: $font-color;
        font-weight: bold;
      }
    }

    .item-wrap {
      .no-content {
        text-align: center;
        font-size: 14px;
        color: #80828F;
        line-height: 30px;
      }
    }
  }
</style>
