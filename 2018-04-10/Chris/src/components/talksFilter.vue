<template lang="html">
    <div class="filter" :class="isActive" @click="$emit('filter', filter())">{{content}}</div>
</template>

<script>
export default {
  props: ["status", "content", "currStatus"],
  event: 'filter',
  computed: {
    isActive () {
      return {
        active: this.status == this.currStatus
      }
    }
  },
  methods: {
    filter () {
      return this.status
    },
  }
}
</script>

<style lang="scss">
  a {
    &:first-child {
      border-radius: 10px 0 0 10px;
    }

    &:last-child {
      border-radius: 0 10px 10px 0;
    }
  }

  .filter {
    display: inline-block;
    width: 33.33%;
    font-size: 24px;
    text-align: center;
    color: #0f375b;
    border: solid 1px #0f375b;
    box-sizing: border-box;


    &.active {
      color: #ffffff;
      background-color: #0f375b;
    }
  }
</style>
