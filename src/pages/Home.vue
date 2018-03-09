<template>
  <div class="treroad-home-page">
    <div class="treroad-home-background">
      <div class="treroad-home-chatbot">
        <img src="../assets/chatbot.png" alt="找路小姐">
        <div class="treroad-home-introduction">
          hi, 我們是Treroad。<br>
          希望能提供旅行的人們最方便的交通查詢<span class="treroad-home-messageForWindow">，不管是公車、捷運、台鐵、高鐵、公共腳踏車、氣候、航班、地圖等資訊，都能夠透過簡單的查詢來取得</span>。
        </div>
      </div>
      <router-view/>
    </div>
    <footer>
      <img class="treroad-home-logoFooter" src="../assets/logoFooter.png" alt="logoFooter">
      <ul>
        <li>關於我們</li>
        <li>聯絡我們</li>
        <li>隱私權政策</li>
      </ul>
      <a href="https://www.appstore.com/treroad"><img class="treroad-home-appstore" src="../assets/buttonAppstore.png" alt="Appstore"></a>
    </footer>
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
  .treroad-home-background
    width: 100%
    height: 540px
    padding: 45px 15px
    background: url(../assets/bg.jpg) center
    background-size: cover
    box-sizing: border-box
    .treroad-home-chatbot
      width: 480px
      height: 140px
      margin: 0 auto
      display: flex
      justify-content: space-between
      align-items: flex-start
      .treroad-home-introduction
        width: 385px
        height: 100%
        padding: 12px 18px
        line-height: 22px
        box-sizing: border-box
        background: white
        border-radius: 18px
        @media screen and (max-width: 515px)
          width: calc(100% - 90px)
        .treroad-home-messageForWindow
          @media screen and (max-width: 515px)
            display: none
      @media screen and (max-width: 515px)
        width: 100%
        height: 100px
  footer
    width: 100%
    text-align: center
    .treroad-home-logoFooter
      margin: 22px auto
    ul
      width: 265px
      font-size: 14px
      margin: 0 auto
      display: flex
      justify-content: space-between
      li
        display: inline-block
    .treroad-home-appstore
      margin: 30px auto
      cursor: pointer

</style>
