<template>
  <div id="app">
    <h1>你想知道啥？</h1>
    <fake-filter></fake-filter>
    <router-view ></router-view>
  </div>
</template>

<script>
import FakeFilter from './FakeFilter.vue';

export default {
  data () {
    return {

    }
  },
  components: {
    FakeFilter
  }
}
</script>

<style lang="scss">

</style>
