<template lang="html">
  <div class="content">
    <div class="content_titles">
      <h1>分週資訊活動分享</h1><button type="button" name="button"><發布/活動管理></button>
      <ul>
        <li v-for="(item, index) in nav" @click="process(index)">{{ item }}</li>
      </ul>
    </div>
    <div class="content_list">
      <ul>
        <li :key="index" v-for="(item, index) in filteTimeStep">
          <div>
            <img src="" alt="">
            <h1>title {{ item }}</h1>
            <div>
              date
              <ul>
                <li>hashtag</li>
              </ul>
            </div>
            <div>
              author
              <div>
                discrube
              </div>
            </div>
            <div>
              right side tag
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    'nav': []

  },
  data() {
      return {
        'loremAPIdata': [0,1,2],
        'activitiesData': [],
        'activeStatus': 0
      }
  },
  computed: {
    filteTimeStep () {
      if (this.activeStatus === 1) {
        return this.loremAPIdata.filter((item)=>{
          return item > 1
        })
      } else if (this.activeStatus === 2) {
        return this.loremAPIdata.filter((item)=>{
          return item < 1
        })
      } else {
        return this.loremAPIdata
      }
    }
  },
  components: {},
  // Life cycle hook
  beforeCreate() {},
  mounted() {},
  methods: {
    process (option) {
      this.activeStatus = option
    },
    filtetime (timeLine) {
      if (timeLine > 1) {
        return true
      }
    },
    getActivities () {

    }
  },
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .content {
    .content_titles {
      ul {
        li {
          display: inline-block;
          cursor: pointer;
          padding: 10px;
          border: solid;
        }
      }
    }
  }

</style>
