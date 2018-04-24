<template lang="html">
  <div class="carts">
    <!-- products in carts -->
    <div class="carts-products" :class="isOpen" v-for="buy in products" :key="buy.item.id">
      <buy-item :buy="buy"></buy-item>
    </div>
    <!-- carts-icon -->
    <div class="carts-icon" @click="watchCarts()">
      <span :class="isOpen"><i class="fas fa-shopping-cart"></i></span>
      <span>({{ buys }})</span>
      <span v-if="totalPrice != 0">共 {{ totalPrice }} 元</span>
    </div>
  </div>
</template>

<script>
import buyItem from '@/components/buy.vue'
import fontawesome from '@fortawesome/fontawesome'
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid/'

fontawesome.library.add(faShoppingCart)

export default {
  data () {
    return {
      isOpen: {
        active: false
      }
    }
  },
  components: {
    buyItem
  },
  methods: {
    watchCarts () {
      this.isOpen.active = !this.isOpen.active
      this.$emit('watchCarts', !this.isOpen.active)
    }
  },
  computed: {
    products () {
      return this.$store.getters.getCartsProducts
    },
    buys () {
      return this.$store.getters.getTotalCartsProducts
    },
    totalPrice () {
      return this.$store.getters.getTotalPriceCarts
    }
  }
}
</script>

<style lang="css">
.carts {
  position: relative;
}

.carts-icon {
  position: absolute;
  top: 100%;
  left: 2px;
  margin: auto;
  line-height: 2em;
  font-size: 1rem;
  display: block;
}

.carts-icon > * {
  display: inline-block;
  vertical-align: middle;
}

.carts-products:nth-child(2n+1) {
  background-color: #EcEcEc;
}

.carts {
  max-height: 80vh;
  overflow: auto;
}

.fa-shopping-cart {
  cursor: pointer;
  transition: .5s .3s cubic-bezier(1, -1.02, 0, 4.1);
  transform: rotate(0deg);
}

.active > .fa-shopping-cart {
  transform: rotate(25deg);
}
</style>
