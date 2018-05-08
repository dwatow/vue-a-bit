<template>
  <button @click="fetchResults">fetchResults</button>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        value: null
      }
    },

    methods: {
      async fetchResults () {
        const response = await axios.get('https://cors-anywhere.herokuapp.com/ecshweb.pchome.com.tw/search/v3.3/all/results?q=Apple&page=1&sort=rnk/dc')
        this.value = response.data
      }
    }
  }
</script>
