<template>
  <nav class="nav-bar">
		<div class="navbox">
			<div class="logo">
				<img src="../assets/logo.png" alt="">
			</div>	
			<ul class="menu">
				<li>Home</li>
				<li>Features</li>
				<li>News</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</div>	
		
	</nav>
</template>
<script>
    
</script>
<style>
ol, ul {
	list-style: none;
}
.nav-bar {
	width: 100%;
	height: 120px;
	background: rgba(245,245,245,1);
	border-bottom: 1px solid #eee
}
.navbox {
	width: 840px;
	margin: 0 auto;
}
.menu {
	vertical-align: super;
	padding-left: 5%;
}
.menu li {
	float: left;
	color: #666;
	font-weight: 300;
	font-size: 14px;
	margin: 50px 0px;
	margin-right: 85px;
}
.menu li:first-child {
	margin-left: 60px
}
.menu li:hover {
	color: #ff9900;
	cursor: pointer;
}
.logo {
	width: 100px;
	padding-top:20px;
	text-align: right;
	float: left;
	position: relative;
}
.logo:after {
	content: "ZERO TYPE";
	position: absolute;
	font-size: 12px;
	left: 32px;
	top: 95px
}
</style>
