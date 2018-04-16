<template lang="html">
  <header>
    <div class="container flexbox">
      <a href="##">
        <img src="../assets/logo.png" alt="logo">
      </a>

      <ul class="navbar">
        <li class="active"><a href="##">HOME</a></li>
        <li><a href="##">FEATURES</a></li>
        <li><a href="##">NEWS</a></li>
        <li><a href="##">ABOUT</a></li>
        <li><a href="##">CONTACT</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'nav'
}
</script>

<style lang="css">
/*<!--~~~~~~~~~~~~~~~~~~-->*/
/*<!--  Navigation bar  -->*/
/*<!--~~~~~~~~~~~~~~~~~~-->*/
* {
  /*box-shadow: 0 0 1px red;*/
}


a {
  cursor: pointer;
  text-decoration: none;
}


header {
  background-color: #eeeeee;
}


.flexbox {
  display: flex;
}


header ul {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}


header ul a {
  color: black;
  font-size: 16px;
}



</style>
