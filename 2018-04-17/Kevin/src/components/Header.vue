<template>
    <div class="header">
        <div class="content">
            <div class="logo"></div>
        <a class="link" v-for="link in links" :key="link">{{link}}</a>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      links: ["Home", "Features", "News", "About", "Contact"]
    };
  }
};
</script>
<style scoped>
.header {
  height: 100px;
  width: 100%;
  min-width: 1200px;
  padding: 25px 0;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
}

.content{
    width: 980px;
    display: flex;
    justify-content: space-between;
}

.logo {
  width: 100px;
  min-width: 100px;
  height: 100px;
  background-image: url("../assets/image/ZERO_TYPE.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.link {
  width: 100px;
  min-width: 100px;
  height: 100px;
  line-height: 100px;
  cursor: pointer;
}

.link:hover {
    color: orange;
}
</style>

