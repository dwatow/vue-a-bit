<template lang="pug">
  <div>
      <div class="logo col-*-12">
      <img class="logoImg" src="image/logo.png">
      </div>
      <div class="row">
      <div class="headerBtn col-md-2 col-sm-4 col-12">Home</div>
      <div class="headerBtn col-md-2 col-sm-4 col-12">About</div>
      <div class="headerBtn col-md-2 col-sm-4 col-12">Plants</div>
      <div class="headerBtn col-md-2 col-sm-4 col-12">Gardens</div>
      <div class="headerBtn col-md-2 col-sm-4 col-12">News</div>
      <div class="headerBtn col-md-2 col-sm-4 col-12">Contact</div>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.logo {
  background: #ffffff;
  padding: 10px 20px;
}

.logoImg {
  display: block;
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 0 auto;
}

.headerBtn {
  text-align: center;
  background: #505050;
  color: #ffffff;
  outline: none;
  font-size: 1.2vw;
  padding: 10px;
}

.headerBtn:hover {
  background-color: #acc7a6;
  color: #505050;
}
</style>


