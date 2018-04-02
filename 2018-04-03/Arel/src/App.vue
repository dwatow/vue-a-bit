<template>
<div class="container">
	<banner-header></banner-header>
	<bulletin></bulletin>
	<Footer></Footer>
</div>	
</template>

<script>
import 'bootstrap/dist/css/bootstrap-grid.css';
import BannerHeader from './components/BannerHeader.vue';
import Bulletin from './components/Bulletin.vue';
import CpyFooter from './components/CpyFooter.vue';

export default {
  data () {
    return {
    }
  },
  components: {
  	BannerHeader,
  	Bulletin,
  	CpyFooter
  }
}
</script>

<style lang="scss">

</style>
