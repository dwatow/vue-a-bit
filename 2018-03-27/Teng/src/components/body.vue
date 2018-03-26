<template lang="html">
  <div class="container">
    <div class="upperContent row">
      <div class="chairImgBox col-sm-6">
        <div class="chairDetails">
          <p class="whickerChair">Whicker Chair</p>
          <p class="price">$250.00</p>
          <a href="##" class="viewBtn">VIEW DETAILS</a>
        </div>
      </div>

      <div class="chairDescriptionBox col-sm-6">
        <h1>THIS IS JUST A PLACE HOLDER.</h1>
        <p>You can remove any link to our website from this website template,
          you're free to use this website template without linking back to us.
          This is just a place holder,
          so you can see what the site would look like.
          This is just a place holder.</p>
      </div>
    </div>

    <div class="middleContent row ">
      <div class="middleLeft col-sm-4">
        <img src="../assets/images/living-room.jpg" alt="">
        <div class="middleDescription">
          <h5>LIVING ROOM</h5>
          <p>
            This website template has been designed by
            Free Website Templates for you, for free.
            You can replace all this text with your own text.</p>
        </div>
      </div>

      <div class="middleCenter col-sm-4">
        <img src="../assets/images/bedroom.jpg" alt="">
        <div class="middleDescription">
          <h5>BEDROOM</h5>
          <p>You can remove any link to our website from this website template,
            you're free to use this website template without linking back to us.</p>
        </div>
      </div>

      <div class="middleRight col-sm-4">
        <img src="../assets/images/kitchen.jpg" alt="">
        <div class="middleDescription">
          <h5>KITCHEN</h5>
          <p>If you're having problems editing this website
            template, then don't hesitate to ask for help on
            the Forum.</p>
        </div>
      </div>
    </div>

    <div class="bottomContent row">
      <div class="bottomleft col-sm-4">
        <h6>FOR ORDER AND INQUIRIES PLEASE CALL:</h6>
        <p>760-962-9541</p>
        <h6>OR YOU CAN VISIT US AT:</h6>
        <p>THIS IS JUST A PLACE HOLDER.</p>
      </div>

      <div class="bottomRightBox col-sm-8">
        <h6 style="padding-left:20px">FROM THE BLOG</h6>
        <div class="row">
          <div class="col-12 col-sm-6">
            <div class="innerBox">
              <div class="innerBoxDetails">
                <p>April 16, 2011</p>
                <h6>This is just a place holder.</h6>
                <a href="##">READ MORE</a>
              </div>
              <img class="" src="../assets/images/carving-small.png" alt="carving">
            </div>
          </div>

          <div class="col-12 col-sm-6">
            <div class="innerBox">
              <div class="innerBoxDetails">
                <p>April 15, 2011</p>
                <h6>This is just a place holder.</h6>
                <a href="##">READ MORE</a>
              </div>
              <img class="" src="../assets/images/resort-small.png" alt="resort">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
/** {
  border: 1px red solid;
}*/


/*<!--~~~~~~~~~~~~~~~~~~-->*/
/*<!--    Font Style    -->*/
/*<!--~~~~~~~~~~~~~~~~~~-->*/


h1, h2, h3, h4, h5, h6, li, .chairDetails a,.time p , .signUpBtn , .innerBox{
  font-family: "Oswald";
}



/*<!--~~~~~~~~~~~~~~~~~~-->*/
/*<!--upperContent      -->*/
/*<!--~~~~~~~~~~~~~~~~~~-->*/


body {
  background-image: url("../assets/images/bg-body.png");
  margin: 0;
}


a {
  cursor: pointer;
  text-decoration: none;
}


.upperContent {
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
}


.chairImgBox {
  position: relative;
  background-image:url('../assets/images/chair.jpg');
  background-position: center;
  background-size: cover;
}


@media screen and (max-width: 576px) {
  .chairImgBox {
    height: 400px;
  }
}


.chairDetails {
  position: absolute;
  bottom: 30px;
  right: 30px;
  text-align: center;
}


.whickerChair {
  margin-bottom: 0;
}


.price {
  font-size: 26px;
  font-weight: 300;
  line-height: 26px;
  margin-bottom: 5px;
}


.viewBtn {
  display: block;
  background-position: 0 0;
  background:url(../assets/images/buttons.png) no-repeat;
  width: 109px;
  height: 34px;
  text-align: center;
}


.chairDetails a {
  line-height: 34px;
  color: #966a01;
  font-size: 16px;
}


.chairDetails a:hover{
  color: #241b18;
  text-decoration: none;
}


.chairDescriptionBox {
  background-image: url(../assets/images/bg-pattern.jpg);
  background-size: cover;
  padding: 70px;
}


.chairDescriptionBox img {
  width: 100%;
  height: 100%;
}


.chairDescriptionBox h1 {
  font-weight: 200;
  letter-spacing: 2px;
  text-align: center;
  line-height: 60px;
  text-shadow: 1px 1px #fff;
  margin-bottom: 20px;
}


.chairDescriptionBox p{
 text-align: justify;
 line-height: 30px;
}


/*<!--~~~~~~~~~~~~~~~~~~-->*/
/*<!--  middleContent   -->*/
/*<!--~~~~~~~~~~~~~~~~~~-->*/


.middleContent img {
  width: 100%;
}


.middleLeft, .middleCenter, .middleRight {
  padding: 0;
}


.middleDescription {
  background: url(../assets/images/separator-light.png) repeat-x top left;
  padding: 20px;
}


.middleLeft, .middleRight {
  background-color: #4b3a33;
}


.middleCenter {
  background-color: #241b18;
}


.middleContent h5 {
  color: #ffc947;
}


.middleContent p {
  color: #fff;
  font-size: 14px;
  line-height: 22px;
}


/*<!--~~~~~~~~~~~~~~~~~~-->*/
/*<!--  bottomContent   -->*/
/*<!--~~~~~~~~~~~~~~~~~~-->*/


.bottomContent {
  background-color: #fff;
}


.bottomleft {
  padding: 40px 20px;
  background: url(../assets/images/separator-light-vertical.png) repeat-y top right;
}


.bottomContent h6 {
  color: #7b7b7b;
  margin-bottom: 0;
}


.bottomleft p {
  font-family: "Oswald";
  font-size: 30px;
  font-weight: lighter;
  margin-bottom: 40px;
}


.bottomRightBox {
  padding-top: 40px;
  padding-bottom: 40px;
}


.innerBox {
  overflow: hidden;
  margin: 15px;
  background-color: #ddd;
}


.innerBoxDetails {
  float: left;
  width: 50%;
  height: auto;
  padding: 15px;
}


.innerBox img {
  float: right;
  width: 50%;
  height: auto;
}


.innerBoxDetails p {
  font-size: 16px;
}


.innerBoxDetails h6 {
  color: #340000;
  line-height: 1.25em;
  padding-bottom: 10px;
}


.innerBoxDetails a{
  color: #340000;
}
</style>
