<template>
  <div id="app">
    <div class="header">
        <div class="container">
          <div class="logo">
            <img src="./images/zerotype.png" alt=""/>
          </div>
          <div class="nav">
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">Feature</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div class="content">
        <div class="content1">
          <h1>IDEAS?</h1>

          <p class="p1">This is just a place holder.</p>
          <p class="p2">You can remove any link to our website from this
          website template,you're free to use this website
          template wuthout linking back to us.</p>
          <div class="btn">
            <img src="images/try_btn.png" alt="" height="39" width="151"/>
            <span class="btn_text">Don't worry it's for free</span>
          </div>




        </div>
        <div class="content2">
          picture
        </div>
        <div class="placeholder">
          This is just a place holder.
        </div>
        <div class="content3">
          <p>

You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
          </p>
          <p>
            This is just a place holder, so you can see what the site would look like.
          </p>
          <p>
            You can remove any link to our website from this website template, you're free to use this website template without linking back to us. This is just a place holder, so you can see what the site would look like.
          </p>
        </div>
        <div class="content4">
          <p>
            You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
          </p>
          <p>
            This is just a place holder, so you can see what the site would look like.
          </p>
          <p>
            You can remove any link to our website from this website template, you're free to use this website template without linking back to us. This is just a place holder, so you can see what the site would look like.
          </p>
        </div>
      </div>

      <div class="footer">

        <div class="container">
          <div class="copy_right">
            ©2023 Zerotype. All Rights Reserved.
          </div>
          <div class="social_icon">
            <ul>
              <li><a href="#"><img src="./images/facebook_icon.png" alt="" /></a></li>
              <li><a href="#"><img src="./images/google_icon.png" alt="" /></a></li>
              <li><a href="#"><img src="./images/twitter_icon.png" alt="" /></a></li>
              <li><a href="#"><img src="./images/pinterest_icon.png" alt="" /></a></li>
            </ul>
          </div>
        </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "~@/lib/css/reset.scss";

.header{
  width: 100%;
  height:150px;
  background: #eeeeee;
}
.logo{
  float: left;
  margin-top: 25px;

}
.nav{
  float: right;
  margin-top: 65px;
}
.nav ul{
  float: left;
}
.nav ul li{
  margin-left: 90px;
  font-family: sans-serif;
  font-size: 20px;
  float:left;
  display: block;
}
.nav ul li a{
  text-decoration: none;
  color:black;
}
.nav ul li a:hover{
  color: orange;
}

.content{
  height: 600px;
  width: 960px;
  margin: 0 auto;
  padding-top: 35px;
  font-family: sans-serif;
}
.content1{

  float: left;
  width: 400px;
  height:317px;
  margin-left: 40px;
}
.content1 h1{
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 20px;
}
.p1{
  font-size: 20px;
  padding-bottom: 15px;
  font-weight: bold;
  margin-right: 10px;
}
.p2{
  line-height: 1.2em;
}
.btn{
  padding-top: 20px;
  padding-left: 50px;
}
.btn_text{
  display: block;
  font-size: 12px;
}
.content2{
  text-indent: -99999px;
  height: 317px;
  float: left;
  width: 400px;
  background: url(images/download_pic.png) no-repeat 0 0;
  margin-left:40px;
}
.placeholder{
  float: left;
  font-size: 30px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
}

.content3{
  width: 400px;
  float: left;
  margin-left: 40px;
}
.content3 p{
  line-height: 1.2em;
  margin-bottom: 20px;
}
.content4{
  width: 400px;
  float: left;
  margin-left: 40px;
}
.content4 p{
  line-height: 1.2em;
  margin-bottom: 20px;
}

.footer{
  width: 100%;
  height:70px;
  margin-top: 60px;
  clear: both;
  background: #eeeeee;
}
.container{
  width: 960px;
  margin: 0 auto;

}
.copy_right{
  float: left;
  line-height: 70px;
}
.social_icon{
  float: right;
  line-height: 70px;
}
.social_icon ul{
  float: right;
}
.social_icon ul li{
    float:left;
    padding-top: 10px;

    padding-left: 10px;
    display: block;
}
.social_icon ul li a{
  text-decoration: none;
}



</style>
