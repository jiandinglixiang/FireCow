<template>
  <div id="PurchaseIntention">
    <router-link class="btn-add" replace to="/backCenter">添加购买意愿</router-link>
    <div class="item-wrap">
      <template v-if="WantedList.length > 0">
        <div :key="m.id" class="item" v-for="m in WantedList">
          <purchase-intention-item :WantedList="m"></purchase-intention-item>
        </div>
      </template>
      <template v-else>
        <div class="no-content">您尚未提交购买意愿</div>
      </template>
    </div>
  </div>
</template>

<script>//
import PurchaseIntentionItem from '../../components/PurchaseIntentionItem'
import { mapActions, mapState } from 'vuex'
import { GET_WANT_SERVICE } from '../../vuex/Mine'

export default {
  name: 'PurchaseIntention',
  methods: {
    ...mapActions({
      getWantServer: GET_WANT_SERVICE
    })
  },
  computed: {
    ...mapState({
      WantedList: state => state.mine.WantedList
    })
  },
  mounted () {
    this.getWantServer()
  },
  components: {
    PurchaseIntentionItem
  }
}
</script>

<style lang="scss" scoped>
  #PurchaseIntention {
    position: relative;
    z-index: 1;
    padding: 46px 0 54px 0;
    text-align: center;

    .btn-add {
      display: inline-block;
      text-align: center;
      width: 40%;
      height: 34px;
      line-height: 34px;
      font-weight: bold;
      margin: 15px 0;
      background-color: $main-color;
      border-top-left-radius: 8px;
      border-bottom-right-radius: 8px;
      color: white;
    }

    .item-wrap {
      width: 94%;
      margin: 0 auto;

      .no-content {
        text-align: center;
        font-size: 14px;
        color: #80828F;
        line-height: 30px;
      }
    }
  }
</style>
