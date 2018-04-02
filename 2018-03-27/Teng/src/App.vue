<template>
  <div id="app">
    <my-header></my-header>
    <my-body></my-body>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './components/header'
import myBody from './components/body'
import myFooter from './components/footer'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    myHeader,
    myBody,
    myFooter
  }
}
</script>

<style>
/* @import"../src/assets/variable.scss"; */
 /* @import "../node_modules/bootstrap/scss/bootstrap"; */
</style>
