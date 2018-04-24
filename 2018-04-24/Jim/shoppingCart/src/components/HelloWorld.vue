<template>
  <div class="web">
    
    <h2>Essential Links</h2>
    <button @click="updateCounter">Click Me</button>
    
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  computed: {
    total () {    
      return this.$store.state.count
    }
  },
  methods: {
    updateCounter () {
      this.$store.commit("increment")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.web {

}
</style>
