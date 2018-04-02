<template>
  <div class="main">
      <div class="titleArea">
          <p class="title">每週資訊分享活動</p>
          <button class="addActiveBtn">發佈/管理活動</button>
          <div class="selectorTable">
              <div class="selectorItem left checked">全部活動</div>
              <div class="selectorItem">即將開始活動</div>
              <div class="selectorItem right">已經結束活動</div>
          </div>
      </div>
      <ul class="speechList">
        <li v-for="item in allSpeach">
          <img :src="item.class_img" class="classImg">
          <div class="speechInfo">
            <p class="speechTitle">{{ item.title }}</p>
            <p class="speechDate">{{ item.speech_date }}</p>
            <div class="speaker">
              <img :src="item.speaker_img" class="speakerPic">
              <span class="speakerName">{{ item.speaker }}</span>
              <p class="speechContent">{{ item.message }}</p>
            </div>
          </div>
          <div class="speechStatus">已經結束</div>
        </li>
      </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      allSpeach: ""
    };
  },
  created() {
    axios
      .get("https://devche.com/api/speech/data")
      .then(res => {
        console.log(res.data.result);
        this.allSpeach = res.data.result.sort(function (a, b) {
          return parseInt(b.speech_date.split('-').join('')) - parseInt(a.speech_date.split('-').join(''))
        });
      })
      .catch(error => console.log(error));
  }
};
</script>
<style scoped>
::-webkit-scrollbar { 
    display: none; 
}

.main {
  width: calc(100% - 290px);
  padding: 0 145px;
  /* height: 500px; */
}

.titleArea {
  width: 100%;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.title {
  font-family: PingFangTC;
  font-size: 30px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #0f375b;
}

button {
  width: 196px;
  height: 40px;
  border-radius: 5px;
  background-color: #1e8ba6;
  outline: none;
  border: none;
  font-family: PingFangTC;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  position: absolute;
  right: 0;
}

.selectorTable {
  width: 100%;
  display: flex;
  margin-top: 16px;
  border: solid 1px #0f375b;
  border-radius: 10px;
  overflow: hidden;
}

.selectorItem {
  flex: 1;
  height: 50px;
  line-height: 50px;
  background-color: #ffffff;
  border: solid 1px #0f375b;
  font-family: PingFangTC;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #0f375b;
  text-align: center;
}

.selectorItem.left {
  border-radius: 8px 0 0 8px;
}

.selectorItem.right {
  border-radius: 0 8px 8px 0;
}

.selectorItem.checked {
  background-color: #0f375b;
  color: #ffffff;
}

ul {
  margin-top: 16px;
  height: 760px;
  overflow-y: scroll;
  list-style: none;
  padding: 0;
}

li {
  margin-top: 12px;
  height: 140px;
  width: 100%;
  display: flex;
}

.classImg {
  width: 140px;
  height: 140px;
  display: inline-block;
  /* background: rosybrown; */
}

.speechInfo {
  margin-left: 17px;
  padding-top: 10px;
  padding-left: 17px;
  width: calc(100% - 174px);
  background-color: #ebf3f6;
}

.speechTitle {
  font-family: PingFangTC;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #7a062e;
}

.speechDate{
  font-family: PingFangTC;
  font-size: 18px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #117f7e;
}

.speaker{
  margin-top: 10px;
  display: flex;
  align-items: center;
  position: relative;
}

.speakerPic{
  border-radius: 50%;
}

.speakerName{
  margin-left: 9px;
  font-family: PingFangTC;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #0f375b;
}

.speechContent {
  position: absolute;
  right: 60px;
  width: 50%;
  height: 50px;
  overflow-y: scroll;
}

.speechStatus{
  width: 30px;
  padding: 0 5px;
  background-color: #79052e;
  color: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
