<template>
  <div id="MyService">
    <key-item></key-item>
    <div class="item-wrap">
      <template v-if="MyServerList.length > 0">
        <div :key="m.id" class="item" v-for="m in MyServerList">
          <my-service-item :MyServerList="m" @showFile="showFile"></my-service-item>
        </div>
      </template>
      <template v-else>
        <div class="no-content">已购买产品为0</div>
      </template>
    </div>
  </div>
</template>

<script>//
import MyServiceItem from '../../components/MyServiceItem'
import KeyItem from '../../components/KeyItem'
import { mapActions, mapState } from 'vuex'
import { GET_HAVE_SERVICE } from '../../vuex/Mine'

export default {
  components: { KeyItem, MyServiceItem },
  name: 'MyService',
  methods: {
    showFile (obj) {
      this.$emit('showFile', obj)
    },
    ...mapActions({
      getHaveService: GET_HAVE_SERVICE
    })
  },
  computed: {
    ...mapState({
      MyServerList: state => state.mine.MyServerList
    })
  },
  mounted () {
    this.getHaveService()
  }
}
</script>

<style lang="scss" scoped>
  #MyService {
    position: relative;
    z-index: 1;
    padding: 46px 0 54px 0;

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
