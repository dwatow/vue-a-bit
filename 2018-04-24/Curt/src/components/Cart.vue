<template lang="html">
  <div class="">
    <template  v-for="product in products">
      <Product :product="product"></Product>
    </template>
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

<style lang="css">
</style>
