<template lang="html">
  <div class="content">
    <div class="content_titles container">
      <div class="content_titles_text">
        <h1>分週資訊活動分享</h1><button type="button" name="button">發布/活動管理</button>
      </div>
      <ul>
        <li v-for="(item, index) in nav" :class="{'button-clicked': item.clicked}" @click="navSwitch(item.content, index)" >{{ item.content }}</li>
      </ul>
    </div>
    <div class="content_list container">
      <ul>
        <li :key="index" v-for="(item, index) in activitiesFilted">
          <div class="activitiesBars">
            <img :src="item.class_img" alt="">
            <div class="activitiesBars_info">
              <h1>{{ item.title }}</h1>
              <div class="activitiesBars_date">
                {{ item.speech_date }}
              </div>
              <div class="activitiesBars_info_author">
                <div class="info_author_pic_and_name">
                  <!-- <img v-if="item.speaker_img" :src="item.speaker_img" alt=""> -->
                  <img src="../assets/images/kitty@2x.png" alt="">
                  <span>{{ item.speaker }}</span>
                </div>
                <div class="info_des">
                  {{ item.message }}
                </div>
              </div>
            </div>
            <div class="info_state" :class="info_state2[item.state]">
              {{ item.state }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import * as moment from 'moment';

export default {
  props: {
    'nav': []
  },
  data() {
      return {
        'activitiesData': [],
        'navSelected': '全部活動',
        'info_state2': {
          '本週活動': 'on',
          '即將開始': 'will',
          '已經結束': 'past'
        }
      }
  },
  computed: {
    activitiesFilted () {
      if (this.navSelected === '即將開始活動') {
        return this.activitiesData.filter((item)=>{
          if (item.state === '即將開始') {
            return true
          }
        })
      } else if (this.navSelected === '已經結束活動') {
        return this.activitiesData.filter((item)=>{
          if (item.state === '已經結束') {
            return true
          }
        })
      } else {
        return this.activitiesData
      }
    }
  },
  components: {},
  // Life cycle hook
  beforeCreate() {},
  mounted() {
    this.getActivities()
  },
  methods: {
    getActivities () {
      var vm  = this
      // 拿資料，判斷有沒有資料
      axios.get('https://devche.com/api/speech/data')
        .then(function (response) {
          //顯示有的資料
          //reformat
          // console.log(response)

          vm.activitiesData = response.data.result.sort((item, item2)=>{
            // 依照 date 進行排序
            var dayBefore = new Date(item.speech_date)
            var dayAfter = new Date(item2.speech_date)
            return dayAfter - dayBefore
          })
          vm.activitiesData.map((item)=>{
            var value = vm.timeState(item.speech_date)
            vm.$set(item, 'state', value)
          })
          // console.log(vm.activitiesData)
        })
        .catch(function (error) {
          //沒有資料，給預設資料
          console.log(error);
        });
    },
    timeState (currentTime) {
      var state = ''
      var now = currentTime
      var weekSatrt = moment().day(1)._d.getTime();
      var weekEnd = moment().day(7)._d.getTime();
      if (now === weekSatrt && now > weekSatrt && now < weekEnd) {
        state = '本週活動'
      } else if (now > weekEnd) {
        state = '即將開始'
      } else {
        state = '已經結束'
      }

      return state
    },
    navSwitch (option, index) {
      this.nav.map((item)=>{
        return item.clicked = false
      })
      this.nav[index].clicked = true
      this.navSelected = option
    }
  },
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

//互動效果class
  .button-clicked {
    background-color: #0f375b;
    color: #ffffff;
  }
  .past {
    background-color: #7a062e;
  }
  .will {
    background-color: #1e8ba6;
  }
  .on {
    background-color: #5d9c6c;
  }

//統一樣式class
  .container {
    width: 80%;
  }
  /* * {
    border: solid 1px red;
  } */
//當頁
  .content {
    .content_titles {
      .content_titles_text {
        height: 83px;
        margin-bottom: 10px;
        position: relative;
        h1 {
          position: absolute;
          left: 0px;
          top: 50%;
          transform: translateY(-50%);
          display: inline-block;
          font-size: 30px;
          vertical-align: middle;
        }
        button {
          position: absolute;
          right: 0px;
          top: 50%;
          transform: translateY(-50%);
          width: 196px;
          height: 40px;
          border-radius: 5px;
          background-color: #1e8ba6;
          font-size: 24px;
          color: #ffffff;
          vertical-align: middle;
          cursor: pointer;
        }
      }
      ul {
        border-radius: 10px;
        border: solid 2px #0f375b;
        padding: 0px;
        font-size: 24px;
        overflow: hidden;
        li {
          width: calc(100% / 3);
          display: inline-block;
          cursor: pointer;
          padding: 10px;
          border-left: solid 2px #0f375b;
        }
      }
    }
    .content_list {
      ul {
        padding: 0px;
        li {
          margin: 11px;
          list-style: none;
          height: 140px;
          position: relative;
          .activitiesBars {
            clear: both;
            img {
              display: inline-block;
              width: 140px;
              height: 140px;
              float: left;
            }
            .activitiesBars_info {
              display: inline-block;
              float: right;
              height: 140px;
              width: calc(100% - 150px);
              text-align: left;
              background: rgba(#1e8ba6, 0.1);
              padding: 15px 45px 15px 15px;
              h1 {
                font-size: 20px;
                color: #7a062e;
              }
              .activitiesBars_date {
                font-family: PingFangTC;
                font-size: 18px;
                color: #117f7e;
              }
              .activitiesBars_info_author {
                clear:both;
                position: relative;
                .info_author_pic_and_name {
                  display: inline-block;
                  width: 25%;
                  float:left;
                  img {
                    width: 50px;
                    height: 50px;
                    object-fit: contain;
                    margin-right: 9px;
                  }
                  span {
                    font-family: PingFangTC;
                    font-size: 20px;
                    font-weight: 500;
                    color: #0f375b;
                  }
                }
                .info_des {
                  display: inline-block;
                  float:left;
                  width: 75%;
                  height: 51px;
                  overflow-y: auto;
                  font-size: 16px;
                  color: #0f375b;
                }
              }
            }
          }
          .test {
            background-color: black
          }
          .tes2 {
            background-color: yellow
          }
          .test {
            background-color: green
          }
          .info_state {
            position: absolute;
            top: 0px;
            right: 0px;
            width: 40px;
            height: 100%;
            writing-mode: vertical-lr;
            color: white;
            line-height: 40px;
            letter-spacing: 4px;
            font-size: 18px;
          }
        }
      }
    }
  }

</style>
