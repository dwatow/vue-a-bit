<template>
  <div id="app">
    <app-logo></app-logo>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Logo from './components/Logo.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  components:{
    appLogo:Logo,
    appMain:Main,
    appFooter:Footer,
  }
}
</script>

<style>
body, html {
  margin: 0;
}
#app{
  width: 100%;
}

p {
  margin: 0;
}
</style>
