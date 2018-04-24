<template lang="html">
  <div class="cart">
    <ul>
      <template  v-for="product in products">
        <li @click="openModal(product)">
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
  methods:{
    openModal(product){
      let info = {
        show:true,
        message: product.describe
      }
      this.$store.commit('controlModal',info)
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
