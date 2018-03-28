<template>
	<div class="theme-header">
		<img class="logo" src="../images/logo.png" alt="">
	</div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}

</script>

<style lang="scss">

.theme-header {
	background: #FFF;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.2rem;
}

@include media-breakpoint-down(sm) {
	.logo {
		width: 100%;
	}
}

</style>