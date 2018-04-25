<template>
  <div>
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
          <button @click="$store.commit('reduce_item', index)">-</button>
          {{item.quantity}}
          <button @click="$store.commit('increase_item', index)">+</button>
        </td>
        <td>{{item.total}}</td>
        <td @click="$store.commit('remove_item', index)">移除</td>
      </tr>
    </table>

    <p>帳單金額: ${{$store.state.bill}}</p>
    <hr/>
  </div>
</template>
<script>
export default{
  name: 'cart',
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
