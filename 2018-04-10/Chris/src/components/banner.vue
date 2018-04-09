<template lang="html">
  <div class="banner-background">
    <div class="title-area">
      <div class="color-box"></div>
      <div class="title-box">
        <img src="../assets/good.png" alt="">
        <img src="../assets/ideas.png" alt="">
        <img src="../assets/want2know-words.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

.banner-background {
  background-image: url('../assets/banner-bgimg.png');
}

.title-area {
  position: relative;
  .title-box {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }
}

.title-area {
  max-width: 500px;
  background-color: #4a494a87;
  margin: auto;
  .color-box {
    margin: auto;
    width: 50%;
    height: 32vmax;
    background-color: #8a572a;
  }
  .title-box {
    // text-align: center;
    img {
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      &:nth-child(1){
        top: 16.66%;
        width: 48%;
        height: auto;
      }
      &:nth-child(2){
        top: 40%;
        width: 56%;
        height: auto;
      }
      &:nth-child(3){
        top: 66.66%;
        width: 66%;
        height: auto;
      }
    }
  }
}
</style>
