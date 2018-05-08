<template>
  <div>
    <h1 id="user_name">{{user_name}}</h1>
    <table>
      <tr>
        <th class="item_name">商品名稱</th>
        <th>價錢</th>
        <th>數量</th>
        <th>總價</th>
        <th></th>
      </tr>
      <tr v-for="(item, index) in $store.state.items">
        <td class="item_name">{{item.name}}</td>
        <td>${{item.price}}</td>
        <td>
          <button class="decrease_item" @click="decrease_item(index)">-</button>
          {{item.quantity}}
          <!-- <button class="increase_item" @click="increase_item(index)">+</button> -->
        </td>
        <td>{{item.total}}</td>
        <td id="remove_item" @click="remove_item(index)">移除</td>
      </tr>
    </table>

    <p>帳單金額: ${{bill}}</p>
    <hr/>
  </div>
</template>
<script>
export default{
  name: 'cart',
  data: function () {
    return {
      user_name: 'Teng Lee'
    }
  },
  methods: {
    increase_item: function(index){
      this.$store.dispatch('$increase_item', index)
    },
    decrease_item: function(index){
      if(this.$store.state.items[index].quantity > 0){
        this.$store.dispatch('$decrease_item', index)
      }
    },
    remove_item: function remove_item (index){
      this.$store.dispatch('$remove_item', index)
    }
  },
  computed: {
    bill(){
      return this.$store.getters.$get_bill
    },
  }
}
</script>
<style media="screen">
  td, th{
    min-width: 100px;
    text-align: center;
  }
  .item_name{
    text-align: left;
    width: 500px;
  }
</style>
