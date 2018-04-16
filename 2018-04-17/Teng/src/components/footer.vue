<template lang="html">
  <footer>
    <div class="container">
     <div class="copyright">
        <p>	&#9400;  2023 Zerotype. All Rights Reserved.</p>

        <div class="logolink">
          <a href="facebook">
            <img src="../assets/facebook.png">
          </a>
          <a href="google">
            <img src="../assets/google.png">
          </a>
          <a href="twitter">
            <img src="../assets/twitter.png">
          </a>
          <a href="printerest">
            <img src="../assets/pinterest.png">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer',
}
</script>

<style lang="css">
/*<!--~~~~~~~~~~~~~~~~~~-->*/
/*<!--   Footer   -->*/
/*<!--~~~~~~~~~~~~~~~~~~-->*/

footer {
  background-color: #eeeeee;
}


.copyright {
  display: flex;
  padding-top: 50px;
  justify-content: space-between;
}


.copyright p {
  font-size: 12px;
}
</style>
