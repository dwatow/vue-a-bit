<template lang="html">
  <div class="pageIndex" :class="{ active: currIndexPage === index }" @click.stop="updateData()"><slot></slot></div>
</template>

<script>

export default {
  props: ['index'],
  computed: {
    currIndexPage () {
      return this.$store.getters.getIndexPage
    }
  },
  methods: {
    updateData () {
      this.$store.dispatch('index', this.index)
    }
  }
}
</script>

<style lang="css">
.pageIndex {
  border: solid 1px black;
  border-radius: 2px;
  margin: 5px;
  transition: .3s;
}

.pageIndex {
  cursor: pointer;
}

.pageIndex:hover, .pageIndex.active {
  background-color: #cccccc;
}
</style>
