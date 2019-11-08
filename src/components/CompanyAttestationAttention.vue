<template>
  <div id="CompanyAttestationAttention">
    <div @click="onCloseDialog" class="mask"></div>
    <div class="content">
      <div class="message">请先进行企业认证，再申请试用</div>
      <div class="btn-group">
        <button @click="onCloseDialog" class="button cancel">稍后认证</button>
        <button @click="toCompanyAttestation" class="button confirm">立即认证</button>
      </div>
    </div>
  </div>
</template>

<script>//
export default {
  name: 'CompanyAttestationAttention',
  data: () => {
    return {
      dialogShow: false
    }
  },
  methods: {
    onCloseDialog () {
      this.$emit('close')
    },
    toCompanyAttestation () {
      this.$emit('close')
      this.$router.push({ name: 'companyAttestation' })
    }
  }
}
</script>
<style lang="scss" scoped>
  div#CompanyAttestationAttention {
    position: absolute;
    z-index: 5;
    width: 100%;
    max-width: 640px;
    height: 100%;
    top: 0;

    > div.mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 2;
    }

    > div.content {
      position: relative;
      z-index: 3;
      width: 70%;
      background-color: #1F2026;
      margin-left: 15%;
      padding: 0 0;
      top: calc((100vh - 156px) / 2);
      text-align: center;

      > div.message {
        font-size: 16px;
        color: white;
        line-height: 26px;
        padding: 40px 0;
      }

      > div.btn-group {
        text-align: center;
        padding-bottom: 20px;

        .button {
          display: inline-block;
          width: 40%;
          height: 30px;
          color: white;
          margin: 0;
          padding: 0;
          font-size: 15px;
          border-bottom-right-radius: 8px;
          border-top-left-radius: 8px;
        }

        .cancel {
          background-color: #31323B;
          margin-right: 10px;
        }

        .confirm {
          background: $main-color;
        }
      }
    }
  }
</style>
