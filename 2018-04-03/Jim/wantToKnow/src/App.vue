<template>
  <div id="app">
    <banner-component @parentCatch="parentDealWith"></banner-component>
    <content-component :nav="list"></content-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import BANNER from './components/banner.vue';
import CONTENT from './components/content.vue';
import FOOTER from './components/footer.vue';

export default {
  name: 'app',
  data () {
    return {
      'list': [
        {
          'content': '全部活動',
          'clicked': true
        },
        {
          'content': '即將開始活動',
          'clicked': false
        },
        {
          'content': '已經結束活動',
          'clicked': false
        }
      ]
    }
  },
  computed: {},
  components: {
    'banner-component': BANNER,
    'content-component': CONTENT,
    'footer-component': FOOTER
  },
  // Life cycle hook
  beforeCreate() {},
  mounted() {},
  methods: {
    parentDealWith(msg) {
      alert(msg)
    }
  },
  watch: {}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
html {
  margin: 0px;
}
</style>
