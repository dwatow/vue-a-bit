<template>
  <div class="treroad-searchResults-page">
    <div class="treroad-searchResults-resultHeader">
      <div class="treroad-searchResults-queryCondition">
        <p class="treroad-searchResults-trainRoute">大橋 <img src="../assets/arrow.png" alt=""> 台南</p>
        <p class="treroad-searchResults-searchTime">2018年02月25日(日) 00:00</p>
      </div>
      <button>重新查詢</button>
    </div>
    <div class="treroad-searchResults-searchResultBackground">
        <div class="treroad-searchResults-searchResult">
          <div class="treroad-searchResults-resultFilter">
            <input type="radio" name="filter" id="all" checked>
            <label for="all">全部</label>
            <input type="radio" name="filter" id="timeOfArrival">
            <label for="timeOfArrival">到達時間</label>
            <input type="radio" name="filter" id="atLeastInterchange">
            <label for="atLeastInterchange">最少轉乘</label>
            <input type="radio" name="filter" id="rideTime">
            <label for="rideTime">行車時間</label>
          </div>
          <div class="treroad-searchResults-searchResultList">
            <div class="treroad-searchResults-trainInformation" id="trainInformation" @click="toggleShowInformation()">
              <img src="../assets/train-icon.png" alt="train">
              <div class="treroad-searchResults-trainInformation-trips">
                <p class="treroad-searchResults-trainInformation-title">區間032</p>
                <p class="treroad-searchResults-trainInformation-value">20:30 - 21:40</p>
              </div>
              <div class="treroad-searchResults-trainInformation-driveTime">
                <p class="treroad-searchResults-trainInformation-title">行車時間</p>
                <p class="treroad-searchResults-trainInformation-value">1時03分</p>
              </div>
              <div class="treroad-searchResults-trainInformation-fare">
                <p class="treroad-searchResults-trainInformation-title">費用</p>
                <p class="treroad-searchResults-trainInformation-value">69</p>
              </div>
              <div class="treroad-searchResults-trainInformation-numberOfTransfer">
                <p class="treroad-searchResults-trainInformation-title">轉乘</p>
                <p class="treroad-searchResults-trainInformation-value">0</p>
              </div>
              <img class="treroad-searchResults-trainInformation-downIcon" src="../assets/down.png" alt="down">
            </div>
            <div class="treroad-searchResults-transferInformation">
              <div>
                <p class="treroad-searchResults-transferInformation-departureTime">20:30</p>
                <span class="treroad-searchResults-transferInformation-circle"></span>
                <p class="treroad-searchResults-transferInformation-station">大橋站</p>
                <span class="treroad-searchResults-transferInformation-departureLine"></span>
              </div>
              <div>
                <img src="../assets/train-icon.png" alt="train">
                <p ><span>區間032</span><span>1時03分</span><span>69元</span></p>
                <span class="treroad-searchResults-transferInformation-arrivalthoughLine"></span>
              </div>
              <div>
                <p class="treroad-searchResults-transferInformation-arrivalTime">20:30</p>
                <span class="treroad-searchResults-transferInformation-circle"></span>
                <p class="treroad-searchResults-transferInformation-station">台南站</p>
                <span class="treroad-searchResults-transferInformation-arrivalLine"></span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {}
  },
  computed: {},
  components: {},
  watch: {},
  mixins: [],
  methods: {
    toggleShowInformation(){
      var trainInformation = document.getElementById("trainInformation").nextElementSibling;
      console.log(trainInformation)
      if(trainInformation.style.display === 'none'){
        trainInformation.style.display = 'block'
      }else{
        trainInformation.style.display = 'none'
      }
    }
  },
  // Life cycle hook
  beforeCreate () {},
  mounted () {}
}
</script>

<style lang="sass" scoped>
  .treroad-searchResults-page
    width: 100%
    .treroad-searchResults-resultHeader
      width: 575px
      height: 110px
      margin: 0 auto
      box-sizing: border-box
      display: flex
      justify-content: space-between
      align-items: flex-end
      box-sizing: border-box
      padding-bottom: 6px
      .treroad-searchResults-queryCondition
        color: rgb(74, 74, 74)
        width: 175px
        height: 60px
        .treroad-searchResults-trainRoute
          font-size: 25px
        .treroad-searchResults-searchTime
          font-size: 14px
      button
        width: 120px
        height: 36px
        border-radius: 18px
        border: 0
        background: rgb(68, 199, 168)
        color: white
        font-size: 16px
        cursor: pointer
    .treroad-searchResults-searchResultBackground
      width: 100%
      height: calc(100vh - 170px)
      background: url(../assets/result-background.png)
      .treroad-searchResults-searchResult
        width: 575px
        height: 100%
        margin: 0 auto
        .treroad-searchResults-resultFilter
          text-align: center
          padding: 16px 0
          input
            display: none
          label
            display: inline-block
            font-size: 17px
            color: rgb(74, 74, 74)
            padding: 7px 17px
            margin: 0 4px
            background: white
            border-radius: 18px
            border: 1px solid rgb(68, 199, 168)
            cursor: pointer
          input:checked + label
            color: white
            background: rgb(68, 199, 168)
        .treroad-searchResults-searchResultList
          width: 100%
          min-height: 87px
          background: white
          border-radius: 6px
          box-shadow: 0px 2px 4px rgba(0, 0, 0, .2)
          box-sizing: border-box
          overflow: hidden
          .treroad-searchResults-trainInformation
            width: 100%
            height: 100%
            padding: 9px 0
            display: flex
            align-items: center
            box-sizing: border-box
            position: relative
            cursor: pointer
            border-bottom: 1px solid rgb(219, 219, 219)
            div
              display: inline-block
              box-sizing: border-box
              .treroad-searchResults-trainInformation-title
                margin: 7px 0
                font-size: 14px
                color: rgb(74, 74, 74)
                line-height: 20px
              .treroad-searchResults-trainInformation-value
                margin-bottom: 7px
                font-size: 20px
                color: rgb(74, 74, 74)
                line-height: 28px
            width: 100%
            img
              width: 53px
              height: 53px
              border-radius: 12px
              margin-left: 20px
            .treroad-searchResults-trainInformation-trips
              width: 160px
              height: 100%
              padding-left: 8px
            .treroad-searchResults-trainInformation-driveTime
              width: 117px
              height: 100%
              padding-left: 8px
              border-left: 1px solid rgb(216, 216, 216)
            .treroad-searchResults-trainInformation-fare
              width: 88px
              height: 100%
              padding-left: 8px
              border-left: 1px solid rgb(216, 216, 216)
            .treroad-searchResults-trainInformation-numberOfTransfer
              width: 137px
              height: 100%
              padding-left: 8px
              border-left: 1px solid rgb(216, 216, 216)
            .treroad-searchResults-trainInformation-downIcon
              width: auto
              height: 12px
              position: absolute
              right: 36px
          .treroad-searchResults-transferInformation
            display: none
            div
              display: flex
              align-items: center
              &:nth-child(2n+1)
                width: 100%
                height: 60px
                position: relative
                .treroad-searchResults-transferInformation-circle
                  width: 15px
                  height: 15px
                  border: 4px solid black
                  border-radius: 50%
                  display: block
                  box-sizing: border-box
                  margin-left: 9px
                .treroad-searchResults-transferInformation-departureTime, .treroad-searchResults-transferInformation-arrivalTime
                  font-size: 12px
                  color: rgb(74, 74, 74)
                  margin-left: 15px
                .treroad-searchResults-transferInformation-station
                  margin-left: 20px
                  color: rgb(74, 74, 74)
                .treroad-searchResults-transferInformation-departureLine
                  width: 5px
                  height: 22px
                  position: absolute
                  background: rgb(100, 181, 246)
                  left: 61px
                  bottom: 0
                .treroad-searchResults-transferInformation-arrivalLine
                  width: 5px
                  height: 23px
                  position: absolute
                  background: rgb(100, 181, 246)
                  left: 61px
                  top: 0
              &:nth-child(2n)
                width: 100%
                height: 50px
                background: rgb(239, 242, 245)
                position: relative
                img
                  width: 26px
                  height: auto
                  border-radius: 4px
                  position: absolute
                  left: 50px
                  top: calc(50% - 13px)
                  z-index: 1
                span
                  width: 70px
                  margin-right: 25px
                  font-size: 14px
                  color: rgb(74, 74, 74)
                .treroad-searchResults-transferInformation-arrivalthoughLine
                  width: 5px
                  height: 100%
                  position: absolute
                  background: rgb(100, 181, 246)
                  left: 61px
                  top: 0
                p
                  margin-left: 92px
                
</style>
