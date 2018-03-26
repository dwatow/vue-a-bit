<template lang="html">
  <footer>
    <div class="container">
      <div class="row">
        <div class="footerLeft col-md-4">
          <h5>VISIT OUR SHOWROOM</h5>
          <img src="../assets/images/show-room.png" alt="showroom">
          <p>This is just a place holder,
          so you can see what the site would look like.<br>
          <br>
          60-962-9541</p>
          <a href="##">info@carvedcreations.com</a>
        </div>

        <div class="footerCenter col-md-4">
          <h5>RECENT BLOG POSTS</h5>
          <div class="post">
            <div class="time">
              <p>Apr <br>
              16</p>
            </div>
            <div class="postDetail">
              <h6>This is just a place holder.</h6>
              <p>This is just a place holder,
              so you can see what the site would look like.</p>
            </div>
          </div>

          <div class="post">
            <div class="time">
              <p>Apr <br>
              15</p>
            </div>
            <div class="postDetail">
              <h6>This is just a place holder.</h6>
              <p>This is just a place holder,
              so you can see what the site would look like.</p>
            </div>
          </div>

          <div class="post">
            <div class="time">
              <p>Apr <br>
              14</p>
            </div>
            <div class="postDetail">
              <h6>This is just a place holder.</h6>
              <p>This is just a place holder,
              so you can see what the site would look like.</p>
            </div>
          </div>
        </div>

        <div class="footerRight col-md-4">
          <div class="newsLetter">
            <h5>JOIN OUR NEWSLETTER</h5>
            <form>
              <input id="email" type="text" placeholder="Enter Email Address Here For Updates"><br>
              <input class="signUpBtn" type="submit" value="SIGN UP">
            </form>
          </div>

          <div class="socialMedia">
            <h5>SOCIAL MEDIA</h5>
            <a class="facebook" href="##"></a>
            <a class="google" href="##"></a>
            <a class="twitter" href="##"></a>
          </div>
        </div>
      </div>

      <div class="copyRight row justify-content-between">
        <p>COPY RIGHT BY Teng Lee. All RIGHT RESERVED</p>
        <ul>
          <li class="active"><a href="##">HOME</a></li>
          <li><a href="##">ABOUT</a></li>
          <li><a href="##">GALLERY</a></li>
          <li><a href="##">BLOG</a></li>
          <li><a href="##">CONTACT</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="css">
/*<!--~~~~~~~~~~~~~~~~~~-->*/
/*<!--      Footer      -->*/
/*<!--~~~~~~~~~~~~~~~~~~-->*/


footer {
  background-color: #e7b32e;
  padding-top: 40px;
  -webkit-box-shadow: 0px -4px 10px rgba(50, 50, 50, 0.25);
  -moz-box-shadow:    0px -4px 10px rgba(50, 50, 50, 0.25);
  box-shadow:         0px -4px 10px rgba(50, 50, 50, 0.25);
  border-top: 1px solid #fff;
}


footer .row {
  background: url(../assets/images/separator-dark.png) repeat-x left bottom;
}


.footerLeft {
  background: url(../assets/images/separator-dark-vertical.png) repeat-y right top;
  padding: 20px 20px 20px 0;
  margin-bottom: 20px;
}


.footerLeft img {
  width: 100%;
  margin: 20px 0;
}


.footerLeft a {
  color: inherit;
  text-decoration: underline;
}


.footerCenter {
  background: url(../assets/images/separator-dark-vertical.png) repeat-y right top;
  padding: 20px 20px 0;
  margin-bottom: 20px;

}


.post {
  display: flex;
  padding: 20px 0;
}


.time {
  background: url(../assets/images/bg-time.png) no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
  margin-right: 10px;
}


.time p {
  color: #fff;
  font-size: 16px;
  font-weight: 100;
  padding: 0;
  margin: 0;
  text-align: center;
}


.postDetail {
  flex: 1;
}


.postDetail p {
  font-size: 0.75rem;
}


.footerRight {
  padding: 20px 0 20px 20px ;
  margin-bottom: 20px;
}


@media screen and (max-width:576px) {
  .footerLeft, .footerRight {
    padding-left: 15px;
    padding-right: 15px;
  }
}


.newsLetter {
  background: url(../assets/images/separator-dark.png) repeat-x left bottom;
}


#email {
  background-color: #fff;
  width: 100%;
  height: 35px;
  color: #4b3a33;
  font-size: 14px;
  border: 3px solid #af8112;
  margin: 0;
}


.signUpBtn {
 background:url(../assets/images/buttons.png) no-repeat;
 background-position: -13px -39px;
 padding-bottom: 55px;
 margin-top: 5px;
 display: block;
 width: 83px;
 height: 26px;
 color: #fff;
 font-size: 12px;
 text-align: center;
 line-height: 24px;
 border: none;
}


.socialMedia h5 {
  margin-top: 23px;
}


.socialMedia a{
  display: inline-block;
  margin-right: 20px;
}

.facebook {
  background: url(../assets/images/icons.png);
  background-position: -46px -112px;
  height: 33px;
  width: 33px;
}


.google {
  background: url(../assets/images/icons.png);
  background-position: -46px -153px;
  height: 33px;
  width: 33px;
}


.twitter {
  background: url(../assets/images/icons.png);
  background-position: -46px -194px;
  height: 33px;
  width: 39px;
}


.copyRight {
  padding-top: 5px;
}


.copyRight, .copyRight a {
    color: #ab7d0f;
    font-size: 14px;
}


.copyRight p{
  display: inline-block;
}


@media screen and (max-width:576px) {
  .copyRight p{
    padding-left: 15px;
  }
}


.copyRight ul {
  list-style: none;
  padding: 0;
}


.copyRight li {
  display: inline;
  padding-left: 15px;
}

</style>
