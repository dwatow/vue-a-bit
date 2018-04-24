<template>
  <div id="app">
      <component-header></component-header>

      <div class="main">
        <div class="navList">
          <ul>
            <li v-for="item in nav" @click="switchComponent(item.path)">{{ item.name }}</li>
          </ul>
          <div class="shopping-cart">
            <div class="shopping-cart-icon">
              <span>{{ total }}</span>
            </div>
          </div>
        </div>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div> 
      <component-footer></component-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'
import WORLD from '@/components/HelloWorld'
import FUTURE from '@/components/HelloFuture'
import HEADER from '@/components/header'
import FOOTER from '@/components/footer'

Vue.use(Vuex)

export default {
  name: 'App',
  store,
  data () {
    return {
      nav: [
        {
          name: 'About',
          path: '/'
        },
        {
          name: 'Shopping',
          path: 'shopping'
        },
        {
          name: 'More',
          path: ''
        }
      ]
    }
  },
  components: {
    'component-world': WORLD,
    'component-future': FUTURE,
    'component-header': HEADER,
    'component-footer': FOOTER
  },
  methods: {
    switchComponent (pathTo) {
      this.$router.push({path:`${pathTo}`})
    }
  },
  computed: {
    total () {    
      return this.$store.state.count
    }
  }
}
</script>

<style lang="scss">
html, body, h1 {
  margin: 0px;
  padding: 0px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  min-height: 100vh;
}

.main {
  margin: 100px 0px 80px;
  .navList {
    width: 100%;
    position: relative;
    line-height: 50px;
    font-size: 24px;
    font-weight: bolder;
    ul {
      margin: 0px;
      padding: 0px;
      li {
        list-style: none;
        display: inline-block;
        padding: 10px;
        cursor: pointer;
        border: solid 1px white;
        width: 200px;
        background: pink;
        color: white;
        &:hover {
          color: black;
          background: yellow;
        }
      }
    }
    .shopping-cart {
      height: 100%;
      position: absolute;
      right: 10px;
      top: 0px;
      .shopping-cart-icon {
        position: relative;
        height: inherit;
        width: 72px;
        padding: 10px;
        box-sizing: border-box;
        background: url("https://use.fontawesome.com/releases/v5.0.10/svgs/solid/shopping-cart.svg") center no-repeat;
        background-size: 80% 80%;
        cursor: pointer;
        span {
          position: absolute;
          right: -5px;
          top: 5px;
          width: 25px;
          height: 25xp;
          line-height: 25px;
          font-size: 16px;
          text-align: center;
          border-radius: 50%;
          background: red;
          color: white;
          z-index: 2;
          
        }
      }
      
    }
  }
  
}
</style>
