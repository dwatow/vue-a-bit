<template>
  <div id="app">
    <headbox>
      <ul id="menu" class="initial" slot="menu">
        <li @click="contentComponent = 'Content'" class="selected_page">Home</li>
        <li @click="contentComponent = 'Features'">Features</li>
        <li @click="contentComponent = 'headbox'">News</li>
        <li @click="contentComponent = 'Footer'">About</li>
        <li @click="contentComponent = 'Content'">Contact</li>
      </ul>
    </headbox>
    <keep-alive>
      <component :is="contentComponent"></component>
    </keep-alive>
    <Footer>
      <i slot="media1" class="fab fa-facebook-square sociality_icon_size fa-lg"></i>
      <i slot="media2" class="fab fa-google-plus-square sociality_icon_size fa-lg"></i>
      <i slot="media3" class="fab fa-twitter-square sociality_icon_size fa-lg"></i>
      <i slot="media4" class="fab fa-pinterest-square sociality_icon_size fa-lg"></i>
    </Footer>
  </div>
</template>

<script>
import headbox from '@/components/headbox.vue'
import Footer from '@/components/footer.vue'
import Content from '@/components/content.vue'
import Features from '@/components/features.vue'

export default {
  name: 'App',
  data () {
    return {
      contentComponent: 'Content'
    }
  },
  components: {
    headbox,
    Content,
    Footer,
    Features
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

body {
  margin: 0px;
}

.side_space {
  margin: 0 auto;
  width: 910px;
}

.debug_css {
  border: 1px solid;
}
</style>
