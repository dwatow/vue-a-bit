<template lang="html">
  <div>
    <Button @click="modal7 = true">Disable upper right corner (including Esc key)</Button>
    <Modal
      title="Title"
      v-model="modal7"
      :closable="false">
      
    </Modal>
  </div>
</template>

<script>
export default {
    data () {
        return {
            modal7: false,
        }
    }
}
</script>

<style lang="css">
</style>
