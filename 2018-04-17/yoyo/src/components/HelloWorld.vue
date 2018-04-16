<template>
  <div class="hello">
    <t1nav></t1nav>
	<div class="banner">
		<div class="bigbox">
			<div class="box first">
				<h2>IDEAS?</h2>
				<h3>This is just a  place holder.</h3>
				<p>You can remove any link to our website from this website template ,you're free to use this website template without linking back to us.</p>
				<button type="button">TRY IT NOW!</button>
			</div>
			
				<img class="bannerimg" width="300" src="../assets/download_pic.png" alt="">

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
  <t1footer></t1footer>
  </div>
</template>

<script>
import t1nav from './nav'
import t1footer from './footer'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    t1nav,
    t1footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


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

</style>
