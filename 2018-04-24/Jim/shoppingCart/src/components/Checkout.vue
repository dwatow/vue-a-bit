<template>
  <div class="checkout">
    <h2>Goods List</h2>
    <ul>
      <li v-for="item in total"><img :src="`https://a.ecimg.tw/${item.picS}`">{{ item.originPrice }} <button @click="removeGoods(item)">移除商品</button> </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'Checkout',
  data () {
    return {}
  },
  computed: {
    total () {
      return this.$store.state.buy.stuffList
    }
  },
  methods: {
    removeGoods (goods) {
      this.$store.commit('removeStuff', goods)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checkout {

}
</style>
