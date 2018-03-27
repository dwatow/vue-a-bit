<template>

<div class="navbar navbar-expand-lg navbar-light bg-light">
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain">
	<span class="navbar-toggler-icon"></span>
	</button>
	<div id="navbarMain" class="collapse navbar-collapse">
		<ul class="navbar-nav nav-outer">
			<li :class="{active: item.active}" class="nav-item" v-for="item in listNames">
				<a class="nav-link" href="#">{{item.value}}</a>
			</li>
		</ul>		
	</div>	
</div>

</template>

<script>

export default {
	data() {
		return {
			listNames: [
				{
					value: 'Home',
					active: true,
				},
				{
					value: 'About',
					active: false,
				},
				{
					value: 'Plant',
					active: false,
				},
				{
					value: 'Gardens',
					active: false,
				},
				{
					value: 'News',
					active: false,
				},
				{
					value: 'Contact',
					active: false,
				},
			],
		}
	}
}

</script>

<style lang="scss">

</style>