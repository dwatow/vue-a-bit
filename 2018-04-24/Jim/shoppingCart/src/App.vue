<template>
  <div id="app">
      <component-header></component-header>

      <div class="main">
        <div class="navList">
          <div class="navList-left navList-item">
            <ul>
              <li v-for="item in nav" @click="switchComponent(item.path)">{{ item.name }}</li>
            </ul>
          </div>
          <div class="navList-center navList-item">
            <div class="search-bar"><input type="text" placeholder="輸入關鍵字" ></div>
          </div>
          <div class="navList-right navList-item">
            <div class="shopping-cart">
              <div class="shopping-cart-icon">
                <span>{{ total }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="content">

          <div class="content-filter content-item" :class="{'filter-active': showSideBar}">
            I am filter
            <ul>
              <label for="one">Price</label>
              <input type="radio" id="one" value="One" v-model="picked">
              <br>
              <label for="two">Class</label>
              <input type="radio" id="two" value="Two" v-model="picked">

              <br>
              <span>Picked: {{ picked }}</span>
            </ul>
            <div class="filter-tag" @click="showSideBar = !showSideBar">FILTER</div>
          </div>
          <div class="content-demo content-item">
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
      <component-footer></component-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import store from './vuex/store'
import SHOPPING from '@/components/Shopping'
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
      ],
      picked: '',
      showSideBar: false
    }
  },
  mounted () {
    // axios.get('https://cors-anywhere.herokuapp.com/https://ecshweb.pchome.com.tw/search/v3.3/all/results?q=Apple&page=1&sort=rnk/dc')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  },
  components: {
    'component-shopping': SHOPPING,
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

textarea:focus, input:focus{
    outline: none;
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
    box-sizing: border-box;
    width: 100%;
    position: relative;
    font-size: 24px;
    font-weight: bolder;
    .navList-item {
      margin-top: 20px;
      height: 50px;
      display: inline-block;
      vertical-align: middle;
      border: solid 1px white;
    }
    .navList-left {
      width: 69%;
      ul {
        margin: 0px;
        padding: 0px;
        height: inherit;
        box-sizing: border-box;
        li {
          height: inherit;
          box-sizing: border-box;
          list-style: none;
          display: inline-block;
          padding: 10px;
          cursor: pointer;
          border-left: solid 5px white;
          width: 200px;
          background: pink;
          color: white;
          &:hover {
            color: black;
            background: yellow;
          }
        }
      }
    }
    .navList-center {
      width: 19%;
      .search-bar {
        background: orange;
        text-align: center;
        height: 100%;
        input {
          box-sizing: border-box;
          width: 90%;
          height: 65%;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          text-align: right;
          padding-right: 10px;
          font-size: 20px;
          &.placeholder {
            text-align: center;
            &:focus {
              display: none;
            }
          }
          &::-webkit-input-placeholder {
             text-align: center;
          }
          &:focus::-webkit-input-placeholder
          {
             color: transparent;
          }
        }

      }
    }
    .navList-right {
      width: 9%;
      .shopping-cart {
        height: 100%;
        clear: right;
        .shopping-cart-icon {
          position: relative;
          height: inherit;
          width: 50px;
          height:  50px;
          padding: 10px;
          float: right;
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
  .content {
    box-sizing: border-box;
    width: 100%;
    margin: 20px 0px 100px;
    padding: 10px 0px;
    display: flex;
    position: relative;
    .content-filter {
      position: relative;
      box-sizing: border-box;
      background-color: purple;
      font-size: 36px;
      font-weight: bold;
      padding: 10px;
      margin-right: 10px;
      transition: all 1s;
      min-width: 250px;
      max-width: 250px;
      &.filter-active {
        margin-left: -260px;
      }
      .filter-tag {
        width: 40px;
        height: 80px;
        position: fixed;
        border-radius: 0 50% 50% 0;
        background-color: black;
        left: 0px;
        bottom: 15%;
        transform: translateY(-50%);
        font-size: 16px;
        line-height: 40px;
        writing-mode: vertical-lr;
        color: white;
        text-align: center;
        z-index: 1;
      }
    }
    .content-demo {
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      background-color: orange;
      z-index: 0;
    }
  }
}
</style>
