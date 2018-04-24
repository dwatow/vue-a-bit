<template>
  <div class="shopping-list">
    <h2>Essential Links</h2>
    <button @click="updateCounter">Click Me</button>
  </div>
</template>

<script>


export default {
  name: 'HelloFuture',
  data () {
    return {}
  },
  computed: {
    total () {
      return this.$store.state.buy.count
    }
  },
  methods: {
    updateCounter () {
      this.$store.state.buy.commit("increment")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopping-list {

}
</style>
