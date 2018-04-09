<template lang="html">
  <div class="goTop" @click="goTop()">
    TOP
  </div>
</template>

<script>

export default {
  props: {},
  data() {
      return {
        'copyright': "Copyright © 2017 好想工作室<br>All Rights Resevred"
      }
  },
  computed: {},
  components: {},
  // Life cycle hook
  beforeCreate() {},
  mounted() {},
  methods: {
    goTop () {
      document.body.scrollTop=0;
      document.documentElement.scrollTop=0;
    }
  },
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.goTop {
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 50px;
  line-height: 50px;
  background-color: white;
  border: solid 1px black;
}
</style>
