<template>
<div>
  <div id="header" class="padding">
    <div class="nav">
      <img id="logo" src="../assets/ZERO_TYPE.png" alt="Zero Type">
      <nav>
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">News</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  </div>

  <div class="banner padding">  
    <div class="block">
        <h1>IDEAS?</h1>
        <h2>This is just a place holder.</h2>
        <p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us.</p>  
        <div class="btn-zone">
          <a href="#" class="button">TRY IT NOW!</a>
          <p class="text-small">Don't worry it's for free</p>
        </div>

    </div>
    <div class="block">
      <img id="banner-img" src="../assets/TOY_BOX.png" alt="Banner Picture">        
    </div>
  </div>
  <div class="content padding">
    <h2 class="content-head">This is just a place holder.</h2>
    <div class="block">
      <p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us.</p>
      <p>This is just a place holder, so you can see what the site would look like.</p>
      <p>You can remove any link to our website from thiswebsite template, you're free to use this websitetemplate without linking back to us. This is just aplace holder, so you can see what the site would look like.</p>
    </div>
    <div class="block">
      <p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us.</p>
      <p>This is just a place holder, so you can see what the site would look like.</p>
      <p>You can remove any link to our website from thiswebsite template, you're free to use this websitetemplate without linking back to us. This is just aplace holder, so you can see what the site would look like.</p>
    </div>
  </div>

  <div class="footer padding">
    <div class="ftr-l">
      <p>&copy; 2023 Zerotype. All Rights Reserved.</p>
    </div>
    <div class="ftr-r">
      <a href="#"><i class="fab fa-facebook-square fa-3x"></i></a>
      <a href="#"><i class="fab fa-google-plus-square fa-3x"></i></a>
      <a href="#"><i class="fab fa-twitter-square fa-3x"></i></a>
      <a href="#"><i class="fab fa-pinterest-square fa-3x"></i></a>
    </div>
  </div>  
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 1.8rem;
}

.text-small {
  font-size: 1rem;

}

#header {
  background: #EEEEEE;
  border-bottom: 1px solid #dbdbdb;       
}


#logo {
  display: inline-block;
  width: 15%;
  vertical-align: middle;
}

nav {
  width: 84%;
  display: inline-block;
  font-size: 1vw;
}

nav a, nav a:visited {
  color: #838383;
  text-decoration: none;
  display:inline-block;
  width: 19%;
  text-align: center;

}

nav a:hover {
  color: #fa9805;
}

.padding {
  padding: 25px 12%;
}

.banner {
  background-color: #fdfdfd;

}

.block {
  display: inline-block;
  width: 39%;
  padding: 2% 4%;
  vertical-align: top;
  position: relative;
}

 #banner-img {
  width: 100%;
 }

.button {
    font-size: 1.8rem;
    padding: 3% 10%;
    border-radius: 10px;
    border: none;
    background: linear-gradient(#ffb847 50%, #fa9500 50%);
    color: #FFF;
    text-decoration: none;
    display: inline-block;
}

.btn-zone{
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 70%;
  margin: 5% 0%;
}

.content-head {
  padding: 1% 4%;
}

.content p {
  padding: 5% 0%;
}

.footer {
  background: #efefef;
  border-top: 1px solid #dbdbdb;
  overflow: hidden;
}

.ftr-l, .ftr-r {
  display:inline-block;       
}

.ftr-l {
  padding: 1% 0%;
}

.ftr-r {
  float: right;
  width: 30%;
  padding-right: 5%;
}

.ftr-r a, .ftr-r a:visited {
  color: #000;
}

.ftr-r a {
  padding: 0% 3%;
}
</style>
