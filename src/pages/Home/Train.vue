<template>
  <div class="treroad-train-search">
    <div class="treroad-train-switch">
      <div class="treroad-train-trainSwitch"></div>
      <div class="treroad-train-mrtSwitch"></div>
      <span class="treroad-train-trainSwitchSpan">雙鐵查詢</span>
      <router-link to="mrt"><span class="treroad-train-mrtSwitchSpan">捷運轉乘</span></router-link>
    </div>
    <div class="treroad-train-selectStation">
      <p>選擇站名</p>
      <input type="button" value="起始站">
      <input type="button" value="終點站">
      <img class="transfer" src="../../assets/iconTransfer.png" alt="transfer">
    </div>
    <div class="treroad-train-selectTime">
      <p>選擇時間</p>
      <select name="" id="">
        <option value="">今天 10月30日</option>
      </select>
      <div class="treroad-train-hourAndMinute">
        <input type="text" maxlength="2">
        時
        <input type="text" maxlength="2">
        分
      </div>
    </div>
    <button class="startSearch">開始查詢</button>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {}
  },
  computed: {},
  components: {},
  watch: {},
  mixins: [],
  methods: {},
  // Life cycle hook
  beforeCreate () {},
  mounted () {}
}
</script>

<style lang="sass" scoped>
  .treroad-train-search
    position: relative
    width: 480px
    min-height: 205px
    margin: 60px auto 0 auto
    padding: 17px 30px
    border-radius: 18px
    background: rgb(239, 242, 245)
    box-sizing: border-box
    display: flex
    justify-content: space-between
    align-items: flex-start
    @media screen and (max-width: 515px)
      width: 100%
      flex-direction: column
    div
      width: 45%
      height: 120px
      color: rgb(74, 74, 74)
    .treroad-train-switch
      display: flex
      justify-content: space-around
      width: 200px
      height: 40px
      padding: 0 10px
      position: absolute
      bottom: 100%
      left: calc(50% - 100px)
      overflow: hidden
      a
        z-index: 2
        margin-top: 15px
        text-decoration: none
      .treroad-train-trainSwitch, .treroad-train-mrtSwitch
        width: 45%
        height: 100%
        position: absolute
        border-radius: 10px
        transform: perspective(.5em) rotateX(2deg)
        bottom: -10px
      .treroad-train-trainSwitch
        background: #eff2f5
        left: 5%
        z-index: 1
      .treroad-train-mrtSwitch
        background: #44c7a8
        right: 5%
      .treroad-train-trainSwitchSpan
        color: #4a4a4a
        z-index: 2
        margin-top: 15px
      .treroad-train-mrtSwitchSpan
        color: white
        z-index: 2
        margin-top: 15px
    .treroad-train-selectStation
      position: relative
      @media screen and (max-width: 515px)
        width: 100%
      input
        margin-top: 14px
        padding-left: 8px
        width: 100%
        height: 35px
        border-radius: 10px
        font-size: 16px
        text-align: left
        color: rgb(155, 155, 155)
        background-color: white
        border: 1px solid rgb(102, 123, 134)
      .transfer
        position: absolute
        bottom: 30px
        left: calc(50% - 14px)
        cursor: pointer
    .treroad-train-selectTime
      @media screen and (max-width: 515px)
        width: 100%
        margin-top: 20px
      select
        width: 100%
        height: 35px
        border-radius: 10px
        margin-top: 14px
        padding: 6px 8px
        font-size: 16px
        color: rgb(74, 74, 74)
        border: 1px solid rgb(102, 123, 134)
        appearance: none
        background-image: url(../../assets/down.png)
        background-repeat: no-repeat
        background-position: 95% center
        @media screen and (max-width: 515px)
          width: 45%
          background: white
      .treroad-train-hourAndMinute
        width: 100%
        height: 35px
        margin-top: 14px
        letter-spacing: 4px
        @media screen and (max-width: 515px)
          width: 50%
          display: inline
          margin-left: 10px
          letter-spacing: 0
        input
          width: 48px
          height: 35px
          border-radius: 10px
          border: 1px solid rgb(102, 123, 134)
          text-align: center
          box-sizing: border-box
          font-size: 16px
          color: rgb(74, 74, 74)
          margin-right: 2px
          @media screen and (max-width: 515px)
            width: 44px
    .startSearch
      width: 120px
      height: 36px
      border-radius: 18px
      position: absolute
      left: calc(50% - 60px)
      bottom: 16px
      font-size: 16px
      color: white
      background: rgb(68, 199, 168)
      cursor: pointer
      border: 0px
</style>
