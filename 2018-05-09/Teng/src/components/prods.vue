<template>
  <div>
    <table>
      <tr>
        <th class="item_name">商品名稱</th>
        <th>價錢</th>
      </tr>
      <tr v-for='prod in prods'
      @click="create_item(prod.name, prod.price)">
      <td class="item_name">{{prod.name}}</td>
      <td>${{prod.price}}</td>
    </tr>
  </table>
</div>
</template>
<script>
import prods from '@/assets/js/fakedata'
export default{
  name: 'prods',
  data(){
    return{
      prods: [],
    }
  },
  mounted: function () {
    this.$axios('https://cors-anywhere.herokuapp.com/ecshweb.pchome.com.tw/search/v3.3/all/results?q=Apple&page=1&sort=rnk/dc')
      .then( res => {
        this.prods = res.data.prods
      })
  },
  methods: {
    create_item: function (name, price) {
      if(!this.items_contained(name)){
        const new_item = {
          name:  name,
          price: price,
          quantity: 0,
          total: 0
        }
        return this.$store.commit('$create_item', new_item)
      }
    },
    items_contained: function ( name ) {
      return this.$store.state.items.some(el => el.name === name)
    }
  }
}
</script>
