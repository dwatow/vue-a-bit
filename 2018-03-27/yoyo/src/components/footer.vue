<template>
  <div class=" footer">
		<div class="container row inforbox">
			<div class=" col-12 col-sm-12 col-md-4">
				<h2>VISIT OUR SHOWROOM</h2>
				<div class="col-12 inforbox-img"></div>
				<p>This is just a place holder,so you can see what the site would look like.</p>
				<p>760-962-9541</p>
				<p><a href="">info@carvedcreation.com</a></p>
			</div>
			<div class="col-12 col-sm-12 col-md-4">
				<h2>RECENT BLOG POSTS</h2>
				<div class="col-12 row">
					<div class="col-2 date">
						APR 16
					</div>
					<div class="col-10 date-text">
						<h3>This is just a place holder.</h3>
						<p>This is just a place holder,so you can see what the site would look like.</p>
					</div>
				</div>
				<div class="col-12 row">
					<div class="col-2 date">
						APR 15
					</div>
					<div class="col-10 date-text">
						<h3>This is just a place holder.</h3>
						<p>This is just a place holder,so you can see what the site would look like.</p>
					</div>
				</div>
				<div class="col-12 row">
					<div class="col-2 date">
						APR 14
					</div>
					<div class="col-10 date-text">
						<h3>This is just a place holder.</h3>
						<p>This is just a place holder,so you can see what the site would look like.</p>
					</div>
				</div>
			</div>
			<div class=" col-12 col-sm-12 col-md-4">
				<h2>JOIN OUR NEWSLETTER</h2>
				<div class="contactbox-top">
					<input class="inforbox-mail" type="text" placeholder="Enter Email Address Here For Updates">
					<img class="line-margin" src="@/assets/signup.png" alt="">
				</div>
				<div class="contactbox-bottom">
					<h2>SOCIAL MEDIA</h2>
					<div class="row col-12">
						<div class="col-2">
							<img src="@/assets/icon_fb.png" alt="">
						</div>
						<div class="col-2">
							<img src="@/assets/icon_g.png" alt="">
						</div>
						<div class="col-2">
							<img src="@/assets/icon_t.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container row copyright">
			<div class=" col-12 col-sm-12 col-md-6 ">
				<p>© COCYRIGHT 2012.ALL RIGHTS RESERVED.</p>
			</div>
			<div class=" col-12 col-sm-12 col-md-6 navbar navbar-expand d-flex align-items-start justify-content-end">
				<ul class="navbar-nav ">
					<li  v-for="item in navTag" class="nav-item nav-link">{{ item.title}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
      export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navTag:[
          {
            title:'HOME',
            link: ''
          },
          {
            title:'ABOUT',
            link: ''
          },
          {
            title:'GALLERY',
            link: ''
          },
          {
            title:'BLOG',
            link: ''
          },
          {
            title:'CONTACT',
            link: ''
          }
      ]
    }
  }
}
</script>
<style>
.footer {
    background: #e2b241;
    border-top: 1px solid #fff;
    box-shadow: 0px -1px 10px #666;
    margin: 0px auto;
}

.footer>div:first-child {
    background-image: url(../assets/separator-dark.png);
    background-repeat: repeat-x;
    background-position: bottom;
}

.footer>div {
    margin: 0 auto;
}

.copyright {
    margin: 0 auto;
}

.copyright .navbar {
    background-color: inherit;
    border: 0px;
    padding: 10px;
    font-weight: 900
}

.copyright p,
li {
    color: #ab7d0f;
    font-family: 'Oswald', sans-serif;
    font-weight: 900;
    padding: 10px;
    margin-bottom: 0px
}

.copyright li {
    padding-top: inherit;
}

.bloggers {
    background-color: #dddad3;
    margin: 15px auto;
    padding: 0px!important;
    min-height: 170px
}

.bloggers div {
    padding: 0px
}

.bloggers .infor {
    padding: 15px
}
.infor span {
    font-size: 0.5em;
}

.infor h3,
.inforbox h2 {
    font-size: 1.3em;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
}

.infor p {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 0px
}

.photo1 {
    background-image: url(../assets/b1.jpg);
    background-size: cover;
    background-position: top center;
}

.photo2 {
    background-image: url(../assets/b2.jpg);
    background-size: cover;
    background-position: top center;
}

.inforbox {
    padding: 20px;
}

.inforbox h2 {
    margin-bottom: 20px
}

.inforbox>div {
    background-image: url(../assets/separator-dark-vertical.png);
    background-repeat: repeat-y;
    background-position: right;
    padding: 0px 20px
}

.inforbox-img {
    background-image: url(../assets/footer.jpg);
    background-size: cover;
    background-position: top center;
    min-height: 190px;
}

.inforbox a {
    text-decoration: underline;
    color: #000
}

.inforbox>div:first-child {
    padding-left: 0px
}

.inforbox>div:last-child {
    background-image: none;
}

.inforbox-mail {
    border: 4px solid #af8112;
    width: 100%;
    height: 40px;
    padding: 5px
}

.line-margin {
    margin: 10px 0px
}

.contactbox-top {
    background-image: url(../assets/separator-dark.png);
    background-repeat: repeat-x;
    background-position: bottom;
    height: 115px
}

.contactbox-bottom {
    margin: 15px 0px;
}

.date {
    width: 50px;
    height: 50px;
    background-color: #493320;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #666;
    color: #fff;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    padding: 0px 10px 0px 8px;
    text-align: center;
}

.date-text {
    padding-right: 0px
}

.date-text h3 {
    color: #4b3a33;
    font-size: 1em;
    font-weight: 700
}

.date-text p {
    font-size: 0.8em
}
</style>
