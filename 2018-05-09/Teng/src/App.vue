<template>
  <div id="app">
    <api-component/>
    <counter/>
    <quantity-component/>
    <cart></cart>
    <router-view/>
  </div>
</template>

<script>
import apiComponent from '@/components/apiComponent'
import quantityComponent from '@/components/quantityComponent'
import counter from '@/components/counter'
import cart from '@/components/cart'
export default {
  name: 'App',
  components: {
    cart,
    counter,
    quantityComponent,
    apiComponent
  }
}
</script>

<style>
</style>
