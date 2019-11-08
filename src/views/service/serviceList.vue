<template>
  <div id="ServiceList">
    <router-link :class="len > 0 ? 'icon-shopCar-full' : 'icon-shopCar-empty'" to="shoppingCart"></router-link>
    <div class="item-wrap">
      <template v-if="ServerList.length > 0">
        <div :key="m.id" class="item" v-for="m in ServerList">
          <service-item :list="m" @showAttestation="showAttestation" @showFile="showFile"
                        @upDateLne="upDateLne"></service-item>
        </div>
      </template>
      <template v-else>
        <div class="no-content">暂无服务</div>
      </template>
    </div>
  </div>
</template>

<script>//
import ServiceItem from '../../components/ServiceItem'
import { ShoppingCar } from '../../tool/storeManage'
import { mapActions, mapState } from 'vuex'
import { GET_SERVER_LIST } from '../../vuex/Server'

export default {
  name: 'ServiceList',
  data: () => {
    return {
      len: ShoppingCar.History.length
    }
  },
  methods: {
    upDateLne () {
      this.len = ShoppingCar.History.length
    },
    showAttestation () {
      this.$emit('showAttestation')
    },
    showFile (obj) {
      this.$emit('showFile', obj)
    },
    ...mapActions({
      getServerList: GET_SERVER_LIST
    })
  },
  computed: {
    ...mapState({
      ServerList: state => state.server.ServerList
    })
  },
  mounted () {
    this.getServerList()
  },
  components: {
    ServiceItem
  }
}
</script>

<style lang="scss" scoped>
  #ServiceList {
    position: relative;
    z-index: 1;
    padding: 46px 0 54px 0;

    p {
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #DDD;
    }

    .icon-shopCar-empty, .icon-shopCar-full {
      position: fixed;
      z-index: 5;
      top: 65%;
      right: 0;
      width: 38px;
      height: 38px;
    }

    .item-wrap {
      padding: 2% 11%;
      overflow: hidden;

      .item {
        display: inline-block;
        width: 44%;
        float: left;

        &:nth-child(2n) {
          float: right;
        }
      }

      .no-content {
        text-align: center;
        font-size: 14px;
        color: #333;
        line-height: 30px;
      }
    }
  }
</style>
