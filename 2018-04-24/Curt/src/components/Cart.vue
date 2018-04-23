<template lang="html">
  <div class="">
    {{products}}
  </div>
</template>

<script>
export default {
  name:"Cart",
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
