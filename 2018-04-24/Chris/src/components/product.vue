<template lang="html">
  <div class="product">
    <h3>{{ item.name }}</h3>
    <div>
      <img :src="`${imgDomain}${item.picS}`" alt="">
      <div class="detail">
        <div class="originPrice" v-if="isSale"><span>{{item.originPrice}}</span> 元</div>
        <div class="price" :class="redcolor">
          <span>{{item.price}} 元</span>
        </div>
        <div class="buy-it">
          <input type="number" v-model="num">
          <span @click="addCarts()"><i class="fas fa-cart-plus fa-2x"></i></span>
        </div>
        <div class="descript">{{item.describe}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import fontawesome from '@fortawesome/fontawesome'
import { faCartPlus } from '@fortawesome/fontawesome-free-solid/'

fontawesome.library.add(faCartPlus)

export default {
  props: ['item'],
  data () {
    return {
      imgDomain: 'http://a.ecimg.tw',
      num: 0,
      redcolor: {
        red: this.item.originPrice !== this.item.price
      }
    }
  },
  computed: {
    currIndexPage () {
      console.log(this.$store.getters.getIndexPage, this.indexPage)
      return this.$store.getters.getIndexPage
    },
    isSale () {
      return this.item.originPrice !== this.item.price
    }
  },
  methods: {
    addCarts () {
      console.log('add carts')
      this.$store.commit('addCarts', {item: this.item, num: parseInt(this.num)})
    }
  }
}
</script>

<style lang="css">

.price * {
  vertical-align: middle;
}

.red {
  color: red;
}

.buy-it > input {
  outline: none;
  margin-right: 5px;
  padding: 2px;
  border-radius: 3px;
  border: solid 1px #ccc;
  width: 50px;
}

.fa-cart-plus {
  cursor: pointer;
  color: red;
  transition: .3s;
}

.fa-cart-plus:hover {
  transform: scale(1.5);
}

.detail, img, .buy-it {
  display: inline-block;
  vertical-align: top;
}

img {
  width: 200px;
  height: auto;
}

.detail {
  width: calc(95% - 200px);
  font-size: .6rem;
  margin-left: 10px;
}

.product {
  font-size: 1rem;
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
}

@media screen and (max-width: 720px) {
  .product {
    width: 100%;
  }
}

.detail .price {
  font-size: 2em;
}

.detail .originPrice {
  font-size: 1.2em;
}

.detail .descript {
  overflow: auto;
  height: 150px;
  font-size: .6rem;
}
</style>
