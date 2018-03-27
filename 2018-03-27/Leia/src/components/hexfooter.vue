<template>
  <div class="hexfooter">
    <div class="footer">
            <ul>
                <li class="about">
                    <p>關於 六角西餐廳</p>
                    Curabitur lobortis id lorem id bibndum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.
                </li>
                <li class="contact">
                    <p>聯絡方式</p>
                    <ul>
                        <li>高雄市中正五路到底
                            </li><li>+886 886 886</li>
                            <li>service@hexschool.com</li>
                    </ul>
                    </li>
            </ul>

            <div class="footer-logo">
                <img src="./../assets/logo_l@svg.svg">
                <ul>
                    <li><a href="" class="google"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
                    <li><a href="#" class="twitter"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.facebook.com/hexschool/" class="fb"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div class="clearfix"></div>
        </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "footer"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*表尾資訊*/
.footer {
  color: #3d1101;
  margin: 0 auto;
  max-width: 1200px;
  padding: 54px 0;
  background-color: #efe9e7;
}
@media (max-width: 414px) {
  .footer {
    width: 100%;
    padding-top: 50px;
  }
}
@media (max-width: 414px) {
  .footer ul li {
    width: 100%;
  }
}

.footer-logo {
  display: flex;
  justify-content: flex-end;
}
.footer-logo ul {
  margin: 22px 0 0 114px;
}
@media (max-width: 414px) {
  .footer-logo ul li {
    float: none;
  }
}
@media (max-width: 768px) {
  .footer-logo ul {
    margin: 0;
  }
}
@media (max-width: 768px) {
  .footer-logo {
    max-width: 245px;
    float: left;
  }
}
@media (max-width: 414px) {
  .footer-logo {
    float: right;
    margin-right: 10px;
  }
}

.about,
.contact {
  max-width: 300px;
  float: left;
  margin-left: 21px;
}
.about p,
.contact p {
  font-size: 24px;
  padding-bottom: 16px;
}
@media (max-width: 768px) {
  .about,
  .contact {
    margin: 0 0 30px 30px;
    max-width: 235px;
  }
}
@media (max-width: 414px) {
  .about,
  .contact {
    float: none;
    margin-bottom: 30px;
  }
}

.contact ul {
  padding-left: 20px;
}
.contact ul li {
  list-style: disc;
}

/*footer-icon*/
.google {
  color: #db4437;
  font-size: 36px;
  float: left;
  margin: 6px;
}

.twitter {
  color: #41abe1;
  font-size: 36px;
  float: left;
  margin: 6px;
}

.fb {
  color: #3a5795;
  font-size: 36px;
  float: left;
  margin: 6px;
}
</style>
