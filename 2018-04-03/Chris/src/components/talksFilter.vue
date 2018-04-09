<template lang="html">
    <div class="filter" :class="isActive" @click="$emit('filter', filter(status))">{{content}}</div>
</template>
<script>
export default {
  props: ["talks", "status", "content", "currStatus"],
  event: 'filter',
  computed: {
    isActive () {
      return {
        active: this.status == this.currStatus
      }
    }
  },
  methods: {
    filter (status) {
      console.log(status, this.status, this.currStatus);
      return {
        talks: this.talks.filter(item => item.checkSchedule().includes(status)),
        status: status
      }
    },
  }
}
</script>

<style lang="scss">
  .filter {
    display: inline-block;
    width: 33.33%;
    font-size: 24px;
    text-align: center;
    color: #0f375b;
    border: solid 1px #0f375b;
    box-sizing: border-box;

    &:first-child {
      border-radius: 10px 0 0 10px;
    }

    &:last-child {
      border-radius: 0 10px 10px 0;
    }

    &.active {
      color: #ffffff;
      background-color: #0f375b;
    }
  }
</style>
