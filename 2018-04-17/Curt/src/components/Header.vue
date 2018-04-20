<template>
  <div class="header">
      <div class="container">
        <div @click="login()" class="logo">
          <img src="~@/images/zerotype.png" alt=""/>
        </div>
        <div class="nav">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="Feature">Feature</router-link>
            </li>
            <li>
              <router-link to="News">News</router-link>
            </li>
            <li>
              <router-link to="About">About</router-link>
            </li>
            <li>
              <router-link to="Contact">Contact</router-link>
            </li>

            <!-- <li><a href="#">HOME</a></li>
            <li><a href="#">Feature</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li> -->
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
  },
  methods:{
    login(){
      window.hasLogin = !window.hasLogin
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
