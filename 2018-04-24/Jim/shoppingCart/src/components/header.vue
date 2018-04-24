<template>
  <div class="header">
    I am header
  </div>
</template>

<script>

export default {
  name: 'header',
  data () {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.header {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
  background-color: green;
  text-align: center;
  font-size: 36px;
  color: white;
  line-height: 100px;
}
    
</style>
