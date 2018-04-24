<template lang="html">
  <div  class="productBlock">
    <div @click="openModal()" class="imgBlock" :style="{ backgroundImage: 'url(' + '//a.ecimg.tw' + product.picS + ')' }">

    </div>
    <div class="productName">
      {{product.name}}
    </div>
    <!-- <div class="productDescribe">
      {{product.describe}}
    </div> -->
    <div class="productPrice">
      現在只要：{{product.price}}
    </div>
    <Button class="cartBtn" type="primary" :loading="loading" @click="addToCart(product)">
      <span v-if="!loading">放入購物車</span>
      <span v-else>正在串aws後端...</span>
    </Button>
  </div>
</template>

<script>
export default {
  name:'Product',
  props:['product'],
  data(){
    return{
      loading:false
    }
  },
  methods:{
    addToCart(){
      this.loading = true
      this.$store.commit('addProduct',this.product)
      setTimeout( () => {
        this.loading = false
      },1000)
    },
    openModal(){
      console.log('work');
      let info = {
        show:true,
        message: this.product.describe
      }
      this.$store.commit('controlModal',info)
    }

  }
}
</script>

<style lang="css">
.productPrice{
  color: #ff4e00;
  font-size: 3em;
}
.productName{
  white-space: nowrap;
  overflow-x: auto;
  font-size: 2em;
}
.productBlock{
  text-align: center;
  font-size: 10px;
  display: inline-block;
  width: calc(25% - 7.5px);
  margin: 0 5px 20px 5px;
  height: auto;
  border: 1px solid #EBEBEB;
}
.productBlock:nth-child(4n+1){
  margin-left: 0px;
}
.productBlock:nth-child(4n+4){
  margin-right: 0px;
}
.imgBlock{
  width: 100%;
  padding-bottom: 75%;
  background-image: url(../assets/logo.png);
  background-size: cover;
  background-position: center;
}
.cartBtn{
  background-color: #007fdb;
  border: 0;
  margin-bottom: 10px;
}
</style>
