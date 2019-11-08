<template>
  <div id="AttestationForm">
    <div class="wrap">
      <div class="title">您的企业尚未认证！认证后可查看接口文档，测试接口！</div>
      <h1 class="top"></h1>
      <div class="content">
        <div><span>企业名称</span><input placeholder="营业执照上的公司名称" type="text" v-model="title"/></div>
        <div><span>联系人</span><input placeholder="请输入联系人" type="text" v-model="name"/></div>
        <div><span>联系电话</span><input @input="handleInputNum" maxlength="11" placeholder="请输入联系人电话" type="text"
                                     v-model="mobile"/></div>
        <div><span>常用QQ</span><input @input="handleInputQQ" maxlength="25" placeholder="用于商务洽谈，请确保真实有效" type="text"
                                     v-model="qq"/></div>
        <div class="img-wrap">
          <span>营业执照</span>
          <div>
            <label class="btn-up" for="file">点击上传图片<input @change="FileChange" accept="image/*" id="file" name="file"
                                                          type="file"/></label><br>
            <div class="img" id="image"></div>
          </div>
        </div>
        <div class="btn-group">
          <button :class="{ 'readed': this.statusRead }" @click="switchReadStatus" class="btn-read">我已阅读并同意</button>
          <button @click="showDisclaimer" class="btn-text">免责声明</button>
          <br>
          <button @click="submitInfo" class="btn-submit"
                  v-bind:class="{'available': title && name && mobile && qq && fileUrl && statusRead}"
                  v-bind:disabled="!title || !name || !mobile || !qq || !fileUrl || !statusRead">提交认证信息
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>//
import { Toast } from 'mint-ui'
import Util from '@/tool/util'
import { mapActions } from 'vuex'
import { ADD_ENTERPRISE_CERTIFICATION } from '@/vuex/Mine'

export default {
  name: 'AttestationForm',
  data: () => {
    return {
      title: '',
      name: '',
      mobile: '',
      qq: '',
      fileUrl: '',
      fileObj: '',
      statusRead: false
    }
  },
  methods: {
    FileChange (event) {
      if (/.*(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(event.target.value)) {
        this.fileObj = event.target.files[0]
        const windowURL = window.URL || window.webkitURL
        const dataUrl = windowURL.createObjectURL(event.target.files[0])
        const image$ = document.getElementById('image')
        image$.style.backgroundImage = 'url(\'' + dataUrl + '\')'
        this.fileUrl = dataUrl
      } else {
        Toast('错误文件格式,请重新选择!')
      }
    },
    showDisclaimer () {
      this.$emit('showDisclaimer')
    },
    switchReadStatus () {
      this.statusRead = !this.statusRead
    },
    submitInfo () {
      if (this.title && this.name && this.mobile && this.qq && this.fileUrl && this.statusRead) {
        if (!Util.isMobile(this.mobile)) {
          Toast('请输入正确的手机号!')
          return
        }
        if (!Util.isQQ(this.qq)) {
          Toast('请输入正确的QQ号码!')
          return
        }

        var formData = new FormData()
        formData.append('file', this.fileObj) // 添加图片信息的参数
        formData.append('title', this.title)
        formData.append('name', this.name)
        formData.append('mobile', this.mobile)
        formData.append('qq', this.qq)

        console.log(this.fileObj)
        this.postCompanyInfo({
          param: formData,
          func: () => {
            this.$emit('showAttestationStatus')
          }
        })
      }
    },
    handleInputNum (e) {
      this.mobile = e.target.value.replace(/[^\d]/g, '')
    },
    handleInputQQ (e) {
      this.qq = e.target.value.replace(/[^\d]/g, '')
    },
    ...mapActions({
      postCompanyInfo: ADD_ENTERPRISE_CERTIFICATION
    })
  }
}
</script>
<style lang="scss" scoped>
  div#AttestationForm {
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
        background-image: url("../assets/personalCenter/serve_ic_warm@2x.png");
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
        overflow: hidden;

        > div {
          margin-bottom: 6%;
          font-size: 13px;

          span:nth-child(1) {
            position: relative;
            display: inline-block;
            height: 28px;
            line-height: 28px;
            width: 60px;
            text-align: left;
            color: white;
            margin-right: 30px;

            &:before {
              content: '*';
              color: $main-color;
              font-size: 12px;
              position: absolute;
              left: -10px;
              top: 2px;
            }
          }

          input {
            color: white;
            font-size: 13px;
            outline: none;
            height: 28px;
            line-height: 28px;
            border: none;
            border-bottom: 1px solid #43454C;
            width: calc(100% - 90px);
          }
        }

        > div.img-wrap {
          > span {
            float: left;
          }

          > div {
            display: inline-block;
            width: calc(100% - 90px);

            > .btn-up {
              position: relative;
              display: inline-block;
              width: 60%;
              color: white;
              height: 30px;
              line-height: 30px;
              background-color: #2F3037;
              border-top-left-radius: 8px;
              border-bottom-right-radius: 8px;
              text-align: center;

              input {
                position: absolute;
                opacity: 0;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
              }
            }

            > div.img {
              margin-top: 10px;
              display: inline-block;
              background-color: $bg-color;
              background-image: url("../assets/personalCenter/serve_sel_pic@2x.png");
              background-repeat: no-repeat;
              background-position: center center;
              background-size: contain;
              width: 40%;
              padding: 20% 0;
            }
          }
        }

        > div.btn-group {
          display: inline-block;
          float: right;
          text-align: right;

          .btn-read, .btn-text {
            color: $main-color;
            background: none;
          }

          .btn-read {
            padding-left: 20px;
            background-image: url("../assets/personalCenter/tick_nor@2x.png");
            background-repeat: no-repeat;
            background-position: left center;
            background-size: auto 95%;
          }

          .btn-read.readed {
            background-image: url("../assets/personalCenter/tick_on@2x.png");
          }

          .btn-text {
            text-decoration: underline;
          }

          .btn-submit {
            width: 100%;
            margin-top: 10px;
            background-color: #CCCCCC;
            border-radius: 6px;
            padding: 6px 0;
            color: white;
            font-weight: bold;

            &.available {
              background-color: $main-color;
            }
          }
        }
      }
    }
  }
</style>
