<template>
  <div class="hexheader">
    <div class="header">
            <div class="menu">
                <div class="logo">六角西餐廳</div>
                <a href="#" class="showmenu"><i class="fa fa-bars" aria-hidden="true"></i></a>
                <ul class="topmenu">
                    <li><a href="index.html">首頁</a></li>
                    <li><a href="login.html">註冊</a></li>
                    <li><a href="cart.html">訂購</a></li>
                </ul>
            </div>
            <div class="banner">
                <div class="clearfix"></div>
                <div class="banner-text">
                    <h4><span>咬一口</span>就無法忘懷的漢堡</h4>
                    <h5>七夕絕對無法錯過的好滋味<br>
                        <i class="fa fa-cutlery" aria-hidden="true"></i>六角大漢堡<i class="fa fa-cutlery" aria-hidden="true"></i>
                    </h5>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: #000;
}

.menu {
  margin: auto 50px;
  height: 56px;
}
@media (max-width: 414px) {
  .menu {
    margin: auto;
  }
}

.logo {
  background-image: url("../assets/logo_w(null).svg");
  width: 120px;
  height: 24px;
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
  float: left;
  margin: 17px 20px;
}

.topmenu {
  float: right;
}
.topmenu li {
  float: left;
}
@media (max-width: 414px) {
  .topmenu li {
    float: none;
    color: #000;
  }
}
.topmenu li:hover {
  background-color: #fff;
}
@media (max-width: 414px) {
  .topmenu li:hover {
    background-color: #fff;
    color: #000;
  }
}
.topmenu li a {
  text-decoration: none;
  color: #fff;
  float: left;
  font-size: 16px;
  padding: 1em;
  display: block;
}
.topmenu li a:hover {
  color: #000;
}
@media (max-width: 414px) {
  .topmenu li a {
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    float: none;
  }
}
@media (max-width: 414px) {
  .topmenu {
    max-height: 0px;
    overflow: hidden;
    position: absolute;
    -webkit-transition: max-height 2.3s;
    -o-transition: max-height 2.3s;
    transition: max-height 2.3s;
    top: 56px;
    background-color: #000;
    left: 0;
    right: 0;
  }
}

.showmenu {
  display: none;
  text-decoration: none;
  color: #fff;
}

.clearfix {
  clear: both;
}

.banner {
  height: 400px;
  background-image: url("../assets/header_desktop@2x.png");
  background-size: 110%;
  background-repeat: no-repeat;
  background-position: center;
}
@media (max-width: 768px) {
  .banner {
    background-image: url("../assets/header_desktop.png");
    background-size: 150%;
  }
}
@media (max-width: 414px) {
  .banner {
    background: url(../assets/header_mobile.png);
    background-repeat: no-repeat;
    background-position: center;
  }
}

.banner-text {
  max-width: 420px;
  height: 112px;
  margin: 87px auto;
  background-color: #000;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  text-align: center;
  padding: 20px;
}
.banner-text h1 {
  font-size: 36px;
  margin-bottom: 16px;
}
@media (max-width: 768px) {
  .banner-text h1 {
    width: 288px;
    margin: 0 auto;
  }
}
@media (max-width: 768px) {
  .banner-text h1 {
    height: 96px;
    line-height: 40px;
  }
}
@media (max-width: 414px) {
  .banner-text span {
    display: block;
  }
}
@media (max-width: 320px) {
  .banner-text {
    padding: 10px;
  }
}

.contant {
  background-color: #efe9e7;
  height: auto;
}
</style>
