<template>
    <div class="mainTop">
        <div class="content">
            <h1>IDEAS?</h1>
            <h2>This is just a place holder.</h2>
            <p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us.</p>
            <div class="button">
            <button class="tryButton">TRY IT NOW!</button>
            <p>Don't worry it's free!</p>
            </div>
        </div>
        <div class="image"></div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.mainTop {
  width: calc(100% - 200px);
  min-width: 1000px;
  height: 400px;
  background-color: #fdfdfd;
  padding: 50px 100px;
  display: flex;
  justify-content: center;
}

.content,
.image {
  /* display: block; */
  width: 450px;
  min-width: 450px;
  height: 400px;
  padding: 0 20px;
}

h1 {
  margin: 0px;
  font-size: 60px;
}

h2 {
  font-size: 32px;
  margin: 0px;
}

p {
  margin: 0px;
  color: #707070;
}
.button {
  padding: 15px 40px;
}

.tryButton {
  background: linear-gradient(180deg, #ffb846 50%, #f99600 50%);
  border-radius: 8px;
  border: none;
  color: white;
  padding: 15px 75px;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
}

.button p {
  font-size: 5px;
}

.image {
  background-image: url("../assets/image/download_pic.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 25px 0px;
}
</style>

