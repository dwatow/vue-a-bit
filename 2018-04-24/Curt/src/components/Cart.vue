<template lang="html">
  <div class="cart">
    <ul>
      <template  v-for="product in products">
        <li>
          {{product.name}}
        </li>
      </template>
    </ul>

  </div>

</template>

<script>
import Product from '@/components/Product'
export default {
  name:"Cart",
  components:{
    Product
  },
  data(){
    return {

    }
  },
  computed:{
    products(){
      return this.$store.state.cart.products
    }
  },
  mounted(){
    console.log(this.$store.state.cart.products)
  }

}
</script>

<style lang="css" scoped>
.cart{
  font-size: 16px;
}
li{
  list-style: none;
}
</style>
