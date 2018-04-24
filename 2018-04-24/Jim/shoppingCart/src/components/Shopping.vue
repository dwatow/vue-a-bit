<template>
  <div class="web">
    <ul>
      <li v-for="item in 10"><img src="http://via.placeholder.com/200x180" alt=""></li>
    </ul>
    <h2>Essential Links</h2>
    <button @click="updateCounter">Click Me</button>

  </div>
</template>

<script>


export default {
  name: 'Shopping',
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
  ul {
    margin: 0px;
    li {
      margin: 0px;
      padding: 0px;
      display: inline-block;
      width: calc(100% / 3);
      text-align: center;
    }
  }
}
</style>
