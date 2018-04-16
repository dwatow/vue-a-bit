<template>
    <div class="footer">
        <div class="content">
            <p class="copyright">© 2023 Zerotype. All Right Reserved</p>
            <div class="icons">
                <img src="../assets/image/facebook.png">
                <img src="../assets/image/google.png">
                <img src="../assets/image/twitter.png">
                <img src="../assets/image/pinterest.png">
            </div>
        </div>
    </div>
</template>
<style scoped>
.footer {
  width: calc(100% -250px);
  min-width: 950px;
  height: 100px;
  background-color: #eeeeee;
  padding: 0 125px;
  display: flex;
  justify-content: center;
}

.content{
    width: 980px;
    display: flex;
    justify-content: space-between;
}

.copyright {
  display: inline-block;
  height: 100px;
  margin: 0;
  line-height: 100px;
}

.icons {
  height: 100px;
  display: flex;
  align-items: center;
}

img {
  width: 40px;
  height: 40px;
  margin-left: 20px;
  cursor: pointer;
}
</style>
