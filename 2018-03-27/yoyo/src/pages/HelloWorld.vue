<template>
  <div class="hello">
    <hello-nav></hello-nav>
    <div class="container main-block">
		<div class="banner row">
			<div class="col-12 col-sm-12 col-md-6">
				<img src="@/assets/banner.jpg" alt="">
				<div class="price-box">
					<span>Whicker Chair</span>
					<p>$250.00</p>
					<img src="@/assets/viewdetail.png" alt="">
				</div>
			</div>
			<div class="col-12 col-sm-12 col-md-6 banner-right">
				<h2>
					THIS IS JUST A PLACE <br>HOLDER.
				</h2>
				<p>
					You can remove any link to our website from this website template ,you're free to use this website template without linking back to us.This is just a place holder,so you can see what the site would look like.This is just a place holder.
				</p>
			</div>
		</div>
		<div class="row  intro-box">
			<div class="col-12 col-sm-12 col-md-4">
				<img src="@/assets/p1.jpg" alt="">
				<div class="intro-part">
					<h2>LIVING ROOM</h2>
					<p>This website template has been designed by Free Website Template for you,for free.You can replace all this text with your own text.</p>
				</div>
			</div>
			<div class="col-12 col-sm-12 col-md-4">
				<img src="@/assets/p2.jpg" alt="">
				<div class="intro-part dark">
					<h2>BEDROOM</h2>
					<p>You can remove any link to our website from this website template ,you're free to use this website template without linking back to us.</p>
				</div>
			</div>
			<div class="col-12 col-sm-12 col-md-4">
				<img src="@/assets/p3.jpg" alt="">
				<div class="intro-part">
					<h2>KITCHEN</h2>
					<p>If you're have problem editing this website template,then don't hesitate to ask for help on the Forums.</p>
				</div>
			</div>
		</div>
		<div class="row  contact-box">
			<div class="col-12 col-sm-12 col-md-4">
				<span>FOR ORDER AND INQUIRIES PLEASE CALL:</span>
				<p>760-962-9541</p>
				<span>OR YOU CAN VISIT US AT:</span>
				<p>THIS IS JUST A PLACE HOLDER.</p>
			</div>
			<div class="col-12 col-sm-12 col-md-4">
				<span>FROM THE BLOG</span>

				<div class="bloggers row">
					<div class="col-6 infor">
						<span>April 16, 2011</span>
						<h3>This is just a place holder.</h3>
						<p>READ MORE</p>
					</div>
					<div class="col-6 photo1">
						
					</div>	
				</div>
			</div>
			<div class="col-12 col-sm-12 col-md-4">
			<span><br></span>
				<div class="bloggers row">
					<div class="col-6 infor">
						<span>April 16, 2011</span>
						<h3>This is just a place holder.</h3>
						<p>READ MORE</p>
					</div>
					<div class="col-6 photo2">
						
					</div>
				</div>
			</div>
		</div>
	</div>
    <hello-footer></hello-footer>
  </div>
</template>

<script>
const Nav = () => import ( /* webpackChunkName: "component" */ '@/components/nav.vue')
const footer = () => import('@/components/footer.vue')
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'hello-nav': Nav,
    'hello-footer': footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.main-block {
    box-shadow: 0px 0px 15px #191919;
    background: #fff;
    margin: 0 auto;
    padding: 0px;
}

.banner {
    border: 1px solid #fff;
    padding: 0px;
    margin: 0px;
}

.banner>div:first-child {
    padding: 0px;
    position: relative;
    background-image: url(../assets/banner.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.banner img {
    width: 100%
}

.price-box {
    position: absolute;
    right: 40px;
    bottom: 40px
}

.price-box p {
    margin-bottom: 0.1em;
    font-size: 1.7em;
    line-height: 1em
}

.banner-right {
    background-image: url(../assets/bannerl.jpg);
    background-size: cover;
    text-align: center;
    padding: 60px
}

.banner-right h2 {
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    letter-spacing: 2px;
    text-shadow: 1px 1px #fff;
    margin-bottom: 20px 0px 30px 0px
}

.banner-right p {
    text-align: left;
    line-height: 2em;
    letter-spacing: 1px;
}

.intro-box,
.contact-box {
    padding: 0px;
    margin: 0px
}

.intro-box img {
    width: 100%
}

.intro-box>div {
    padding: 0px;
}

.intro-part {
    background-image: url(../assets/separator-light.png);
    background-repeat: repeat-x;
    background-color: #4b3a33;
    height: 180px;
    padding: 30px;
}

.intro-part h2 {
    font-family: 'Oswald', sans-serif;
    color: #ffc947;
    font-weight: 700;
    font-size: 1.5em
}

.intro-part p {
    color: #fff;
    font-size: 0.8em
}

.intro-part.dark {
    background-color: #241b18
}

.contact-box {
    background-color: #fff;
    padding: 20px
}

.contact-box>div:first-child {
    background-image: url(../assets/separator-light-vertical.png);
    background-repeat: repeat-y;
    background-position: right;
}

.contact-box div {
    padding: 25px 20px
}

.contact-box p,
.contact-box span {
    font-family: 'Oswald', sans-serif;
    font-weight: 900
}

.contact-box span {
    color: #7b7b7b;
    font-size: 1.2em;
    line-height: 30px
}

.contact-box p {
    font-size: 1.8em;
    letter-spacing: 1px
}

</style>
