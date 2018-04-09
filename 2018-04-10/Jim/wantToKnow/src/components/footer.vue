<template lang="html">
  <div class="footer">
    <div class="footer-copyright" v-html="copyright"></div>
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
  methods: {},
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer {
  height: 80px;
  opacity: 0.56;
  background-color: #1e8ba6;
  text-align: center;
  color: white;
  position: relative;
  .footer-copyright {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
