<template lang="html">
  <div id="headbox">
    <div class="side_space clearfix">
      <div id="logo">
        <img src="/static/img/logo.png" alt="zero type logo" />
        <div class="text">ZERO TYPE</div>
      </div>
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<script>
// export default {
// }
</script>

<style lang="css">
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

#headbox {
  font-family: sans-serif;
  background-color: #EEEEEE;
}

#logo {
  display: block;
  float: left;
  width: 85px;
  padding-top: 20px;
  padding-bottom: 40px;
  text-align: center;
}

#logo .text {
  text-align: center;
  font-size: 15px;
}

.selected_page {
  color: #f99603;
}

#logo img {
  display: block;
  height: 80px;
  width: 52;
  margin: 0 auto;
}

#menu.initial {
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
}

#headbox ul li {
  float: left;
  display: block;
  font-size: 15px;
  line-height: 160px;
  margin-left: 82px;
}

#headbox ul li + li {
  margin-left: 110px;
}

</style>
