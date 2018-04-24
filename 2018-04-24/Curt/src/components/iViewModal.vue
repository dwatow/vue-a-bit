<template lang="html">
  <div>

    <!-- <Button @click="modal7 = true">Disable upper right corner (including Esc key)</Button> -->
    <Modal
      title="Describe"
      v-model="modal7"
      :closable="false">
      <p>{{message}}</p>
    </Modal>
  </div>
</template>

<script>
export default {
    data () {
        return {
          // modal7:this.$store.state.modal.show
        }
    },
    computed:{
      message(){
        return this.$store.state.modal.message
      },
      modal7:{
        get: function () {
          // console.log(this.$store.state.modal.show);
          return this.$store.state.modal.show
        },
        set:function (value) {
          if(!value){
            let info = {
              show:false,
              message: this.$store.state.modal.message
            }
            this.$store.commit('controlModal',info)
          }
        }
      }
    },
    updated(){
      console.log(this.$store.state.modal.show);
      this.modal7 = this.$store.state.modal.show
    }
}
</script>

<style lang="css">
</style>
