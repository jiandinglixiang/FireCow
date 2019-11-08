<template>
  <div id="ESportGames">
    <ul>
      <li>
        <div></div>
        <div>
          <p>
            <i>- 赛事名称</i>
            <i>- 赛事日程</i>
            <i>- 参赛队伍</i>
            <i>- 赛事奖金</i>
            <i>MORE +</i>
          </p>
        </div>
      </li>
      <li>
        <div></div>
        <div>
          <p>
            <i>- 战队信息</i>
            <i>- 赛事情况</i>
            <i>- 交手记录</i>
            <i>- BP记录&ensp;</i>
            <!--<i>- 出场名单</i>-->
            <i>MORE +</i>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>//
export default {
  name: 'ESportGames'
}
</script>
<style lang="scss" scoped>
  #ESportGames {
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
            background-image: url("../../../assets/home/produce_list@2x.png");
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
              background-image: url("../../../assets/home/produce_detail@2x.png");
            }
          }
        }
      }
    }
  }
</style>
