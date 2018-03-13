<template>
<div>
  <div id="header" class="row">
    <p id="logo">PRETTY GAL</p>
    <nav id="nav">
      <a href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">Sale</a>
      <a href="#">Customer Care</a>
      <a href="#">Stocklists</a>
    </nav>
    <img id="bag" src="./images/bag.png">
  </div>
  <div id="jumbotron">
    <div id="jumbo-ad">
      <h1>FALL & WINTER</h1>
      <button>Shop Now</button>
    </div>
    <p id="jumbo-banner">FREE SHIPPING WORLDWIDE</p>
  </div>
  <div id="content" class="row">
    <h1>YEAR ROUND</h1>
    <hr>
    <p>Must Have Items</p>
    <div class="flex-container">
      <div class="flex-items">
        <img src="./images/pl.png">
      </div>
      <div class="flex-items">
        <img src="./images/pm.png">
      </div>
      <div class="flex-items">
        <img src="./images/pr.png">
      </div>
    </div>
  </div>
  <div id="footer" class="row">
    <div class="flex-container">
      <div id="footer-l" class="flex-items">
        <p>STAY CONNECTED</p>
        <a href="#"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-pinterest-p fa-2x" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-camera-retro fa-2x" aria-hidden="true"></i></a>
      </div>
      <div id="footer-c" class="flex-items">
        <p>BE OUR FRIEND</p>
        <form>
          <div>
            <input type="email" id="email" name="email" placeholder="Email">
          </div>
          <div>
            <input type="submit" id="submit" align="right" value="Update Me">
          </div>
        </form>
      </div>
      <div id="footer-r" class="flex-items">
        <p>NEED ASSISTANCE?</p>
        <div id="emphasize">
          <p>123-456-7890</p>
          <p>info@mysite.com</p>
        </div>
      </div>
    </div>
    <p id="footer-b">copy 2023 by PRETTY GAL. Proudly created with <a href="wix.com">Wix.com</a></p>
  </div>  
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #fcfcfc;
}

::-moz-placeholder { /* Firefox 19+ */
  color: #fcfcfc;
}

.row {
  padding: 2% 10%;
}

.flex-container{
  display: flex;
  justify-content: center;
  padding: 2% 0%;
}

.flex-items {
  width: 30%;
  overflow: hidden;
  margin: 0% 1%;
}

.flex-items img {
  width: 100%;
}

#header, #footer {
  background-color: #535050;
}

#header p {
  color: #d4d4d4;
}

#logo, #nav, #bag {
  display: inline-block;
  text-align: center;
}

#logo {
  width: 20%;
  font-size: 1.2vw;
  font-weight: bold;
  letter-spacing: 5px;
}

#nav {
  width: 70%;
}

#nav a {
  padding: 0% 4%;
  font-size: 1vw;
  color: #d4d4d4;
  text-decoration: none;
}

#bag {
  width: 3%;
  vertical-align: middle;
}

#nav a:hover {
  color: #f1f1f1;
}

#jumbotron {
  background-image: url('./images/cover.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  padding-top: calc(1210 / 3840 * 100%);
  position: relative;
}

#jumbo-ad {
  width: 40%;
  height: 30%;
  position: absolute;
  top: 40%;
  left: 30%;
  background-color: rgba(255, 255, 255, 0.5);
}

#jumbo-ad h1 {
  padding: 2%;
  font-size: 3.5vw;
  text-align: center;
  font-family: Georgia, "Times New Roman", serif;
  letter-spacing: 5px;
}

#jumbo-ad button {
  width: 40%;
  display: block;
  margin: auto;
  font-size: 1.5vw;
  color: #ececec;
  text-align: center;
  padding: 1% 0%;
  background-color: #000;
  border: none;
}

#jumbo-banner {
  padding: 1% 0%;
  background-color: #e4e4e4;
  color: #434345;
  text-align: center;
  letter-spacing: 5px;
}

#content h1 {
  padding: 2%;
  text-align: center;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 3vw;
  font-weight: bold;
  letter-spacing: 1.1rem;

}

#content p {
  padding: 2% 0%;
  color: #434345;
  text-align: center;
  letter-spacing: 5px;
  font-size: 1.4rem;
}

#content hr {
  width: 3%;
  text-align: center; /*IE*/
  margin: auto;

}

#footer * {
  color: #c9c9c9;
}

#footer-l, #footer-r, #footer-b{
  text-align: center;
  letter-spacing: 2px;
}

#footer-l i {
  padding: 3% 2%;
}

#footer-l a:hover i {
  color: #000;
}

#footer-b a {
  text-decoration-color: #000;
}

#email {
  width: 95%;
  padding: 2%;
  background-color: #535050;
  border: 1px solid #e3e2e2;
}

#submit {
  float: right;
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 2%;
  background-color: #d4d4d4;
  color: #000;
  border: none;
}

#emphasize p {
  color: #fcfcfc;
}
</style>
