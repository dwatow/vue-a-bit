<template lang="html">
  <div class="buy-item">
    <span class="remove-cart-icon" @click.stop="removeIt()"><i class="fas fa-cart-arrow-down fa-lg"></i></span>
    <span class="name">{{buy.item.name}}</span>
    <span class="price">{{buy.item.price}}</span>
    <span class="sign">×</span>
    <!-- <span class="price">{{buy.num}}</span> -->
    <input class="price" @click.stop="" @change="changeIt()" type="number" name="" v-model="buy.num">
    <span class="sign">=</span>
    <span class="price">{{buy.item.price * buy.num}}</span>
  </div>
</template>

<script>
import fontawesome from '@fortawesome/fontawesome'
import { faCartArrowDown } from '@fortawesome/fontawesome-free-solid/'

fontawesome.library.add(faCartArrowDown)

export default {
  props: ['buy'],
  methods: {
    removeIt () {
      const carts = this.$store.getters.getCartsProducts
      this.$store.dispatch('removeBuy', {
        index: carts.indexOf(this.buy)
      })
    },
    changeIt () {
      const carts = this.$store.getters.getCartsProducts
      this.$store.dispatch('updateBuyNum', {
        index: carts.indexOf(this.buy),
        num: parseInt(this.buy.num)
      })
    }
  }
}
</script>

<style lang="css">
.buy-item {
  font-size: 0;
}

.buy-item .name,
.buy-item .price,
.buy-item .sign,
.buy-item .remove-cart-icon {
  display: inline-block;
  font-size: 1rem;
  box-sizing: border-box;
  padding: 2px 0;
}

.buy-item .remove-cart-icon {
  width: 2em;
}

.buy-item .name {
  width: calc(70% - 5em);
  text-align: left;
  padding-left: 5px;
}

.buy-item .price {
  width: 10%;
}

.buy-item .sign {
  width: 1em;
}
</style>
