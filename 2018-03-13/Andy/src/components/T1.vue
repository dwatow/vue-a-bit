<template>
  <div class="t1">
    <div class="head">
		<div class="toplist">
			<div class="logo"><img src="../assets/t1Image/logo.png" alt="logo">ZERO TYPE</div>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">Features</a></li>
				<li><a href="#">News</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</div>
	</div>
	<div class="content">
		<div class="wrap">
			<div class="content_left">
				<h1>IDEAS?</h1>
				<h2>This is just a place holder.</h2>
				<p>You can remove any link to our website from this <br/>website template ,you're free to use this website <br/>template without linking back to us.</p>
				<br/>
				<input type="button" class="button" value="TRY IT NOW!">
				<small>Don't worry it's for free</small>
			</div>
			<div class="content_right">
				<img src="../assets/t1Image/download_pic.png" alt="download">
			</div>
		</div>
	</div>
	<div class="main">
		<div class="wrap">
			<h2>This is just a place holder.</h2>
			<div class="main_left">
				<p>You can remove any link to our website from this <br/>website template ,you're free to use this website <br/>template without linking back to us.</p>
				<br/>
				<p>This is just a place holder,so you can see what<br/> the site would look like</p>
				<br/>
				<p>You can remove any link to our website from this <br/>website template ,you're free to use this website <br/>template without linking back to us.This is just a<br/> place holder,so you can see what the site would<br/> look like</p>
			</div>
			<div class="main_right">
				<p>You can remove any link to our website from this <br/>website template ,you're free to use this website <br/>template without linking back to us.</p>
				<br/>
				<p>This is just a place holder,so you can see what<br/> the site would look like</p>
				<br/>
				<p>You can remove any link to our website from this <br/>website template ,you're free to use this website <br/>template without linking back to us.This is just a<br/> place holder,so you can see what the site would<br/> look like</p>
			</div>
		</div>
	</div>
	<div class="footer">
		<div class="footer_left">
			<small><b>© 2023 Zerotype.All Rights Reserved.</b></small>
		</div>
		<div class="footer_right">
			<div class="icons">
				<a href="#"><img src="image/facebook.png" alt=""></a>
				<a href="#"><img src="image/google.png" alt=""></a>
				<a href="#"><img src="image/twitter.png" alt=""></a>
				<a href="#"><img src="image/pinterest.png" alt=""></a>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'T1',
  props: {},
  data () {
    return {

    }
  },
  computed: {},
  components: {},
  watch: {},
  mixins: [],
  methods: {},
  // Life cycle hook
  beforeCreate () {},
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
	font-family:"Trebuchet", sans-serif;
}

.head{
	background-color: #f0f0f0;
	height: 150px;
	width: 100%;
}

.toplist{
	width: 75%;
	margin-left: auto;
	margin-right: auto;
	vertical-align: middle;
	position: relative;
	top: 25px;
}

img{
	margin-left: 20px;
}

.logo{
	width: 95px;
	float: left;
}

.toplist ul li{
	display: inline;
	margin: 40px 25px 40px 90px;
	float:left;
}

a{
	color: #707070;
	text-decoration:none;
}

a:hover{
	color: orange;
}

.content{
	width: 100%;
	background-color: #fdfdfd;
	height: 500px;
}

.wrap{
	width: 65%;
	margin-left: auto;
	margin-right: auto;
}

.content_left{
	width: 50%;
	height: 440px;
	float: left;
	padding-top: 60px; 
}

.content_right{
	width: 50%;
	height: 500px;
	float: left;
}

.content_right img{
	width: 90%;
	position: relative;
	top: 50px;
	left: 30px;
}

h1{
	font-size:60px;
	display: block;
}

h2{
	font-size: 32px;
}

p{
	font-size: 17px;
	line-height: 25px;
	color: #707070;
}

.button{
	background: linear-gradient(180deg,#ffb500 50%, #D16900 50%);
	border-radius:10px;
	border: 0;
	width: 250px;
	height: 60px;
	font-size: 25px;
	color: white;
	display:block;
	margin-left: auto;
	margin-right: auto;
	cursor: pointer;
}

small{
	font-size: 13px;
	margin-left: 82px;
	color: #707070;
}

.wrap > h2{
	margin-top: 50px;
	padding-left: 15px;
}

.main{
	width: 100%;
	height: 500px;
}

.main_left,.main_right{
	width: 45%;
	height: 440px;
	padding: 15px;
	float: left;
	padding-top: 60px; 
}

.footer{
	position: relative;
	height: 80px;
	background-color: #f0f0f0;
}

.footer_left{
	position: absolute;
	left:8%;
	top: 50%;
}

.footer_right{
	position: absolute;
	right: 15%;
	top: 40%;
}

.icons a img{
	width: 30px;
	height: 30px;
}
</style>
