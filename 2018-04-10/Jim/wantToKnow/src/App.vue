<template>
  <div id="app">
    <banner-component @parentCatch="parentDealWith"></banner-component>
      <router-view></router-view>
    <!-- <resume-component></resume-component>
    <content-component :nav="list"></content-component>   -->
    <footer-component></footer-component>
    <gotop-component></gotop-component>
  </div>
</template>

<script>
import BANNER from './components/banner.vue';
import CONTENT from './components/content.vue';
import RESUME from './components/Resume.vue';
import FOOTER from './components/footer.vue';
import GOTOP from './components/goTop.vue';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {},
  components: {
    'banner-component': BANNER,
    'content-component': CONTENT,
    'footer-component': FOOTER,
    'resume-component': RESUME,
    'gotop-component': GOTOP
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
}
html, body {
  margin: 0px;
}
</style>
