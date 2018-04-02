<template lang="html">
    <div @click="$emit('filter', filter(status))">{{content}}</div>
</template>

<script>
export default {
  props: ["talks",  "status", "content"],
  event: 'filter',
  methods: {
    filter (status) {
      return {
        talks: this.talks.filter(item => item.checkSchedule().includes(status)),
        status: status
      }
    },
  }
}
</script>

<style lang="scss">

</style>
