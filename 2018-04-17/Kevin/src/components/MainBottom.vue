<template>
    <div class="mainBottom">
        <div class="contents">
            <div class="content Left">
                <p class="title">This is just a place holder.</p>
                <p class="leftText">You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
                    <br><br>
                This is just a place holder, so you can see what the site would look like.<br><br>
                You can remove any link to our website from this website template, you're free to use this website template without linking back to us.This is just a place holder, so you can see what the site would look like.</p>
            </div>
            <div class="content right">
                <p class="rightText">You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
                    <br><br>
                This is just a place holder, so you can see what the site would look like.<br><br>
                You can remove any link to our website from this website template, you're free to use this website template without linking back to us.This is just a place holder, so you can see what the site would look like.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
p {
    margin: 0;
}

.mainBottom {
  width: calc(100% - 200px);
  min-width: 1000px;
  padding: 50px 100px;
}

.title {
  font-size: 31px;
  margin: 0;
  color: black;
}

.contents {
  display: flex;
  justify-content: center;
}

.content {
  width: 450px;
  min-width: 450px;
  height: 400px;
  padding: 0 20px;
  color: #707070;
  display: inline-block;
}

.leftText{
    margin-top: 30px;
}

.rightText{
    margin-top: 74px;
}
</style>
