<template>
  <div class="footer">

    <div class="container">
      <div class="copy_right">
        ©2023 Zerotype. All Rights Reserved.
      </div>
      <div class="social_icon">
        <ul>
          <li><a href="#"><img src="~@/images/facebook_icon.png" alt="" /></a></li>
          <li><a href="#"><img src="~@/images/google_icon.png" alt="" /></a></li>
          <li><a href="#"><img src="~@/images/twitter_icon.png" alt="" /></a></li>
          <li><a href="#"><img src="~@/images/pinterest_icon.png" alt="" /></a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
