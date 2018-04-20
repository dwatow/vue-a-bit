<template>
  <div id="app">
    <app-header/>
    <app-maintop/>
    <app-mainbottom/>
    <app-footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Maintop from './components/MainTop.vue';
import Mainbottom from './components/MainBottom.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    appHeader:Header,
    appMaintop:Maintop,
    appMainbottom:Mainbottom,
    appFooter:Footer,
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
}
</style>
