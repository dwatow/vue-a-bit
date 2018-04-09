<template>
  <div id="app">
    <head>
      <title>Zero Type</title>
      <!-- <link rel="stylesheet" type="text/css" href="bootstrap.min.css"> -->
      <link rel="stylesheet" type="text/css" href="style.css">
    </head>

    <body>
      <header>
        <div class="container flexbox">
          <a href="##">
            <img src="./assets/logo 2.png" alt="logo">
          </a>

          <ul class="navbar">
            <li class="active"><a href="##">HOME</a></li>
            <li><a href="##">FEATURES</a></li>
            <li><a href="##">NEWS</a></li>
            <li><a href="##">ABOUT</a></li>
            <li><a href="##">CONTACT</a></li>
          </ul>
        </div>
      </header>

      <section class="contentBackground">
        <div class="container">
          <div class="upperContent">
            <div class="upperLeft">
              <h1>IDEAS?</h1>
              <h2>This is just a place holder.</h2>
              <p>You can remove any link to owr website from this sebsite template, you're free to use this website template without linking back to us.</p>
              <div class="button">
                <img src="./assets/button.png">
                <p>Don't worry it's for free.</p>
              </div>
            </div>

            <div class="upperRight">
              <img src="./assets/box.png">
            </div>
          </div>
        </div>
      </section>

      <section class="container">
        <h2 class="lowerContentTitle">This is just a place holder.</h2>
        <div class="lowerContent">
          <div class="lowerLeft">
            <p>
  				  	You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
  					</p>
            <p>
  						This is just a place holder, so you can see what the site would look like.
            </p>
            <p>
              You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
            </p>
          </div>

          <div class="lowerRight">
            <p>
              You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
            </p>
            <p>
              This is just a place holder, so you can see what the site would look like.
            </p>
            <p>
              You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
            </p>
          </div>
        </div>
      </section>
    </body>

    <footer>
      <div class="container">
       <div class="copyright">
          <p>	&#9400;  2023 Zerotype. All Rights Reserved.</p>

          <div class="logolink">
            <a href="facebook">
              <img src="./assets/facebook.png">
            </a>
            <a href="google">
              <img src="./assets/google.png">
            </a>
            <a href="twitter">
              <img src="./assets/twitter.png">
            </a>
            <a href="printerest">
              <img src="./assets/pinterest.png">
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
/*<!--~~~~~~~~~~~~~~~~~~-->*/
/*<!--  Navigation bar  -->*/
/*<!--~~~~~~~~~~~~~~~~~~-->*/
* {
  /*box-shadow: 0 0 1px red;*/
}


a {
  cursor: pointer;
  text-decoration: none;
}


header {
  background-color: #eeeeee;
}


.flexbox {
  display: flex;
}


header ul {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}


header ul a {
  color: black;
  font-size: 16px;
}


/*<!--~~~~~~~~~~~~~~~~~~-->*/
/*<!--   Content   -->*/
/*<!--~~~~~~~~~~~~~~~~~~-->*/

body {
  margin: 0;
}


.container {
  width: 960px;
  margin-left: auto;
  margin-right: auto;
}


p {
 font-family: sans-serif;
 font-size: 18px;;
 color: #707C80;

}


.contentBackground{
  background-color: #fdfdfd;
}

.upperContent {
  display: flex;
}


.upperLeft, .upperRight{
  flex: 1;
  padding: 50px 20px;
}



.upperLeft h1 {
  font-size: 80px;
  margin: 0;
  font-family: sans-serif;

}


.upperLeft h2 {
  margin: 0;
  font-family: sans-serif;
}


.button{
  width: 225px;
  margin: 0 auto;
}


.button img {
  border-radius: 6px;
}


.button p {
  margin: 0
}


.upperRight {
  text-align: center;
}


.lowerContentTitle {
  font-family: sans-serif;
  margin-top: 50px;
  margin-bottom: 30px;
}


.lowerContent {
  display: flex;
}


.lowerLeft {
  flex: 1;
  padding-right: 40px;
  font-size: 20px;
}


.lowerRight {
  flex: 1;
  padding-left: 40px;
  font-size: 20px;
}


.lowerContent p {
  text-align: justify;
}


/*<!--~~~~~~~~~~~~~~~~~~-->*/
/*<!--   Footer   -->*/
/*<!--~~~~~~~~~~~~~~~~~~-->*/

footer {
  background-color: #eeeeee;
}


.copyright {
  display: flex;
  padding-top: 50px;
  justify-content: space-between;
}


.copyright p {
  font-size: 12px;
}

</style>
