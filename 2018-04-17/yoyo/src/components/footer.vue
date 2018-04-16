<template>
  	<div class="footer">
		<p>©2013 Zerotype. All Rights Reserved.</p>
		<ul class="icon">
			<li>
				<img src="../assets/facebook.png" alt="">
			</li>
			<li>
				<img src="../assets/google.png" alt="">
			</li>
			<li>
				<img src="../assets/twitter.png" alt="">
			</li>
			<li>
				<img src="../assets/pinterest.png" alt="">
			</li>	
		</ul>
	</div>
</template>
<script>
    
</script>
<style>
.footer {
	background: rgba(240,240,240,1);
	border-top: 1px solid #dcdcdc;
	height: 50px;
	padding: 10px;
	position: relative;
}
.footer p {
	color: #666;
	font-size: 11px;
	font-weight: 300;
	position: absolute;
	left: 150px;
	bottom: 30px
}
.icon {
	position: absolute;
	right: 150px;
	bottom: 15px
}
.icon li {
	float: left;
	margin-left: 20px
}
.icon img {
	width: 25px
}
</style>
