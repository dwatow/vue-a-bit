<template>
  <div id="app">
    <header>
      <router-link to="/home"><div class="treroad-app-logo">
        <img src="./assets/logo.png" alt="logo">
        <img class="treroad-app-logoText"src="./assets/treroad.png" alt="treroad">
      </div></router-link>
      <div class="treroad-app-about">
        <p>ABOUT</p>
        <img class="treroad-app-iosDownload" src="./assets/buttonIosDownload.png" alt="">
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {},
  data () {
    return {

    }
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

<style lang="sass">
*
  margin: 0
  padding: 0
  list-style: none
#app
  header
    width: 100%
    height: 60px
    background: rgb(68, 199, 168)
    padding: 12px 20px
    box-sizing: border-box
    display: flex
    justify-content: space-between
    .treroad-app-logo, .treroad-app-about
      display: inline-block
      vertical-align: top
    .treroad-app-logo
      width: 200px
      img
        vertical-align: middle
      @media screen and (max-width: 515px)
        width: 70px
      .treroad-app-logoText
        @media screen and (max-width: 515px)
          display: none
    .treroad-app-about
      width: 200px
      height: 35px
      color: white
      display: flex
      justify-content: space-between
      align-items: center
      @media screen and (max-width: 515px)
        width: 170px
    .treroad-app-iosDownload
      cursor: pointer

</style>
