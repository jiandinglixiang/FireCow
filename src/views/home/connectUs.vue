<template>
  <div id="connectUs">
    <div class="about-us-wrap">
      <div class="title"></div>
      <div class="cont">
        <ul>
          <li>
            <div class="connectUsimg" id="connectUsimg"></div>
            <div class="txt">
              <h1>电竞探索者</h1>
              <p>我们拥有成熟的研发技术团队，团队成员拥有超10年行业相关经验以及资源，同时具备完善的软硬件技术。我们将电子竞技的一切作为我们未来产品和服务的根本。&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>
            </div>
          </li>
          <li>
            <div class="connectUsimg"></div>
            <div class="txt">
              <h1>数据服务商</h1>
              <p>数据服务是我们的产品核心也是我们的立足根本，致力于电子竞技，个性化建议和即时数据展示等数据服务。坚持不断创新，实现客户所想，玩家所需，致力成为与时俱进的电竞数据服务商。</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="contact-us-wrap">
      <div class="title"></div>
      <div class="cont">
        <p>福建四合文化传媒有限公司</p>
        <p class="phone">热线: 400-1757886</p>
        <p class="wechat">微信: 17706925783</p>
        <p class="QQ">Q&ensp;Q: 3174237134</p>
        <p class="email">邮箱: linhanying@sihemedia.com</p>
        <p class="addicon">地址: 福建省福州市海峡红坊创意园3#207</p>
      </div>
    </div>
    <div class="footer">
      <p>闽ICP备15025273号-3/Copyright©2018-2019&ensp;All&ensp;rights&ensp;reserved<br>闽网文[2018]3710-178号</p>
    </div>
  </div>
</template>

<script>//
export default {
  name: 'connectUs',
  mounted () {
    window.addEventListener('load', function () {
      var hv = document.getElementById('connectUsimg').offsetHeight * 0.95
      $('.connectUsimg').css('width', hv + 'px')
    })

    window.addEventListener('resize', function () {
      var hv = document.getElementById('connectUsimg').offsetHeight * 0.95
      $('.connectUsimg').css('width', hv + 'px')
    })
  }
}
</script>
<style lang="scss" scoped>
  #connectUs {
    /*position: absolute;*/
    /*top: 100%;*/
    width: 100%;
    max-width: 640px;
    z-index: 1;
    /*padding-top: 48px;*/
    background-image: url("../../assets/home/about_bg@2x.jpg");
    background-size: cover;
    background-position: center center;
    text-align: center;
    padding-top: 8%;

    > div.about-us-wrap {
      > div.title {
        width: 100%;
        height: 26px;
        margin: 0 auto 5% auto;
        background-image: url("../../assets/home/title_about@2x.png");
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: center top;
      }

      > div.cont {
        margin: 0 auto;
        text-align: left;
        padding-bottom: 2%;

        > ul {
          width: 100%;
          margin: 0 auto;
          list-style: none;
          transform: scale(0.80);

          & {
            @media screen and (max-width: 414px) {
              transform: scale(0.85);
            }
          }

          & {
            @media screen and (max-width: 375px) {
              transform: scale(0.80);
            }
          }

          & {
            @media screen and (max-width: 320px) {
              transform: scale(0.80);
            }
          }

          > li {
            position: relative;
            background-color: #111216;
            background-size: auto 100%;
            background-position: left center;
            background-repeat: no-repeat;
            margin-bottom: 10%;
            text-align: right;

            > div.txt {
              transform: scale(0.95);
              /*position: absolute;*/
              /*top: 0;*/
              display: inline-block;
              /*float: right;*/
              margin-right: -5%;
              width: 85%;
              text-align: left;

              > h1 {
                background-image: url("../../assets/home/line@2x.png");
                background-repeat: no-repeat;
                background-position: 0 center;
                background-size: auto 70%;
                color: #E83818;
                font-size: 14px;
                text-align: left;
                font-weight: normal;
                padding: 0 0 0 10px;
                margin-bottom: 5px;
              }

              > p {
                color: #8B8B8F;
                font-size: 12px;
                line-height: 18px;
                padding-left: 0;
                padding-right: 0;
                text-wrap: normal;
                word-break: break-all;
              }
            }

            > div.connectUsimg {
              position: absolute;
              /*left: 0; top: 0;*/
              width: 15%;
              height: 100%;
              margin-left: -4%;
              /*padding: 0 14%;*/
              /*height: 100%;*/
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center center;
              /*> img {*/
              /*width: 100%;*/
              /*}*/
            }

            &:last-child {
              margin-bottom: 0;
            }

            @media screen and (max-width: 414px) {
              > div.txt {
                transform: scale(1);
                margin-right: -4%;
              }

              > div.connectUsimg {
                position: absolute;
                width: 15%;
                height: 100%;
                margin-left: -2%;
              }
            }
            @media screen and (max-width: 375px) {

              > div.txt {
                transform: scale(1);
                margin-right: -8%;
              }

            }
            @media screen and (max-width: 375px) {

              > div.txt {
                transform: scale(0.95);
                margin-right: -8%;
              }
              > div.connectUsimg {
                margin-left: -4%;
              }

            }

            @media screen and (max-width: 320px) {

              > div.txt {
                transform: scale(0.95);
                margin-right: -10%;
              }

            }

            &:first-child {
              > div.connectUsimg {
                background-image: url("../../assets/home/icon_play@2x.png");
              }

            }

            &:last-child {
              > div.connectUsimg {
                background-image: url("../../assets/home/icon_data@2x.png");
              }
            }
          }
        }
      }
    }

    > div.contact-us-wrap {
      > div.title {
        width: 100%;
        height: 26px;
        margin: 5% 0;
        background-image: url("../../assets/home/title_contact@2x.png");
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: center top;
      }

      > div.cont {
        width: 80%;
        margin: 13px auto 0 auto;
        text-align: left;
        padding-bottom: 2%;
        font-size: 14px;

        > p {
          background-color: #111216;
          color: #8B8B8F;
          height: 35px;
          font-size: 12px;
          line-height: 35px;
          padding-left: 35px;
          background-repeat: no-repeat;
          background-size: auto 16px;
          background-position: 10px center;

          &:first-child {
            background-color: #2F3138;
            color: #E83818;
            height: 29px;
            font-size: 14px;
            line-height: 29px;
            padding-left: 35px;
            background-image: url("../../assets/home/line@2x.png");
            background-repeat: no-repeat;
            background-position: 17px center;
            background-size: auto 50%;
          }

          &.phone {
            padding-top: 5px;
            background-image: url("../../assets/home/icon_phone@2x.png");
            background-position: 12px 13px;
          }

          &.wechat {
            background-image: url("../../assets/home/icon_wechat@2x.png");
          }

          &.QQ {
            background-image: url("../../assets/home/icon_QQ@2x.png");
          }

          &.email {
            padding: 0 0 3px 35px;
            /*line-height: 26px;*/
            /*height: 55px;*/
            line-height: 35px;
            height: 35px;
            background-size: auto 14px;
            background-image: url("../../assets/home/icon_email@2x.png");
            /*background-position: 8px 6px;*/
            background-position: 8px 10px;
          }

          &.addicon {
            background-image: url("../../assets/home/icon_addicon@2x.png");
          }

        }
      }
    }

    .footer {
      width: 100%;
      background-color: #0E0F11;

      > p {
        color: #FFFFFF;
        opacity: 0.8;
        font-size: 12px;
        line-height: 22px;
        padding: 25px 0;
        text-align: center;
      }
    }
  }
</style>
