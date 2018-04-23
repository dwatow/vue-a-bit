<template>
  <div id="app">
    <div class="pagingIndex" :class="isOpen">
      <carts @watchCarts="isOpen.active = $event"></carts>
      <!-- paging -->
      <div class="prevPage" @click="prevPage()"> 《 </div>
      <template v-for="indexPage in navPage">
        <index-page :key="indexPage" :index="indexPage">{{ indexPage }}</index-page>
      </template>
      <div class="nextPage" @click="nextPage()"> 》 </div>
    </div>
    <!-- products -->
    <div class="products">
      <template v-for="item in items">
        <product :key="item.Id" :item="item"></product>
      </template>
    </div>
  </div>
</template>

<script>
import indexPage from '@/components/pagingindex.vue'
import product from '@/components/product.vue'
import carts from '@/components/carts.vue'

export default {
  name: 'App',
  data () {
    return {
      isOpen: {
        active: true
      }
    }
  },
  components: {
    indexPage,
    product,
    carts
  },
  created () {
    this.$store.dispatch('initial')
  },
  computed: {
    items () {
      return this.$store.getters.getProducts
    },
    navPage () {
      let array = []
      var total
      if (screen.width < 720) {
        total = 0
      } else if (this.$store.getters.getTotalPage > 10) {
        total = 10
      } else {
        total = this.$store.getters.getTotalPage
      }

      for (let i = 1; i <= total; ++i) {
        array.push(i)
      }
      return array
    },
    currIndexPage () {
      console.log(this.$store.getters.getIndexPage, this.indexPage)
      return this.$store.getters.getIndexPage
    }
  },
  methods: {
    prevPage () {
      this.$store.dispatch('prevPage')
    },
    nextPage () {
      this.$store.dispatch('nextPage')
    },
    watchCarts () {
      this.isOpen.active = !this.isOpen.active
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-size: 0;
  overflow: auto;
  position: relative;
}

.products {
  margin-left: 5px;
  margin-right: 5px;
}

.pageIndex {
  position: relative;
}

.prevPage, .nextPage {
  cursor: pointer;
}

.prevPage, .nextPage, .pageIndex {
  display: inline-block;
  width: 1em;
  line-height: 1em;
  padding: 2px;
}

.pagingIndex {
  text-align: center;
  font-size: 1rem;
  background-color: #fff;
  box-shadow: 0 -4px 5px 5px gray;
}

@media screen and (max-width: 720px) {
  .pagingIndex {
    text-align: right;
    line-height: 2em;
  }
}

.prevPage:hover {
  font-weight: bold;
}

.nextPage:hover {
  font-weight: bold;
}

.pagingIndex + * {
  margin-top: 32px;
}

.pagingIndex > div {
  vertical-align: middle;
}

.pagingIndex {
  position: fixed;
  top: 0;
  width: 100%;
  transition: .3s;
  transform: translateY(0)
}

.pagingIndex.active {
  transform: translateY(calc(-100% + 2em))
}
</style>
