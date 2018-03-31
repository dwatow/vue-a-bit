<template>
  <div id="app">
    //banner
    //content list
    //footer
    <content-component :nav="list"></content-component>

  </div>
</template>

<script>
import BANNER from './components/banner.vue';
import CONTENT from './components/content.vue';
import FOOTER from './components/footer.vue';

export default {
  name: 'app',
  components: {
    'banner-component': BANNER,
    'content-component': CONTENT,
    'footer-component': FOOTER
  },
  data () {
    return {
      'list': [
        '全部活動',
        '即將開始活動',
        '已經結束活動'
      ]
    }
  },

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  margin: 0px;
}
</style>
