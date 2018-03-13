<template>
  <footer>
    <div class="footer">
      <div>&COPY; 2023 Zerotype. All Rights Reserved.</div>
      <ul>
          <li v-for="item in icons">
            <a :href="item.link"><img :src="item.img" alt="Logo"></a>
          </li>
      </ul>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      icons: [
        {
          img: require('@/assets/images/facebook_icon.png'),
          link: 'https://www.facebook.com/'
        },
        {
          img: require('@/assets/images/google+_icon.png'),
          link: 'https://plus.google.com/?hl=zh_tw'
        },
        {
          img: require('@/assets/images/twitter_icon.png'),
          link: 'https://twitter.com/?lang=zh-tw'
        },
        {
          img: require('@/assets/images/pinterest_icon.png'),
          link: 'https://www.pinterest.com/'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  width: 100%;
  background-color: rgb(240, 240, 240);
  height: 100px;
  .footer {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
    clear: both;
    div {
      float: left;
      line-height: 100px;
    }
    ul {
      margin: 0px;
      float: right;
      height: 100px;
      position: relative;
      li {
        display: inline-block;
        position: relative;
        top: 50%;
        margin-right: 10px;
        transform: translateY(-50%);
      }
    }
  }
}


</style>
