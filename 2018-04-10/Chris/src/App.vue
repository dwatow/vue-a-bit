<template>
  <div id="app">
    <banner></banner>
    <!-- <talk-filter></talk-filter> -->
    <div class="talks">
      <h1>每週分享活動</h1>
      <div class="createTalk">發佈/管理活動</div>
      <!-- <div class="clearfix"></div> -->
      <div class="talks-filter">
        <router-link to="/filter/all"><talksFilter :currStatus="$route.params.status" status="all" @filter="filterResult" content="全部活動"></talksFilter></router-link>
        <router-link to="/filter/showing"><talksFilter :currStatus="$route.params.status" status="showing" @filter="filterResult" content="即將開始活動"></talksFilter></router-link>
        <router-link to="/filter/finished"><talksFilter :currStatus="$route.params.status" status="finished" @filter="filterResult" content="已結束活動"></talksFilter></router-link>
      </div>
      <template v-for="talk in filteredTalks">
        <want2knowTalks :talk="talk"></want2knowTalks>
      </template>
    </div>
    <div style="width: 90vw; height: 400px;">
      <chart :labels="Object.keys(histogram)" :data="Object.keys(histogram).map(key =>
        histogram[key])"></chart>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import want2knowTalks from './components/want2knowTalks.vue'
import talksFilter from './components/talksFilter.vue'
import banner from './components/banner.vue'
import router from './router'
import chart from './components/chart.vue'

export default {
  name: 'app',
  router,
  data () {
    return {
      talks: [],
      status: "all",
      histogram: {}
    }
  },
  components: {
    banner,
    talksFilter,
    want2knowTalks,
    chart
  },
  methods: {
    filterResult (status) {
      this.status = status;
    }
  },
  computed: {
    filteredTalks () {
      console.log('filter!!');
      const status = this.status;
      return this.talks.filter(item => item.checkSchedule().includes(status))
    }
  },
  created () {
    axios.get(`https://devche.com/api/speech/data`)
    .then(response => {
      this.talks = response.data.result
      .sort((a, b) => {
        var time1 = new Date(a.speech_date);
        var time2 = new Date(b.speech_date);
        return time2 - time1;
      })
      .map(item => {
        var obj = {}
        obj.checkSchedule = function () {
          // console.log('checkSchedule', this);
          const activity_date = new Date(this.speech_date);
          const now = new Date();
          const diff = now - activity_date;

          if (diff > 0)  return "all finished";
          if (diff < 0)  return "all soon";
          if (diff == 0)  return "all showing";
        }
        return Object.assign({}, item, obj)
      });

      this.histogram = this.talks.reduce((object, item) => {
        if (object.hasOwnProperty(item.speaker))
          object[item.speaker] += 1;
        else
          object[item.speaker] = 1;
        return object
      }, {})
    })
  }
}
</script>

<style>
body {
  margin: 0;
}
.talks-filter {
  font-size: 0;
  border-radius: 10px;
  background-color: #ffffff;
  border: solid 2px #0f375b;
  width: 100%;
}


.talks {
  position: relative;
  text-align: left;
  margin: auto;
  padding: 0 25px;
  max-width: 990px;

  /* .clearfix {
    content: '';
    display: block;
    clear: right;
  } */
  h1 {
    /* display: inline-block; */
    vertical-align: middle;
  }
  .createTalk {
    /* display: inline-block; */
    position: absolute;
    top: 2px;
    right: 25px;
    vertical-align: middle;
    padding: 4px 20px;
    border-radius: 5px;
    background-color: #1e8ba6;
    color: #ffffff;
    font-size: 24px;
  }
}

</style>
