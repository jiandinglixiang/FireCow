<template>
  <div id="dataProducts">
    <ul>
      <li>
        <div></div>
        <div>
          <p>
            <i>- 实时比分</i>
            <i>- 赛事情况</i>
            <i>- 完场比分</i>
            <i>MORE +</i>
          </p>
        </div>
      </li>
      <li>
        <div></div>
        <div>
          <p>
            <i>- 比赛获胜</i>
            <i>- 单局获胜</i>
            <i>- 全场比分</i>
            <!--<i>- 率先一塔</i>-->
            <!--<i>- 比赛让分</i>-->
            <!--<i>- 率先一血</i>-->
            <!--<i>- 人头单双</i>-->
            <i>MORE +</i>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>//
export default {
  name: 'dataProducts'
}
</script>
<style lang="scss" scoped>
  #dataProducts {
    position: relative;

    > ul {
      margin-top: 5%;
      list-style: none;

      > li {
        padding: 0 3%;
        margin-bottom: 10%;
        text-align: left;

        > div {
          display: inline-block;

          &:nth-child(1) {
            width: 53.5%;
            padding: 35% 0;
            background-image: url("../../../assets/home/produce_data@2x.png");
            background-size: 100% auto;
            background-position: left top;
            background-repeat: no-repeat;
          }

          &:nth-child(2) {
            position: relative;
            float: right;
            font-size: 13px;
            color: white;
            width: 42.6%;
            padding: 35% 0;
            background-image: url("../../../assets/home/produce_text_bg@2x.png");
            background-size: 100% auto;
            background-position: left top;
            background-repeat: no-repeat;

            > p {
              position: absolute;
              left: 0;
              top: 0;
              text-align: center;
              width: 100%;
              height: 100%;
              display: flex;
              flex-flow: column nowrap;
              align-items: center;
              flex-direction: column;
              justify-content: center;

              > i {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                line-height: 27px;
                font-size: 15px;
                font-style: normal;
              }
            }
          }
        }

        &:nth-child(2) {
          > div {
            &:nth-child(1) {
              background-image: url("../../../assets/home/produce_play@2x.png");
            }
          }
        }
      }
    }
  }
</style>
