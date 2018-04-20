<template>
    <div>
        <p>All Speech</p>
        <ul class="speechList">
        <app-speech v-for="item in speechs" :key=" item.title" :speech="item"></app-speech>
        </ul>
    </div>
</template>
<script>
import Speech from "./Speech.vue";
export default {
  props: ["speechs"],
  components: {
    appSpeech: Speech
  }
};
</script>
