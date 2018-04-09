<template>
  <div>
      <div class="logo">
          <div class="textBackground">
              <div class="textArea">
                  <img class="good" src="../assets/good.png">
                  <img class="ideas" src="../assets/ideas.png">
                  <img class="info" src="../assets/invalid-name.png">
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
.logo{
    width: 100%;
    height: 432px;
    background-image: url('../assets/group-5.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
}
.textBackground{
    width: 500px;
    height: 432px;
    background:rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.textArea{
    width: 250px;
    height: 432px;
    background-color: #8a572a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img {
    margin-top: 20px;
}

.info {
    margin-top: 38px;
}
</style>

