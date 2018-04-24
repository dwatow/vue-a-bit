<template lang="html">
  <div class="">
    <template  v-for="product in products">
      <Product :product="product"></Product>
    </template>
  </div>

  </template>
</template>

<script>
import Product from '@/components/Product'

export default {
  name:'ProductList',
  components:{
    Product
  },
  data(){
    return{
      isCollapsed: false,
      products:[]
    }
  },
  computed:{

  },
  methods:{

  },
  mounted(){
    this.$axios('https://cors-anywhere.herokuapp.com/http://ecshweb.pchome.com.tw/search/v3.3/all/results?q=Apple&page=1&sort=rnk/dc')
      .then( (res) => {
        res.data.prods.forEach( (product) => {
          this.products.push(product)
        })
      })
  }
}
</script>

<style lang="css" scoped>

</style>
