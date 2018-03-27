<template lang="pug">
  <div>
    <div class="main">
      <img class="mainPic" src="image/gardening1.jpg">
      <div class="mainText">
        <p class="mainTitle">GARDENING TIPS</p>
        <p class="mainContent">This is just a place holder,so you can see what the site would look like. This is just a place holder,so you can see what the site would look like. This is just a place holder,so you can see what the site would look like.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="infoWindow col-lg-4 col-md-12 col-sm-12 col-12">
        <img class="infoPic" src="image/gardening2.jpg">
        <div class="infoContent">
          <p class="infoTitle">Tips</p>
          <p class="infoText">This is just a place holder.This is just a place holder.</p>
        </div>
      </div>
      <div class="infoWindow col-lg-4 col-md-12 col-sm-12 col-12">
        <img class="infoPic" src="image/gardening3.jpg">
        <div class="infoContent">
          <p class="infoTitle">Happy Gardener</p>
          <p class="infoText">This is just a place holder.This is just a place holder.</p>
        </div>
      </div>
      <div class="infoWindow col-lg-4 col-md-12 col-sm-12 col-12">
        <img class="infoPic" src="image/gardening4.jpg">
        <div class="infoContent">
          <p class="infoTitle">Planting</p>
          <p class="infoText">This is just a place holder.This is just a place holder.</p>
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


.main{
  position: relative;
}

.mainPic{
    width: 100%;
    height: auto;
    min-height: 300px;
    object-fit: cover;
}

.mainText{
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 0 10px 10px 10px;
}

.mainTitle{
  color: #ccff98;
  padding: 10px 0;
  font-size: 2rem;
  font-weight:600; 

}

.mainContent{
  color: #ffffff;
  font-size: 1rem;
  text-align: justify;
}

.infoWindow{
  padding: 15px;
  display: flex;
  align-items: center;

}

.infoPic{
  width: 100px;
  height: 100px;
  object-fit: contain;
  border: 1px solid #ffffff;
}

.infoContent{
  width: calc(100% - 100px);
  padding-left:15px;
  align-self: flex-start;
}

.infoTitle{
  color: #ccff98;
  font-size: 1.2rem;
}

.infoText{
  text-align: left;
  color: #ffffff;
  font-size: 1rem; 
}

</style>


