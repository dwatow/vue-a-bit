<template>

<div id="app" class="container outer">
	<theme-header></theme-header>
	<navbar></navbar>
</div>

</template>

<script>
import './assets/styles/main.scss';
import Header from './assets/components/Header.vue';
import Navbar from './assets/components/Navbar.vue';

export default {
  name: 'app',
  components: {
  	'theme-header': Header,
    'navbar': Navbar
  },
  data () {
    return {

    }
  }
}

</script>

<style lang="scss">

body {
	background: url('assets/images/bg-body.jpg');
}

.outer {
	background: #416425;
}

</style>
