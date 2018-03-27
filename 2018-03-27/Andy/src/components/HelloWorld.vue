<template>
	<div class="container">
		<div class="header col-*-12">
			<div class="header_logo">
				<div class="logo col-md-5 col-12">
					<img src="../assets/logo.png" alt="logo">
				</div>
			</div>
			<div class="navbar">
				<div class="first col-md-2 col-sm-4">Home</div>
				<div class="col-md-2 col-sm-4">About</div>
				<div class="col-md-2 col-sm-4">Plants</div>
				<div class="col-md-2 col-sm-4">Gardens</div>
				<div class="col-md-2 col-sm-4">News</div>
				<div class="col-md-2 col-sm-4">Contact</div>
			</div>
		</div>
		<div class="introduction col-*-12">
			<img src="../assets/gardening1.jpg" alt="">
			<div class="Briefing col-*-12">
				<h1>GARDENING TIPS</h1>
				<p>	This is just a place holder,so you can see what the site would look like.
					This is just a place holder,so you can see what the site would look like.
					This is just a place holder,so you can see what the site would look like.
				</p>
			</div>
		</div>
		<div class="sp col-*-12">
			<div class="spl col-md-4">
				<span><img src="../assets/gardening2.jpg" alt=""></span>
				<div class="sp_Briefing left">
					<h6>Tips</h6>
					<p>This is just a place holder,This is just a place holder.</p>
				</div>
			</div><!--
			--><div class="spc col-md-4">
				<span><img src="../assets/gardening3.jpg" alt=""></span>
				<div class="sp_Briefing center">
					<h6>Happy Gardener</h6>
					<p>This is just a place holder,This is just a place holder.</p>
				</div>
			</div><!--
			--><div class="spr col-md-4">
				<span><img src="../assets/gardening4.jpg" alt=""></span>
				<div class="sp_Briefing right">
					<h6>planting</h6>
					<p>This is just a place holder,This is just a place holder.</p>
				</div>
			</div>
		</div>
		<div class="content col-*-12">
			<div class="top col-*-12">
				<div class="top_title col-*-12">
					<h1>FEATURED GARENS</h1>
				</div>
				<div class="top_title_list">
					<div class="list1 col-md-3">
							<img src="../assets/garden1.jpg" alt="">
							<h3>JULIET'S GARDEN</h3>
							<p>This is just a place holder,so you can see what the site would look like.</p>
					</div><!--
					--><div class="list2 col-md-3">
							<img src="../assets/garden2.jpg" alt="">
							<h3>JOANNE'S GARDEN</h3>
							<p>This is just a place holder,so you can see what the site would look like.</p>
					</div><!--
					--><div class="list3 col-md-3">
							<img src="../assets/garden3.jpg" alt="">
							<h3>JETTKA'S GARDEN</h3>
							<p>This is just a place holder,so you can see what the site would look like.</p>
					</div><!--
					--><div class="list4 col-md-3">
							<img src="../assets/garden4.jpg" alt="">
							<h3>JIA'S GARDEN&nbsp&nbsp</h3>
							<p>This is just a place holder,so you can see what the site would look like.</p>
					</div>
				</div>
			</div>
			<div class="bottom">
				<div class="bottom_left col-md-4 col-sm-12">
					<img src="../assets/gardening5.jpg" alt="">
				</div><!--
				--><div class="bottom_right col-md-8 col-sm-12">
					<div class="bottom_title col-*-12">
						<h1>TIPS OF THE WEEK</h1>
					</div>
					<div class="narrative col-*-12">
						<ol>
							<li><p>This is just a place holder,so you can see what the site would look like.This is just a place holder,so you can see what the site would look like.</p></li>
							<li><p>This is just a place holder,so you can see what the site would look like.This is just a place holder,so you can see what the site would look like.</p></li>
							<li><p>This is just a place holder,so you can see what the site would look like.This is just a place holder,so you can see what the site would look like.</p></li>
						</ol>
					</div>
				</div>
			</div>
			<div class="footer">
				<div class="footer_list col-md-3 col-xs-6">
					<h1>PLACE HOLDER</h1>
					This is just a place holder.<br/>
					This is just a place holder.<br/>
					This is just a place holder.
				</div><!--
				--><div class="footer_list col-md-3 col-xs-6">
					<h1>PLACE HOLDER</h1>
					This is just a place holder.<br/>
					This is just a place holder.<br/>
					This is just a place holder.
				</div><!--
				--><div class="footer_list col-md-3 col-xs-6">
					<h1>PLACE HOLDER</h1>
					This is just a place holder.<br/>
					This is just a place holder.<br/>	
					This is just a place holder.
				</div><!--
				--><div class="footer_list icon col-md-3 col-xs-6">
					<h1>CONNECT</h1>
					<i class="fa fa-envelope" aria-hidden="true">&nbsp<span>Email us</span></i>
					<i class="fa fa-facebook-official" aria-hidden="true">&nbsp<span>Facebook</span></i>
					<i class="fa fa-twitter" aria-hidden="true">&nbsp<span>Twitter</span></i>
					<i class="fa fa-google-plus-square" aria-hidden="true">&nbsp<span>Google+</span></i>
				</div>
			</div>
		</div>
		<div class="property col-*-12">
			Garden Walkthrough © 2023 | All Right Reserved
		</div>
	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	margin: 0;
	padding: 0;
}

body{
	background-image: url(../assets/bg-body.jpg)
}

.container{
	background-color: #257415;
	width: 75%;
	margin-left: auto;
	margin-right: auto;
	padding: 0 20px;
}

.header_logo{
	background-color: white;
	padding: 15px;
}

.logo{
	margin: 0 auto;
}

.logo img{
	width: 100%;
	height: auto;
}

.navbar{
	padding: 0;
}

.navbar div{
	height: 50px;
	line-height: 47px;
	float: left;
	text-align: center;
	background-color: #505050;
	color:white;
}

.navbar div:hover{
	background-color:rgba(256,256,256,0.9);
	color:#505050;
}

.navbar .first{
	background-color:rgba(256,256,256,0.6);
	color: #006400;
}

.introduction{
	position: relative;
}

.introduction img{
	width: 100%;
	height: auto;
}

.Briefing{
	background-color:rgba(0,0,0,0.6);
	padding: 10px 10px 0 20px;
	position: absolute;
	bottom: 0;
}

.Briefing h1{
	color:#CCFF99 ;
	font-size: 25px;
}

.Briefing p{
	color:white;
}

.sp h6{
	color:#CCFF99 ;
}

.sp p{
	color: white;
}

.spl,.spc,.spr{
	display: inline-block;
	padding: 10px 0px 0px 20px;
	margin-top: 10px;
	margin-bottom: 10px;
	line-height: 20px;
}

.spl img,.spc img,.spr img{
	border: 1px white solid;
}

.spl span,.spc span,.spr span{
	float: left;
	margin-right: 20px;
}

.spl,.spc{
		border-right: #2d811b 2px solid; 
}

.content{
	background-color: white;
	padding:5px 0 0 0; 
}

.top_title{
	background-color: #d9eed4;
	border-bottom: #acd6a1 2px solid;
	margin: 20px;
	padding: 5px 5px 0 20px;
}

.top_title h1{
	font-size: 20px;
	color: #946000;
}

.top_title_list{
	margin: 20px 20px 20px 0;
}

.top_title_list img{
	width: 100%;
	height: auto;
}

.list1,.list2,.list3,.list4{
	padding: 0 0 0 20px;
	text-align: center;
	display: inline-block;
}

.top_title_list h3{
	font-size: 20px;
	margin-top: 20px;
	text-align:left;
	color: #844200;
}

.top_title_list p{
	text-align:left;
}

.bottom_left,.bottom_right{
	display: inline-block;
}

.bottom_right{
	padding-left: 0px;
}

.bottom_left{
	vertical-align: top;
	margin-top: 20px;
	padding-left: 20px;
}

.bottom img{
	width: 100%;
	height: auto;
}

.bottom_title{
	background-color: #d9eed4;
	border-bottom: #acd6a1 2px solid;
	margin: 20px;
	padding: 5px 5px 0 20px;
}

.bottom_title h1{
	font-size: 20px;
	color: #946000;
}

.narrative{
	margin: 0 20px 40px 20px;
	padding: 0 0 0 20px
}

.narrative ol li{
	font-size: 19px;
}

.footer_list{
	display: inline-block;
	background-color: #d9edd4;
	padding: 20px 0 0 20px;
	border: #006400 1px solid;
	height: 180px;
	vertical-align: top;
	color: #707070;
	font-size: 18px;
}

.footer_list h1{
	font-size: 20px;
	margin-bottom: 20px;
}

.footer_list p{
	font-size: 18px;
}

.footer i{
	display: block;
	font-size: 20px;
	line-height: 30px;
	color:#006400;
}

.icon h1{
	margin-bottom: 15px;
}
.icon span{
	color: #707070;
}

.property{
	background-color: #257415;
	color:white;
}

.property{
	text-align: center;
	padding:10px;
}
</style>
