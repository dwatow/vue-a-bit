<template lang="pug">
    <div>
        <div class="introBottom row">
            <div class="imgContainer col-lg-4 col-md-4 col-sm-12 col-12">
            <img class="bottomImg" src="image/gardening5.jpg">
            </div>
            <div class="textContainer col-lg-8 col-md-8 col-sm-12 col-12">
                <p class="title">TIP OF THIS WEEK</p>
                <ol>
                <li>This is just a place holder,so you can see what the site would look like.This is just a place holder,so you can see what the site would look like.</li>
                <li>This is just a place holder,so you can see what the site would look like.This is just a place holder,so you can see what the site would look like.</li>
                <li>This is just a place holder,so you can see what the site would look like.This is just a place holder,so you can see what the site would look like.</li>
                </ol>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

.introBottom{
    background: #ffffff;
    padding-bottom: 30px;
}

.imgContainer{
    padding-top: 15px;
}

.bottomImg{
    width: 100%;
    height: auto;
}

.textContainer{
    padding-top: 15px;
}

.title{
    padding: 5px 15px;
    background: #d9eed4;
    border-bottom: #acd6a1 solid 2px;
    color: #946000;
    font-size: 1.2rem;
    font-weight: bold;
}

ol{
    padding: 20px 0 0 20px;
    margin: 0;
}

li{
    margin-top: 10px;
    text-align: justify;
}

</style>
