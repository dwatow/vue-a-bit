<template>
  <div class="treroad-mrt-search">
    <div class="treroad-mrt-switch">
      <div class="treroad-mrt-trainSwitch"></div>
      <div class="treroad-mrt-thsrSwitch"></div>
      <div class="treroad-mrt-mrtSwitch"></div>
      <router-link to="train"><span class="treroad-mrt-trainSwitchSpan">台鐵查詢</span></router-link>
      <router-link to="thsr"><span class="treroad-mrt-thsrSwitchSpan">高鐵查詢</span></router-link>
      <span class="treroad-mrt-mrtSwitchSpan">捷運轉乘</span>
    </div>
    <div class="treroad-mrt-selectStation">
      <p>選擇站名</p>
      <input type="button" value="起始站">
      <input type="button" value="終點站">
      <img class="transfer" src="../../assets/iconTransfer.png" alt="transfer">
    </div>
    <button class="treroad-mrt-startSearch">開始查詢</button>
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
  .treroad-mrt-search
    position: relative
    width: 480px
    height: 205px
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
    div
      width: 100%
      height: 120px
      color: rgb(74, 74, 74)
    .treroad-mrt-switch
      display: flex
      justify-content: space-around
      width: 350px
      height: 40px
      position: absolute
      bottom: 100%
      left: calc(50% - 175px)
      overflow: hidden
      .treroad-mrt-trainSwitch, .treroad-mrt-thsrSwitch, .treroad-mrt-mrtSwitch
        width: 30%
        height: 100%
        position: absolute
        border-radius: 10px
        transform: perspective(.5em) rotateX(2deg)
        bottom: -10px
        box-shadow: 0px 2px 4px rgba(0, 0, 0, .1)
      .treroad-mrt-trainSwitch
        background: #44c7a8
        left: 5%
      .treroad-mrt-thsrSwitch
        background: #44c7a8
        left: 35%
      .treroad-mrt-mrtSwitch
        background: #eff2f5
        right: 5%
        z-index: 1
      .treroad-mrt-mrtSwitchSpan, .treroad-mrt-thsrSwitchSpan, .treroad-mrt-trainSwitchSpan
        position: absolute
        top: 15px
        color: white
        z-index: 2
      .treroad-mrt-trainSwitchSpan
        left: calc(50% - 138px)
      .treroad-mrt-thsrSwitchSpan
        left: calc(50% - 32px)
      .treroad-mrt-mrtSwitchSpan
        color: #4a4a4a
        left: calc(50% + 73px)
    .treroad-mrt-selectStation
      position: relative
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
    .treroad-mrt-startSearch
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
