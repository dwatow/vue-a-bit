<template>
  <div class="footer">
    I am footer
  </div>
</template>

<script>

export default {
  name: 'footer',
  data () {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 80px;
  background-color: blue;
  font-size: 36px;
  color: white;
  line-height: 80px;
  text-align: center;
}
    
</style>
