<template>
  <div class="hexcontainer">
      <div class="contant">
            <div class="intro">

                <div class="intro-text">
                    客人總是在詢問
                    <br> 這麼好吃的秘訣是什麼

                </div>
                <ul>
                    <li>
                        <div class="intro-img">
                            <img src="./../assets/feature_1.png"></div>
                        <h3>台灣本土蔬菜</h3>
                        <h4>In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris.

                        </h4>
                    </li>
                    <li>
                        <div class="intro-img">
                            <img src="./../assets/feature_2.png"></div>
                        <h3>專業米其林廚師</h3>
                        <h4>Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.

                        </h4>
                    </li>
                    <li>
                        <div class="intro-img">
                            <img src="./../assets/feature_3.png"></div>
                        <h3>對於專業不能退讓</h3>
                        <h4>Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.

                        </h4>
                    </li>
                </ul>
            </div>
            <div class="chef">
                <div class="chef-img"><img src="./../assets/main_chef_brown.png"></div>
                <div class="chef-intro">
                    <h5>
                        今日主廚：帕金森、梅在帕
                        <p>Tody Chef: Plum in Shock</p>
                    </h5>
                    <h6>

                        Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur
                        vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor
                        sollicitudin fermentum. Donec congue lorem a molestie bibendum.
                    </h6>
                </div>
            </div>
            <div class="experience">
                <div class="exp-intro">聽聽別人的感想</div>
                <ul>
                    <li>
                        <img src="./../assets/avatar_1.png">
                        <div class="exp-text">
                            <div class="exp-title">高雄一口吃</div>
                            自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。
                        </div>
                    </li>
                    <li>
                        <img src="./../assets/avatar_2.png">
                        <div class="exp-text">
                            <div class="exp-title">廟口小霸王</div>
                            自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。
                        </div>
                    </li>
                    <li>
                        <img src="./../assets/avatar_3.png">
                        <div class="exp-text">
                            <div class="exp-title">春天也來了</div>
                            自從吃了這家餐廳以後，我口水連續流了一個多月都沒停，下次不要再被我遇到，不然我一定連他們桌子都啃下去。
                        </div>
                    </li>
                </ul>
            </div>
            <div class="book">
                <p class="book-intro">我們的位置不太夠坐<br> 要不要先訂位呢？
                </p>
                <div class="book-text">
                    <img src="./../assets/map.png">
                    <form class="form-index">
                        <p class="my-0">姓名</p>
                        <input class="text" type="text" name="name" value="六角講師吃尾牙">
                        <p class="my-0">電話</p>
                        <input class="text" type="text" name="phone" value="02-1234567">
                        <p class="my-0">信箱</p>
                        <input class="text" type="text" name="mail" value="test@gmail.com">
                        <p class="my-0">人數</p>
                        <input class="text" type="text" name="number">
                        <p class="my-0">是否需要素食</p>
                        <label for="yes">是</label>
                        <input type="radio" name="food" id="vegetable">
                        <label for="yes">否</label>
                        <input type="radio" name="food" id="meat">
                        <div class="button mx-5 px-3 my-5">
                            <input type="submit" value="送出">
                            <input type="submit" value="取消">
                        </div>
                    </form>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.contant {
  background-color: #efe9e7;
  height: auto;
}
.intro {
  height: 600px;
  color: #3d1101;
}
@media (max-width: 768px) {
  .intro {
    height: auto;
  }
}
.intro h3 {
  font-size: 18px;
  margin: 11px 0 20px 0;
  text-align: center;
}
.intro h4 {
  font-size: 16px;
  width: 260px;
  height: 105px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .intro h4 {
    max-width: 196px;
    height: auto;
    margin-bottom: 50px;
  }
}
.intro li {
  width: 32%;
  float: left;
  height: 380px;
}
@media (max-width: 768px) {
  .intro li {
    height: auto;
  }
}
@media (max-width: 414px) {
  .intro li {
    width: 100%;
    height: 450px;
    margin-bottom: 40px;
  }
}
@media (max-width: 320px) {
  .intro li {
    height: auto;
  }
}

.intro-img {
  text-align: center;
}
.intro-text,
.exp-intro,
.book-intro {
  color: #3d1101;
  font-size: 24px;
  text-align: center;
  line-height: 32px;
  padding: 50px 0 30px 0;
}

.experience ul {
  max-width: 1200px;
  justify-content: space-around;
  display: flex;
}
.experience ul li {
  margin-bottom: 50px;
  color: #3d1101;
  display: flex;
}
.experience ul li img {
  width: 50px;
  height: 50px;
}
@media (max-width: 768px) {
  .experience ul li {
    margin: 0 auto 60px;
    float: none;
  }
}
@media (max-width: 414px) {
  .experience ul li {
    max-width: 340px;
    margin: 0 auto;
  }
}
@media (max-width: 1024px) {
  .experience ul {
    margin-left: 0px;
  }
}
@media (max-width: 414px) {
  .experience ul {
    margin: 0;
  }
}

.experience img {
  float: left;
  display: block;
}

.exp-text {
  margin: 0 20px 0 13px;
  height: 200px;
  width: 220px;
  float: left;
}
@media (max-width: 768px) {
  .exp-text {
    height: 293px;
    max-width: 155px;
  }
}
@media (max-width: 414px) {
  .exp-text {
    margin: 0 20px 0 13px;
    height: 200px;
    max-width: 220px;
    float: left;
  }
}

.exp-title {
  margin: 22px auto;
}

.chef {
  background-color: #3d1101;
  display: flex;
}
@media (max-width: 768px) {
  .chef {
    height: 460px;
  }
}
@media (max-width: 414px) {
  .chef {
    height: auto;
  }
}

.chef-img {
  width: 50%;
}
.chef-img img {
  width: 100%;
}
@media (max-width: 768px) {
  .chef-img img {
    height: 460px;
  }
}
@media (max-width: 768px) {
  .chef-img {
    max-width: 373px;
    margin: 0 25px 0 0;
  }
}
@media (max-width: 414px) {
  .chef-img {
    max-width: 700px;
    margin: 0 auto;
    float: none;
  }
}

.chef-intro {
  max-width: 50%;
  color: #efe9e7;
  font-size: 16px;
  margin-left: 5rem;
}
@media (max-width: 768px) {
  .chef-intro {
    margin: 0 auto;
    max-width: 330px;
    padding-bottom: 30px;
  }
}
@media (max-width: 414px) {
  .chef-intro {
    float: none;
    margin: 0 auto;
    width: 260px;
    padding-bottom: 30px;
  }
}

h5 {
  font-size: 20px;
  padding-top: 81px;
}
h5 p {
  font-size: 14px;
}
@media (max-width: 768px) {
  h5 {
    padding-top: 30px;
  }
}

h6 {
  padding-top: 16px;
  max-width: 410px;
}

.book {
  padding-top: 1px;
  background-color: #fafafa;
}
.book img {
  display: block;
  margin-left: 50px;
}
@media (max-width: 768px) {
  .book img {
    margin-left: 0;
    max-width: 330px;
    padding-bottom: 30px;
  }
}
@media (max-width: 414px) {
  .book img {
    margin-left: 0;
    max-width: 300px;
    float: none;
    padding-bottom: 30px;
  }
}

.book-text {
  margin: 0 auto;
  padding-bottom: 5rem;
  max-width: 960px;
  display: flex;
}
@media (max-width: 768px) {
  .book-text {
    max-width: 700px;
  }
}
@media (max-width: 414px) {
  .book-text {
    margin: 0 auto;
    width: 300px;
  }
}

.form-index {
  margin-left: 34px;
  height: 400px;
  color: #3d1101;
  font-size: 14px;
}
.form-index input {
  color: #4a4a4a;
  font-family: Microsoft JhengHei;
  padding: 3px;
}
@media (max-width: 768px) {
  .form-index {
    margin-left: 11px;
    height: auto;
    padding-bottom: 50px;
  }
}

.text {
  width: 300px;
  margin: 10px 0;
}
@media (max-width: 768px) {
  .text {
    width: 200px;
  }
}

.button input {
  width: 70px;
  margin-right: 10px;
  color: #fff;
  background-color: #666;
  border-radius: 3px;
  height: 32px;
  border: 0px;
  font-size: 14px;
  font-family: Microsoft JhengHei;
}
.button input:hover {
  background-color: #f56c23;
}
@media (max-width: 768px) {
  .button {
    margin: 10px 0 0 130px;
  }
}
@media (max-width: 414px) {
  .button {
    margin: 50px 0 0 120px;
  }
}
</style>
