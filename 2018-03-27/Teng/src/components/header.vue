<template lang="html">
  <header>
      <div class="container">
        <div class="row justify-content-sm-between headerStyle">
          <div class="col-12 col-sm-auto">
            <a href="##">
              <img class="img-fluid" src="../assets/images/logo.png" alt="logo">
            </a>
          </div>

          <ul class="col-12 col-sm-auto align-self-end">
            <li class="active"><a href="##">HOME</a></li>
            <li><a href="##">GALLERY</a></li>
            <li><a href="##">BLOG</a></li>
            <li><a href="##">CONTACT</a></li>
          </ul>
        </div>
      </div>
  </header>
</template>

<script>
export default {
  data: function () {
        return {
        }
    }
}
</script>

<style lang="css">
/* @import '~scss/header'; */
/*<!--~~~~~~~~~~~~~~~~~~-->*/
/*<!--  Navigation bar  -->*/
/*<!--~~~~~~~~~~~~~~~~~~-->*/

header{
  background-color:#241b18;
  border-bottom: 1px solid #ffffff;
}

.headerStyle {
  padding: 20px 0;
}


header ul {
  padding-left: 0;
  margin: 0;
}


header li {
  display: inline-block;
  margin-top: 10px;
}


@media screen and (max-width: 576px) {
    header li {
        display:block;
        text-align: center;
    }
}


header li a {
  color: #ffffff;
  font-family: "Oswald";
  font-size: 16px;
  padding: 0 15px;
}


header li a:hover{
  color: #ffc947;
  text-decoration: none;
}


</style>
