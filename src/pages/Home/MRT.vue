<template>
  <div class="treroad-mrt-search">
    <div class="treroad-mrt-switch">
      <div class="treroad-mrt-trainSwitch"></div>
      <div class="treroad-mrt-mrtSwitch"></div>
      <router-link to="train"><span class="treroad-mrt-trainSwitchSpan">雙鐵查詢</span></router-link>
      <span class="treroad-mrt-mrtSwitchSpan">捷運轉乘</span>
    </div>
    <div class="treroad-mrt-selectStation">
      <p>選擇站名</p>
      <input type="button" value="起始站">
      <input type="button" value="終點站">
      <img class="transfer" src="../../assets/iconTransfer.png" alt="transfer">
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
      .treroad-mrt-trainSwitch, .treroad-mrt-mrtSwitch
        width: 45%
        height: 100%
        position: absolute
        border-radius: 10px
        transform: perspective(.5em) rotateX(2deg)
        bottom: -10px
      .treroad-mrt-trainSwitch
        background: #44c7a8
        left: 5%
      .treroad-mrt-mrtSwitch
        background: #eff2f5
        right: 5%
        z-index: 1
      .treroad-mrt-trainSwitchSpan
        color: white
        z-index: 2
        margin-top: 15px
      .treroad-mrt-mrtSwitchSpan
        color: #4a4a4a
        z-index: 2
        margin-top: 15px
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
