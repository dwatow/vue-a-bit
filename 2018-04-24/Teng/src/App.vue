<template>
  <div id="app">
    <cart></cart>
    <router-view/>
  </div>
</template>

<script>
import cart from '@/components/cart'
export default {
  name: 'App',
  components: {
    cart
  }
}
</script>

<style>
</style>
