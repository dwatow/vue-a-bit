<template>
  <div class="banner">
      <img src="/src/assets/group-5@3x.jpg" alt="" class="tool-map"> 
    <div class="title-area">
        <div class="titleArea-bg">
            <img src="/src/assets/good@3x.png" alt="" class="title">
            <img src="/src/assets/ideas@3x.png" alt="" class="title">
            <img src="/src/assets/invalid-name@3x.png" alt="" class="title">
        </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'goodIdeas',
        data(){
            return{}
        }
    }
</script>
<style lang="scss">
.banner {
    width: 100%;
    height: 33.7vh;
    overflow: hidden;
    position: relative;
    .tool-map {
        width: 100%;
    }
    .title-area {
        width: 500px;
        height: 100%;
        position: absolute;
        top: 0;
        left:0;
        right: 0;
        margin: 0 auto;
        background-color: rgba(0,0,0,0.4)
    }
    .titleArea-bg {
        width: 250px;
        height: 100%;
        margin: 0 auto;
        background: #8a572a;
        position: relative;
    }
    .title{
        width: 100%;
        margin: 10px auto;
    }
}
</style>
