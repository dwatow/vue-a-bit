<template>
  <div id="app">
    <goodIdeasHead></goodIdeasHead>
    <goodIdeasFilter></goodIdeasFilter>
    <wantToknow v-for= "talk in posts" :talk='talk'></wantToknow>
     <div class="footer">
     <p>Copyright © 2017 <a href="">好想工作室</a></p>
     <p>All Rights Reserved</p>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import goodIdeasHead from'./components/goodIdeasHead';
import goodIdeasFilter from './components/goodIdeasFilter'
import wantToknow from './components/wantToknow'

export default {
  name: 'app',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      posts:[]
    }
  },
  components: {
    goodIdeasHead,
    wantToknow,
    goodIdeasFilter
  },
  created(){
    axios.get(`https://devche.com/api/speech/data`)
    .then(response =>{
      this.posts = response.data.result;
    })
  }
}
</script>

<style lang="scss">
*::-webkit-scrollbar {
display: none;
}
#app {
   min-height: 100vh
}

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


.footer {
    width: 100%;
    height: 80px;
    background-color: rgba(30,139,166,.56);
    color:#fff;
    text-align: center;
    font-size: 12px;
    font-weight: 300;
    padding : 20px;
    margin-top: 2vw;
    p {
        margin-bottom: 10px
    }
    a {
        color: #fff
    }
   
}
</style>
