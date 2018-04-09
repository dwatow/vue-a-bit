<template lang="html">
  <div class="speech_list">
    <p>按下上面網址所傳的篩選參數: {{ $route.params.filter_condition }}</p>
    <div class="speech_list"
      v-for="speech in filter_speech()">
      <div class="speech_block">
        <div class="class_img">
          <img :src="speech.class_img" class="class_img" alt="">
        </div>
        <div class="speech_content">
          <h3 class="speech_title">{{speech.title}}</h3>
          <p class="speech_time">{{speech.speech_date}}</p>
          <div class="inner_content">
            <div class="left_content">
              <div class="speaker_photo">
                <img :src="speech.speaker_img" class="speaker_photo" alt="">
              </div>
              <span class="speaker_name">{{speech.speaker}}</span>
            </div>
            <div class="right_content">
              <p class="speech_introduce">{{speech.message}}</p>
            </div>
          </div>
        </div>
        <div class="speech_status" :class="speech.status">
          {{speech_status_info[speech.status]}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "speechList",
  props: [
    'all_speechs',
  ],
  data () {
    return{
      speech_status_info:{
        comming: '本週活動',
        today: '即將開始',
        past: '已經結束'
      },
    }
  },
  methods: {
    filter_speech: function(){
      if(this.$route.params.filter_condition == 'all'){
        return this.all_speechs
      }
      return this.all_speechs.filter(speech =>
        speech.status === this.$route.params.filter_condition
      )
    },
  }
}
</script>

<style lang="css">
</style>
