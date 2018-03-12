<template>
  <div class="treroad-train-search">
    <div class="treroad-train-switch">
      <div class="treroad-train-trainSwitch"></div>
      <div class="treroad-train-thsrSwitch"></div>
      <div class="treroad-train-mrtSwitch"></div>
      <span class="treroad-train-trainSwitchSpan">台鐵查詢</span>
      <router-link to="thsr"><span class="treroad-train-thsrSwitchSpan">高鐵查詢</span></router-link>
      <router-link to="mrt"><span class="treroad-train-mrtSwitchSpan">捷運轉乘</span></router-link>
    </div>
    <div class="treroad-train-selectStation">
      <p>選擇站名</p>
      <input @click="selectDepartureArea()" type="button" :value="selectStation.departureStation">
      <input @click="selectArrivalArea()" type="button" :value="selectStation.arrivalStation">
      <img @click="stationExchange()" class="treroad-train-transfer" src="../../assets/iconTransfer.png" alt="transfer">
    </div>
    <div class="treroad-train-selectTime">
      <p>選擇時間</p>
      <input type="date" v-model="searchTime.day">
      <!-- <select name="" id="">
        <option value="">今天 10月30日</option>
      </select> -->
      <div class="treroad-train-hourAndMinute">
        <input type="text" maxlength="2" v-model="this.searchTime.time.hour">
        時
        <input type="text" maxlength="2" v-model="this.searchTime.time.minute">
        分
      </div>
    </div>
    <button class="treroad-train-startSearch" @click="getResult()">開始查詢</button>
    <div v-if="areaShow" class="treroad-train-areaBackground">
      <div class="treroad-train-area">
        <p>台鐵列表</p>
        <ul>
          <li v-for="(area, key) in trainStationList" @click="getArea(key)">{{key}}</li>
        </ul>
        <img @click="closeSelectBlock()" src="../../assets/delete.png" alt="">
      </div>
    </div>
    <div v-if="stationShow" class="treroad-train-stationBackground">
      <div class="treroad-train-station">
        <p>台鐵列表</p>
        <span>{{selectStation.area}}</span>
        <button @click="returnArea()">返回地區</button>
        <ul>
          <li v-for="station in stationData" @click="getStation(station)">{{station}}</li>
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
      trainStationList: {},
      selectStation: {
        selectType: '',
        area: '',
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
      areaShow: false,
      stationShow: false,
      searchType: 'train'
    }
  },
  computed: {
    stationData () {
      var area = this.selectStation.area
      return this.trainStationList[area]
    }
  },
  components: {},
  watch: {},
  mixins: [],
  methods: {
    getTrainStation () {
      axios({
        method: 'get',
        url: '/static/json/station.json'
      })
      .then((response) => {
        console.log(response.data.train)
        this.trainStationList = response.data.train
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
        url: `https://api.treroad.com/api/v1/trains/routes?departure_station_name=${departureStation}&arrival_station_name=${arrivalStation}&departure_date_time=${searchTime}&transportation=tra`
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
      
      this.areaShow = false
      this.stationShow = false
    },
    returnArea () {
      this.areaShow = true
      this.stationShow = false
    },
    closeSelectBlock () {
      this.areaShow = false
      this.stationShow = false
    },
    selectDepartureArea () {
      this.areaShow = true
      this.selectType = 'departure'
      console.log(this.selectType)
    },
    selectArrivalArea () {
      this.areaShow = true
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
    this.getTrainStation(),
    this.getDate()
  }
}
</script>

<style lang="sass" scoped>
  .treroad-train-search
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
    .treroad-train-switch
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
      .treroad-train-trainSwitch, .treroad-train-thsrSwitch, .treroad-train-mrtSwitch
        width: 30%
        height: 100%
        position: absolute
        border-radius: 10px
        transform: perspective(.5em) rotateX(2deg)
        bottom: -10px
        box-shadow: 0px 2px 4px rgba(0, 0, 0, .1)
      .treroad-train-trainSwitch
        background: #eff2f5
        left: 5%
        z-index: 1
      .treroad-train-thsrSwitch
        background: #44c7a8
        left: 35%
      .treroad-train-mrtSwitch
        background: #44c7a8
        right: 5%
      .treroad-train-mrtSwitchSpan, .treroad-train-thsrSwitchSpan, .treroad-train-trainSwitchSpan
        position: absolute
        top: 15px
        color: white
        z-index: 2
      .treroad-train-trainSwitchSpan
        color: #4a4a4a
        left: calc(50% - 138px)
      .treroad-train-thsrSwitchSpan
        left: calc(50% - 32px)
      .treroad-train-mrtSwitchSpan
        left: calc(50% + 73px)
    .treroad-train-selectStation
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
      .treroad-train-transfer
        position: absolute
        bottom: 30px
        left: calc(50% - 14px)
        cursor: pointer
    .treroad-train-selectTime
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
      .treroad-train-hourAndMinute
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
    .treroad-train-startSearch
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
    .treroad-train-areaBackground
      position: fixed
      top: 0
      left: 0
      z-index: 2
      width: 100vw
      height: 100vh
      background: rgba(0, 0, 0, .4)
      .treroad-train-area
        position: relative
        width: 665px
        min-height: 285px
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
    .treroad-train-stationBackground
      position: fixed
      top: 0
      left: 0
      z-index: 2
      width: 100vw
      height: 100vh
      background: rgba(0, 0, 0, .4)
      .treroad-train-station
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
        span
          display: block
          margin: 8px 4px
          font-size: 16px
          rgb(74, 74, 74)
        button
          position: absolute
          top: 50px
          right: 37px
          width: 90px
          height: 28px
          color: white
          background: rgb(245, 166, 35)
          border-radius: 4px
          border: 0
          font-size: 16px
          cursor: pointer
        ul
          li
            text-align: center
            display: inline-block
            height: 36px
            min-width: 68px
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
