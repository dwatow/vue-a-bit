<template lang="pug">
  <div>
    <div class="introTop">
      <p class="topTitle">FEATURED GARDENS</p>
      <div class="introTable row">
        <div class="introItem col-lg-3 col-md-3 col-sm-6 col-6">
          <img class="introPic" src="image/garden1.jpg">
          <p class="itemTitle">JULIET'S GARDEN</p>
          <p class="itemText">This is just a place holder,so you can see what the site would look like.</p>
        </div>
        <div class="introItem col-lg-3 col-md-3 col-sm-6 col-6">
          <img class="introPic" src="image/garden2.jpg">
          <p class="itemTitle">JOANNE'S GARDEN</p>
          <p class="itemText">This is just a place holder,so you can see what the site would look like.</p>
        </div>
        <div class="introItem col-lg-3 col-md-3 col-sm-6 col-6">
          <img class="introPic" src="image/garden3.jpg">
          <p class="itemTitle">JETTKA'S GARDEN</p>
          <p class="itemText">This is just a place holder,so you can see what the site would look like.</p>
        </div>
        <div class="introItem col-lg-3 col-md-3 col-sm-6 col-6">
          <img class="introPic" src="image/garden4.jpg">
          <p class="itemTitle">JIA'S GARDEN</p>
          <p class="itemText">This is just a place holder,so you can see what the site would look like.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.introTop{
  background: #ffffff;
  padding: 15px;
}

.topTitle{
  padding: 5px 15px;
  background: #d9eed4;
  border-bottom: #acd6a1 solid 2px;
  color: #946000;
  font-size: 1.2rem;
  font-weight: bold;
}

.introItem{
  padding: 15px ;
  border-bottom: 1px solid #ecebe7;
}

.introPic{
  width: 100%;
  height: auto;
}

.itemTitle{
  color: #844200;
  font-size: 1.1rem;
  /* font-weight: bold; */
  margin-top: 15px;
}

.itemText{
  font-size: 1.1rem;
  margin-top: 10px;
}

</style>


