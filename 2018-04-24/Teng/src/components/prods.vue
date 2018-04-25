<template>
  <div>
    <table>
      <tr>
        <th class="item_name">商品名稱</th>
        <th>價錢</th>
      </tr>
      <tr v-for='prod in prods'
      @click="add_cart(prod.name, prod.price)">
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
      prods: null,
    }
  },
  mounted: function () {
    this.prods = prods
  },
  methods: {
    add_cart: function (name, price) {
      if(!this.items_contains(name)){
        const new_item = {
          name:  name,
          price: price,
          quantity: 0,
          total: 0
        }
        return this.$store.commit('$_add_cart', new_item)
      }
    },
    items_contains: function ( name ) {
      for(let i = 0; i < this.$store.state.items.length; i++){
        if(this.$store.state.items[i].name === name){
          return true
        }
      }
      return false;
    }
  }
}
</script>
