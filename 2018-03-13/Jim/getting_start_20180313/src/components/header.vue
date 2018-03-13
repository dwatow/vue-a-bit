<template>
  <div class="header">
    <header>
      <ul>
        <li><img src="@/assets/images/logo.png"></li>
        <li v-for="item in navigation">
          <a :href="item.link">{{ item.title }}</a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navigation: [
        {
          title: 'Home',
          link: 'https://www.google.com'
        },
        {
          title: 'Features',
          link: 'https://www.google.com'
        },
        {
          title: 'News',
          link: 'https://www.google.com'
        },
        {
          title: 'About',
          link: 'https://www.google.com'
        },
        {
          title: 'Contact',
          link: 'https://www.google.com'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header {
  header {
    position: relative;
    top: 0px;
    text-align: center;
    background-color: rgb(240, 240, 240);
    line-height: 100px;
    ul {
      margin: 0px;
      li {
        position: relative;
        display: inline;
        margin: 30px;
        img {
          vertical-align: middle;
        }
        a:link {
          text-decoration: none;
          color: rgb(100, 100, 100)
        }
        a:hover {
          text-decoration: none;
          color:rgb(250, 180, 0);
        }
      }
    }
  }
}

</style>
