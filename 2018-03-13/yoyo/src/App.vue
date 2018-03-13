<template>
  <div id="app">
    <nav class="nav-bar">
		<div class="navbox">
			<div class="logo">
				<img src="./assets/t1logo.png" alt="">
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
	<div class="banner">
		<div class="bigbox">
			<div class="box first">
				<h2>IDEAS?</h2>
				<h3>This is just a  place holder.</h3>
				<p>You can remove any link to our website from this website template ,you're free to use this website template without linking back to us.</p>
				<button type="button">TRY IT NOW!</button>
			</div>
			
				<img class="bannerimg" width="300" src="./assets/download_pic.png" alt="">

		</div>
	</div>
	<div class="content">
		
		<div class="stage ">
			<h2>This is just a place holder.</h2>
			You can remove any link to our website from this website template ,you're free to use this website template without linking back to us.
			<br><br>
			This is just a place holder,so you can see what
			the site would look like
			<br><br>
			You can remove any link to our website from this 
			website template ,you're free to use this website 
			template without linking back to us.This is just a
			place holder,so you can see what the site would
			look like
			<br><br>
			You can remove any link to our website from this website template ,you're free to use this website template without linking back to us.
			<br><br>
			This is just a place holder,so you can see what
			the site would look like
			<br><br>
			You can remove any link to our website from this 
			website template ,you're free to use this website 
			template without linking back to us.This is just a
			place holder,so you can see what the site would
			look like
		</div>
	</div>
	<div class="footer">
		<p>©2013 Zerotype. All Rights Reserved.</p>
		<ul class="icon">
			<li>
				<img src="./assets/facebook.png" alt="">
			</li>
			<li>
				<img src="./assets/google.png" alt="">
			</li>
			<li>
				<img src="./assets/twitter.png" alt="">
			</li>
			<li>
				<img src="./assets/pinterest.png" alt="">
			</li>	
		</ul>
	</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
}
table {
	border-collapse: collapse;
	border-spacing: 0;
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
.banner {
	background: rgba(250,250,250,1);
	padding: 40px 30px 70px 30px;
}
.banner button {
	color: #fff;
	display: block;
	border-radius: 4px;
	background:linear-gradient(180deg,#ffc00e 50%, #ff8d00 50%);
	border: 0px;
	width: 160px;
	height: 40px;
	font-size: 16px;
	margin:0 auto;
	margin-top: 20px;
	cursor: pointer;
	position: relative;
} 
.banner button:after {
	content: "Don't worry it's for free";
	position: absolute;
	font-size: 0.25em;
	color: #999;
	top: 42px;
	left: 0px
}
.bannerimg {
	margin-left: 50px
}
.bigbox {
	width: 660px;
	margin: 0 auto
}
.box {
	display: inline-block;
	padding: 10px;
	vertical-align: top;
	text-align: left;

}
.box.first {
/*	padding-left: 30%;
	padding-top: 0px*/
	width: 260px
} 
.box h2 {
	font-size: 2.7em
}
.box h3 {
	font-size: 1.3em;
	line-height: 1.4em
}
.box p {
	font-size: 0.9em;
	line-height: 1.6em;
	
}
.content {
	padding: 40px 0px 100px 0px;
	font-size: 0.9em;
	color: #333;
	line-height: 1.8em;
	text-align: center;
}
.stage {
	width: 660px;
	text-align: left;
	column-count:2;
	column-gap: 50px;
	margin: 0 auto;
}
.stage h2 {
	font-size: 1.5em;
	margin-bottom: 20px
}
.stage.first{
	margin-right:40px 
}
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
