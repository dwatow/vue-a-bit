<template lang="pug">
  <div id="app" class="container">
        <app-header></app-header>
        <app-main></app-main>
        <app-introtop></app-introtop>
        <app-introbottom></app-introbottom>
        <app-footer></app-footer>
        <app-copy></app-copy>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import IntroTop from "./components/IntroTop.vue";
import IntroBottom from "./components/IntroBottom.vue";
import Footer from "./components/Footer.vue";
import Copy from "./components/Copy.vue";


export default {
  components: {
    appHeader: Header,
    appMain: Main,
    appIntrotop:IntroTop,
    appIntrobottom :IntroBottom,
    appFooter:Footer,
    appCopy: Copy
  }
};
</script>

<style>

p {
  margin:0;
}

.container{
  width: 100%;
  /* height: 100%; */
  background: #257415;
  padding: 0 20px;
}

.row {
  margin: 0;
}
</style>
