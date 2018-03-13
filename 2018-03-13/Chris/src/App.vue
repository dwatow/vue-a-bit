<template>
  <div id="app">
      <div id="navigation_background">
          <div id="navigation" class="clear_fix">
              <ul class="menu horizontal_list_initial">
                  <li id="logo">PRETTY GAL</li>
                  <li class="menu_selected">Home</li>
                  <li>Shop</li>
                  <li>Sale</li>
                  <li>Customer Care</li>
                  <li>Stockists</li>
              </ul>
              <img class="view_shopping_cart" src="./assets/bag.png" alt="view_shopping_cart"/>
          </div>
      </div>
      <div id="news">
          <div id="news_background">
              <div id="news_content">
                  <p>FALL & WINTER</p>
                  <button>Shop Now</button>
              </div>
          </div>
          <div id="news_free_shipping_worlwide">
              <p>FREE SHIPPING WORLWIDE</p>
          </div>
      </div>
      <div id="sale_actie">
          <div class="text_center">
              <div class="sale_year_round">
                  <h1>YEAR ROUND</h1>
                  <div class="hr_line"></div>
                  <h2>Must Have Items</h2>
              </div>
              <ul id="sale_img_list" class="horizontal_list_initial">
                  <li><img src="./assets/left.png"/></li>
                  <li><img src="./assets/middle.png"/></li>
                  <li><img src="./assets/right.png"/></li>
              </ul>
          </div>
      </div>
      <div class="footer">
          <ul class="horizontal_list_initial">
              <li class="footer_stay_connected">
                  <p>STAY CONNECTED</p>
                  <ul class="horizontal_list_initial">
                      <li>
                          <i class="fa fa-facebook"></i>
                      </li>
                      <li>
                          <i class="fa fa-twitter"></i>
                      </li>
                      <li>
                          <i class="fa fa-pinterest-p"></i>
                      </li>
                      <li>
                          <i class="fa fa-instagram" aria-hidden="true"></i>
                      </li>
                  </ul>
              </li>
              <li class="footer_be_our_friend">
                  <p>BE OUR FRIEND</p>
                  <input class="update_me_text" type="text" placeholder="Email"/>
                  <input class="update_me_button" type="button" value="Update Me"/>
              </li>
              <li class="need_assistance">
                  <p class="text_center">NEED ASSISTANCE</p>
                  <p class="text_center">123-456-7890</p>
                  <p class="text_center">info@mysite.com</p>
              </li>
          </ul>
          <div class="text_center copy_right">
              (c)2023 by PRETTY GAL. Proudly created with Wix.com
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
body {
    margin: 0;
}
#app {
    font-family: sans-serif, monospace;
    margin: 0;
}

.horizontal_list_initial > li {
    display: inline-block;
}

.horizontal_list_initial {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
}

.text_center {
    text-align: center;
}

.clear_fix {
    clear: both;
    content: "";
    display: table;
}

.debug_css {
    border: 1px red dashed;
}
.footer {
    background-color: #535151;
    color: #d2d2d2;
    min-height: 303px;
}

.text_center {
    text-align: center;
}

.footer>ul {
    text-align: center;
}

.footer>ul>li {
    margin-top: 56px;
    margin-left: 60px;
    margin-right: 60px;
    font-size: 11pt;
    vertical-align: top;
}

.footer p {
    margin-top: 0px;
    margin-bottom: 10px;
}

.horizontal_list_initial ul li {
    margin: 0 10px;
}
.horizontal_list_initial i {
    font-size: 18px;
}


.footer_be_our_friend>p {
    text-align: left;
}

.footer_be_our_friend {
    text-align: right;
}

.footer_be_our_friend>input {
    display: block;
}

.update_me_text{
    background-color: transparent;
    font-size: 14px;
    border: 1px white solid;
    color: white;
    padding: 6px;
    width: 282px;
}

.update_me_button {
    margin-top: 7px;
    padding: 6px 11px;
    float: right;
    border: none;
    background-color: #d3d3d3;
}

.need_assistance {
    font-weight: bold;
}

.need_assistance::first-line {
    font-weight: normal;
}

.copy_right {
    margin: 0 auto;
    font-size: 9pt;
    letter-spacing: 1.5pt;
    margin-top: 62px;
}

#navigation_background {
    background-color: #535151;
    height: 94px;
}

#navigation {
    padding-top: 24px;
    margin: 0 auto;
    width: 924px;
    color: #d2d2d2;
}

.menu {
    float: left;
}

.menu li {
    padding-right: 62px;
    font-size: 16px;
}

#logo {
    font-size: 21px;
    letter-spacing: 5pt;
}

.view_shopping_cart {
    height: 33px;
    float: right;
}

.menu_selected {
    color: #fff;
}
#news_background {
    background-image: url('./assets/cover.jpg');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;

    height: 600px;
    padding-top: 5px;
}

#news_content {
    background-color: rgba(255, 255, 255, 0.6);
    margin: 0 auto;
    margin-top: 250px;
    max-width: 545px;
    height: 172px;

    text-align: center
}

#news_content>p{
    font-family: serif;
    font-size: 50px;
    padding: 30px 0 18px 0;
    margin: 0 auto;
    text-align: inherit;
    letter-spacing: 2px;
}

#news_content>button {
    width: 220px;
    height: 40px;
    font-size: 18px;
    color: white;
    background-color: black;
    border-style: none;
    text-align: inherit;
}

#news_free_shipping_worlwide {
    background-color: #e3e3e3;
    line-height: 45px;
    letter-spacing: 3pt;
}

#news_free_shipping_worlwide p{
    margin: 0 auto;
    text-align: center;
}
div#sale_actie {
    margin: 70px auto;
}

#sale_img_list img {
    height: 410px;
}

#sale_img_list li {
    margin: 0 4px;
}

.text_center {
    text-align: center;
}

div.sale_year_round h1{
    font-family: serif;
    font-size: 27pt;
    letter-spacing: 5pt;
    margin: 0 auto;
}

div.sale_year_round h2{
    font-family: sans-serif;
    font-size: 14pt;
    letter-spacing: 5pt;
    margin-bottom: 68px;
}

div.hr_line {
    border-top: 1px black solid;
    width: 30px;
    margin: 30px auto;
}

</style>
