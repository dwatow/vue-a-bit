<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    {{getCount()}}
    <input @click="addCount()" type="button" name="" value="">
    <input @click="increment()" type="button" name="" value="add increment"> -->
    <router-view/>
    <iViewModal></iViewModal>
    <!-- {{count}}
    {{countPlusLocalState}} -->

  </div>
</template>

<script>
import {mapState} from 'vuex'
import { mapActions } from 'vuex'
import axios from 'axios'
import iViewModal from '@/components/iViewModal'
export default {
  name: 'App',
  components:{
    iViewModal
  },
  data(){
    return {
      localCount:5
    }
  },
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  }),
  methods:{
    ...mapActions([
      'increment'
    ]),
    getCount(){
      return this.$store.state.count
    },
    addCount(){
      this.$store.dispatch('increment')
    }
  },
  mounted(){
    // this.$store.commit('addProduct','apple')
    // this.$store.commit('addProduct','apple2')
    // this.$store.commit('addProduct','apple3')
    // this.$axios('https://cors-anywhere.herokuapp.com/http://ecshweb.pchome.com.tw/search/v3.3/all/results?q=Apple&page=1&sort=rnk/dc')
    //   .then(function (res) {
    //   })
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
