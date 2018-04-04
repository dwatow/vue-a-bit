<template lang="html">
  <div class="banner">
    <div class="banner-title">
      <div class="banner-color-block"></div>
      <div class="banner-text-block-en">
        <div class="banner-text-block-good"></div>
        <div class="banner-text-block-idea"></div>
      </div>
      <div class="banner-text-block-ch"></div>
    </div>
  </div>
</template>

<script>

export default {
  props: {},
  data() {
      return {

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
  .banner {
    height: 432px;
    background: url('../assets/images/group-5@2x.png') no-repeat;
    background-size: cover;
    position: relative;
    .banner-title {
      width: 500px;
      height: 100%;
      margin: 0 auto;
      background-color: rgba(#4a4a4a, 0.53);
      .banner-color-block {
        width: 50%;
        height: 100%;
        margin: auto;
        background-color: #8b572a;
      }
      .banner-text-block-en {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -25%);
        .banner-text-block-good {
          height: 70px;
          width: 360px;
          margin: 20px;
          background: url('../assets/images/good@2x.png') no-repeat;
          background-size: contain;
          background-position: center;
        }
        .banner-text-block-idea {
          height: 70px;
          width: 360px;
          margin: 20px;
          background: url('../assets/images/ideas@2x.png') no-repeat;
          background-size: contain;
          background-position: center;
        }
      }
      .banner-text-block-ch {
        height: 107px;
        width: 340px;
        background: url('../assets/images/invalid-name@2x.png') no-repeat;
        background-size: contain;
        position: absolute;
        bottom: 25%;
        left: 50%;
        transform: translate(-50%, 50%);        
      }
    }
  }
</style>
