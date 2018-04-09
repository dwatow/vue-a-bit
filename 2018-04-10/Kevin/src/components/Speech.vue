<template>
  <li>
        <img :src="speech.class_img" class="classImg">
        <div class="speechInfo">
            <p class="speechTitle">{{ speech.title }}</p>
            <p class="speechDate">{{ speech.speech_date }}</p>
            <div class="speaker">
                <img :src="speech.speaker_img" class="speakerPic">
                <span class="speakerName">{{ speech.speaker }}</span>
                <p class="speechContent">{{ speech.message }}</p>
            </div>
        </div>
        <div v-if="new Date(speech.speech_date) < new Date()" class="speechStatus">已經結束</div>
        <div v-else-if="new Date(speech.speech_date) > new Date()" class="speechStatus ongoing">即將開始</div>
        <div v-else class="speechStatus thisweek">本週活動</div>
    </li>
</template>
<script>
export default {
    props:['speech'],
};
</script>
<style scoped>
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
  object-fit: contain;
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

.speechStatus.thisweek{
  background: rgb(93, 156, 108);
}

.speechStatus.ongoing{
  background: rgb(93, 156, 108);
}
</style>

