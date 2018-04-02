<template>
<div class="hd-bg">
	<div class="hd-title">
		<div class="hd-title-txt">
			<h1>
				<img src="src/assets/good.png" alt="GOOD">
				<br>
				<img src="src/assets/ideas.png" alt="IDEAS">
			</h1>
			<p><img src="src/assets/wannaknow.png" alt="想知道嗎"></p>
		</div>
	</div>
</div>
</template>

<script>
export default {

  name: 'BannerHeader',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

.hd-bg {
	width: 100%;
	display: flex;
	justify-content: center;
	background-image: url('../assets/hd-bg.png');
	background-repeat: no-repeat;
}

.hd-title {
	position: relative;
	width: 40%;
	background-color: rgba(74, 73, 74, 0.53);
	padding: 2rem;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		left: 25%;
		right: 25%;
		opacity: 1;
		background-color: #8a572a;	
	}
}

.hd-title-txt {
	position: relative;
	z-index: 1;
	text-align: center;
	img {
		max-width: 100%;
		margin-bottom: 1rem;
	}
}

</style>