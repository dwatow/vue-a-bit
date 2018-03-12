<template>
  <div class="treroad-thsr-search">
    <div class="treroad-thsr-switch">
      <div class="treroad-thsr-trainSwitch"></div>
      <div class="treroad-thsr-thsrSwitch"></div>
      <div class="treroad-thsr-mrtSwitch"></div>
      <router-link to="train"><span class="treroad-thsr-trainSwitchSpan">台鐵查詢</span></router-link>
      <span class="treroad-thsr-thsrSwitchSpan">高鐵查詢</span>
      <router-link to="mrt"><span class="treroad-thsr-mrtSwitchSpan">捷運轉乘</span></router-link>
    </div>
    <div class="treroad-thsr-selectStation">
      <p>選擇站名</p>
      <input @click="selectDepartureArea()" type="button" :value="selectStation.departureStation">
      <input @click="selectArrivalArea()" type="button" :value="selectStation.arrivalStation">
      <img @click="stationExchange()" class="treroad-thsr-transfer" src="../../assets/iconTransfer.png" alt="transfer">
    </div>
    <div class="treroad-thsr-selectTime">
      <p>選擇時間</p>
      <input type="date" v-model="searchTime.day">
      <!-- <select name="" id="">
        <option value="">今天 10月30日</option>
      </select> -->
      <div class="treroad-thsr-hourAndMinute">
        <input type="text" maxlength="2" v-model="searchTime.time.hour">
        時
        <input type="text" maxlength="2" v-model="searchTime.time.minute">
        分
      </div>
    </div>
    <button class="treroad-thsr-startSearch" @click="getResult()">開始查詢</button>
    <div v-if="stationShow" class="treroad-thsr-stationBackground">
      <div class="treroad-thsr-station">
        <p>高鐵列表</p>
        <ul>
          <li v-for="(station, index) in trainStationList" @click="getStation(station)">{{station}}</li>
        </ul>
        <img @click="closeSelectBlock()" src="../../assets/delete.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {},
  data () {
    return {
      trainStationList: [],
      selectStation: {
        selectType: '',
        departureStation: '起始站',
        arrivalStation: '終點站',
      },
      searchTime: {
        day: '',
        time: {
          hour: '',
          minute: ''
        },
        week: ['日', '一', '二', '三', '四', '五', '六']
      },
      stationShow: false,
      searchType: 'thsr'
    }
  },
  computed: {},
  components: {},
  watch: {},
  mixins: [],
  methods: {
    getThsrStation () {
      axios({
        method: 'get',
        url: '/static/json/station.json'
      })
      .then((response) => {
        console.log(response.data.thsr)
        this.trainStationList = response.data.thsr
        console.log(this.trainStationList)
      })
    },
    getResult () {
      let departureStation = this.selectStation.departureStation
      let arrivalStation = this.selectStation.arrivalStation
      let searchTime = this.searchTime.day.split("-").join('')
      let vm = this
      axios({
        method: 'get',
        url: `https://api.treroad.com/api/v1/trains/routes?departure_station_name=${departureStation}&arrival_station_name=${arrivalStation}&departure_date_time=${searchTime}&transportation=thsr`
      })
      .then((response) => {
        console.log(response.data.payload)
        if(this.selectStation.departureStation == '起始站'){
          alert('請選擇您要出發的站別～')
          return
        }else if(this.selectStation.arrivalStation == '終點站'){
          alert('請選擇您要到達的站別～')
          return
        }
        vm.$store.state.result = response.data.payload
        vm.$store.state.searchTime = vm.searchTime
        vm.$store.state.departureStation = vm.selectStation.departureStation
        vm.$store.state.arrivalStation = vm.selectStation.arrivalStation
        vm.$store.state.searchType = vm.searchType
        vm.$router.push({ path: '/searchresults' })
      })
    },
    getArea (key) {
      console.log(key)
      this.selectStation.area = key
      this.areaShow = false
      this.stationShow = true
    },
    getStation (station) {
      console.log(station)
      if(this.selectType =='departure') {
        if(this.selectStation.arrivalStation == station){
          alert('起始站與終點站不能相同喲～')
        }else{
          this.selectStation.departureStation = station
        }
      }else if(this.selectType =='arrival') {
        if(this.selectStation.departureStation == station){
          alert('起始站與終點站不能相同喲～')
        }else{
          this.selectStation.arrivalStation = station
        }
      }

      this.stationShow = false
    },
    closeSelectBlock () {
      this.stationShow = false
    },
    selectDepartureArea () {
      this.stationShow = true
      this.selectType = 'departure'
      console.log(this.selectType)
    },
    selectArrivalArea () {
      this.stationShow = true
      this.selectType = 'arrival'
      console.log(this.selectType)
    },
    stationExchange () {
      if(this.selectStation.departureStation == '起始站' || this.selectStation.arrivalStation == '終點站') return
      var tem = ''
      tem = this.selectStation.departureStation
      this.selectStation.departureStation = this.selectStation.arrivalStation
      this.selectStation.arrivalStation = tem
    },
    getDate () {
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var hour = date.getHours()
      var minute = date.getMinutes()
      var week = date.getDay()
      if(month < 10) month = '0' + month
      if(day < 10) day = '0' + day
      var today =`${year}-${month}-${day}`
      this.searchTime.day = today
      this.searchTime.time.hour = hour
      this.searchTime.time.minute = minute
      this.searchTime.week = this.searchTime.week[week]
    }
  },
  // Life cycle hook
  beforeCreate () {},
  mounted () {
    this.getThsrStation(),
    this.getDate()
  }
}
</script>

<style lang="sass" scoped>
  .treroad-thsr-search
    position: relative
    width: 480px
    min-height: 205px
    margin: 60px auto 0 auto
    padding: 17px 30px
    border-radius: 18px
    background: rgb(239, 242, 245)
    box-sizing: border-box
    display: flex
    justify-content: space-between
    align-items: flex-start
    @media screen and (max-width: 515px)
      width: 100%
      flex-direction: column
      padding: 17px 30px 65px 30px
    div
      width: 45%
      height: auto
      color: rgb(74, 74, 74)
    .treroad-thsr-switch
      display: flex
      justify-content: space-around
      width: 350px
      height: 40px
      position: absolute
      bottom: 100%
      left: calc(50% - 175px)
      overflow: hidden
      a
        z-index: 2
        margin-top: 15px
        text-decoration: none
      .treroad-thsr-trainSwitch, .treroad-thsr-thsrSwitch, .treroad-thsr-mrtSwitch
        width: 30%
        height: 100%
        position: absolute
        border-radius: 10px
        transform: perspective(.5em) rotateX(2deg)
        bottom: -10px
        box-shadow: 0px 2px 4px rgba(0, 0, 0, .1)
      .treroad-thsr-trainSwitch
        background: #44c7a8
        left: 5%
      .treroad-thsr-thsrSwitch
        background: #eff2f5
        left: 35%
        z-index: 1
      .treroad-thsr-mrtSwitch
        background: #44c7a8
        right: 5%
      .treroad-thsr-mrtSwitchSpan, .treroad-thsr-thsrSwitchSpan, .treroad-thsr-trainSwitchSpan
        position: absolute
        top: 15px
        color: white
        z-index: 2
      .treroad-thsr-trainSwitchSpan
        left: calc(50% - 138px)
      .treroad-thsr-thsrSwitchSpan
        color: #4a4a4a
        left: calc(50% - 32px)
      .treroad-thsr-mrtSwitchSpan
        left: calc(50% + 73px)
    .treroad-thsr-selectStation
      position: relative
      @media screen and (max-width: 515px)
        width: 100%
      input
        margin-top: 14px
        padding-left: 8px
        width: 100%
        height: 35px
        border-radius: 10px
        font-size: 16px
        text-align: left
        color: rgb(155, 155, 155)
        background-color: white
        border: 1px solid rgb(102, 123, 134)
        cursor: pointer
      .treroad-thsr-transfer
        position: absolute
        bottom: 30px
        left: calc(50% - 14px)
        cursor: pointer
    .treroad-thsr-selectTime
      @media screen and (max-width: 515px)
        width: 100%
        margin-top: 20px
      input[type="date"]
        width: 100%
        height: 35px
        border-radius: 10px
        margin-top: 14px
        padding: 6px 0 6px 6px
        font-size: 16px
        color: rgb(74, 74, 74)
        border: 1px solid rgb(102, 123, 134)
        appearance: none
        background-image: url(../../assets/down.png)
        background-repeat: no-repeat
        background-position: 95% center
        box-sizing: border-box
        @media screen and (max-width: 515px)
          width: 48%
          background: white
      input[type="date"]::-webkit-inner-spin-button, input[type="date"]::-webkit-clear-button
        display: none
      input[type="date"]::-webkit-calendar-picker-indicator
        opacity: 0
        cursor: pointer
        background: transparent
      .treroad-thsr-hourAndMinute
        width: 100%
        height: 35px
        margin-top: 14px
        letter-spacing: 4px
        @media screen and (max-width: 515px)
          width: 50%
          display: inline
          margin-left: 5px
          letter-spacing: 0
        input
          width: 48px
          height: 35px
          border-radius: 10px
          border: 1px solid rgb(102, 123, 134)
          text-align: center
          box-sizing: border-box
          font-size: 16px
          color: rgb(74, 74, 74)
          margin-right: 2px
          @media screen and (max-width: 515px)
            width: 44px
            margin-right: 0
    .treroad-thsr-startSearch
      width: 120px
      height: 36px
      border-radius: 18px
      position: absolute
      left: calc(50% - 60px)
      bottom: 16px
      font-size: 16px
      color: white
      background: rgb(68, 199, 168)
      cursor: pointer
      border: 0px
    .treroad-thsr-stationBackground
      position: fixed
      top: 0
      left: 0
      z-index: 2
      width: 100vw
      height: 100vh
      background: rgba(0, 0, 0, .4)
      .treroad-thsr-station
        position: relative
        width: 665px
        min-height: 205px
        padding: 8px 10px
        background: white
        border-radius: 18px
        margin: 195px auto 0 auto
        box-sizing: border-box
        @media screen and (max-width: 680px)
          width: 95%
        p
          margin: 8px 4px
          font-size: 20px
          rgb(74, 74, 74)
        ul
          li
            text-align: center
            display: inline-block
            height: 36px
            min-width: 98px
            padding: 5px 16.5px
            border: 1px solid rgb(70, 207, 175)
            border-radius: 18px
            box-sizing: border-box
            margin: 8px 4px
            cursor: pointer
        img
          position: absolute
          top: 2px
          right: 6px
          cursor: pointer
</style>
