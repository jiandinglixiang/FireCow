<template>
  <div id="case">
    <div class="title"></div>
    <ul>
      <li>
        <div class="logo"></div>
      </li>
      <li>
        <div class="logo"></div>
      </li>
      <li>
        <div class="logo"></div>
      </li>
    </ul>
    <ul class="th2">
      <li>
        <div class="logo"></div>
      </li>
      <li>
        <div class="logo"></div>
      </li>
    </ul>
  </div>
</template>

<script>//
export default {
  name: 'case',
  mounted () {

  }
}
</script>
<style lang="scss" scoped>
  #case {
    /*position: absolute;*/
    /*top: 100%;*/
    width: 100%;
    max-width: 640px;
    z-index: 2;
    padding-top: 8%;
    padding-bottom: 4%;
    background-color: #111216;
    text-align: center;

    > div.title {
      width: 100%;
      height: 26px;
      margin: 0 0 1% 0;
      background-image: url("../../assets/home/title_case@2x.png");
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: center top;
    }

    > ul {
      list-style: none;
      width: 85%;
      margin: 7% auto 0 auto;
      zoom: 1;
      text-align: center;

      &:after {
        content: '';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }

      > li {
        position: relative;
        width: 20%;
        padding: 11.5% 0;
        display: inline-block;
        margin-bottom: 0;

        > div.logo {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center center;
        }

        &:nth-child(1) {
          float: left;

          > div.logo {
            margin-left: 0;
            background-image: url("../../assets/home/case/case_Vdianjing1.png");
          }
        }

        &:nth-child(2) {
          > div.logo {
            background-image: url("../../assets/home/case/case_Vdianjing2.png");
          }
        }

        &:nth-child(3) {
          float: right;

          > div.logo {
            background-image: url("../../assets/home/case/case_Vdianjing3.png");
          }
        }

      }

      &:last-child {
        margin-top: 2%;
        text-align: center;

        > li {
          float: none;

          > div.logo {
          }

          &:nth-child(1) {
            margin-right: 20%;

            > div.logo {
              background-image: url("../../assets/home/case/case_Vdianjing4.png");
            }
          }

          &:nth-child(2) {
            > div.logo {
              background-image: url("../../assets/home/case/case_Vdianjing5.png");

            }
          }
        }
      }

    }
  }
</style>
