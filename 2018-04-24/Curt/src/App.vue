<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{getCount()}}
    <input @click="addCount()" type="button" name="" value="">
    <input @click="increment()" type="button" name="" value="add increment">
    <router-view/>
    {{count}}
    {{countPlusLocalState}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'App',
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
    console.log(mapState);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
