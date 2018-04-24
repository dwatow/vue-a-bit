<template>
  <div class="web">
    <ul>
      <li v-for="item in goodsList"><img :src="`https://a.ecimg.tw/${item.picS}`" alt="" @click="updateCounter(item)">{{ item.originPrice }}</li>
    </ul>
    <h2>Essential Links</h2>
    <button @click="updateCounter">Click Me</button>

  </div>
</template>

<script>


export default {
  name: 'Shopping',
  props: ['goodsList'],
  data () {
    return {
    }
  },
  computed: {
    total () {
      return this.$store.state.buy.stuffList.length
    }
  },
  methods: {
    updateCounter (goods) {
      this.$store.commit('addStuff', goods)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.web {
  ul {
    margin: 0px;
    li {
      margin: 0px;
      padding: 0px;
      display: inline-block;
      width: calc(100% / 3);
      text-align: center;
    }
  }
}
</style>
