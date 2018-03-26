<template>
  <div id="app">
    <hexheader/>
    <hexcontainer/>
    <hexfooter/>
  </div>
</template>

<script>
import hexheader from "./components/hexheader";
import hexfooter from "./components/hexfooter";
import hexcontainer from "./components/hexcontainer";

export default {
  name: "App",
  components: {
    hexheader,
    hexfooter,
    hexcontainer
  }
};
</script>

<style lang="scss">
#app {
  body {
    font-family: Microsoft JhengHei;
    line-height: 24px;
  }

  .wrapper {
    background-color: #efe9e7;
    margin: 0 auto;
  }
}
ul {
  li {
    list-style: none;
  }
}
</style>
