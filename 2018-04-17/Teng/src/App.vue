<template>
  <div id="app">
    <NAV/>
    <router-view/>
    <FOOTER/>
  </div>
</template>

<script>
import NAV from '@/components/nav'
import FOOTER from '@/components/footer'
export default {
  name: 'App',
  components: {
    NAV,
    FOOTER
  }
}
</script>

<style>
/*<!--~~~~~~~~~~~~~~~~~~-->*/
/*<!--   Content   -->*/
/*<!--~~~~~~~~~~~~~~~~~~-->*/

body {
  margin: 0;
}


.container {
  width: 960px;
  margin-left: auto;
  margin-right: auto;
}


p {
 font-family: sans-serif;
 font-size: 18px;;
 color: #707C80;

}


.contentBackground{
  background-color: #fdfdfd;
}

.upperContent {
  display: flex;
}


.upperLeft, .upperRight{
  flex: 1;
  padding: 50px 20px;
}



.upperLeft h1 {
  font-size: 80px;
  margin: 0;
  font-family: sans-serif;

}


.upperLeft h2 {
  margin: 0;
  font-family: sans-serif;
}


.button{
  width: 225px;
  margin: 0 auto;
}


.button img {
  border-radius: 6px;
}


.button p {
  margin: 0
}


.upperRight {
  text-align: center;
}


.lowerContentTitle {
  font-family: sans-serif;
  margin-top: 50px;
  margin-bottom: 30px;
}


.lowerContent {
  display: flex;
}


.lowerLeft {
  flex: 1;
  padding-right: 40px;
  font-size: 20px;
}


.lowerRight {
  flex: 1;
  padding-left: 40px;
  font-size: 20px;
}


.lowerContent p {
  text-align: justify;
}

</style>
