<template lang="html">
  <div class="resume">
    <div :class="$style.author_resume">
      <h1 ><span style="text-shadow:3px 3px 3px #cccccc;">{{ name }}</span>'s Works</h1>
    </div>
    
  <template v-if="showStatus">
    <Timeline class="timeLine">
      <TimelineItem v-for="(item, index) in specificAuther">
          <p class="time">{{ item.speech_date }}</p>
          <p class="content">{{ item.title }}</p>
      </TimelineItem>
    </Timeline>
  </template>

    <div class="auther_works_list" v-else>
      <ul>
        <li :key="index" v-for="(item, index) in specificAuther">
          <div class="activitiesBars">
            <img :src="item.class_img" alt="">
            <div class="activitiesBars_info">
              <h1>{{ item.title }}</h1>
              <div class="activitiesBars_date">
                {{ item.speech_date }}
              </div>
              <div class="activitiesBars_info_author">
                <div class="info_author_pic_and_name">
                  <img src="../assets/images/kitty@2x.png" alt="">
                  <span><router-link :to="{ path: '/content/resume/' + item.speaker}">{{ item.speaker }}</router-link></span>
                </div>
                <div class="info_des">
                  {{ item.message }}
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <router-link to="/content"><button>回上一頁</button></router-link>
  </div>
</template>

<script>
import axios from 'axios'
import * as moment from 'moment';

export default {
  props: {},
  data() {
      return {
        name: "Good Idea",
        activitiesData: [],
        'info_state2': {
          '本週活動': 'on',
          '即將開始': 'will',
          '已經結束': 'past'
        },
        showStatus: true
      }
  },
  computed: {
    specificAuther () {
      return this.activitiesData.filter((item)=>{
        console.log(item)
        return item.speaker === this.$route.params.id
      })
    }
  },
  components: {},
  // Life cycle hook
  beforeCreate() {},
  mounted() {
    this.name = this.$route.params.id
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
      var weekStart = moment().day(1).format('YYYY-MM-DD')
      var weekEnd = moment().day(7).format('YYYY-MM-DD')
      if (now === weekStart || now > weekStart && now < weekEnd) {
        state = '本週活動'
      } else if (now > weekEnd) {
        state = '即將開始'
      } else {
        state = '已經結束'
      }

      return state
    }
  },
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.resume {
  width: 80%;
  margin: 0 auto;
  .auther_works_list {
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
  .timeLine {
    margin: 0 auto;
    width: 40%;
    .time{
          font-size: 14px;
          font-weight: bold;
      }
    .content{
        padding-left: 0px;
    }
  }
  button {
    width: 196px;
    height: 40px;
    border-radius: 5px;
    background-color: #1e8ba6;
    font-size: 24px;
    color: #ffffff;
    vertical-align: middle;
    cursor: pointer;
    margin: 10px;
  }
}
</style>
<style lang="scss" module>
.author_resume {
  h1 {
    line-height: 100px;
    font-size: 30px;
  }
}
</style>
