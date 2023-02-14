<script setup>
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
defineProps(['src'])
</script>

<template>
  <vue-plyr>
    <video id="player" controls playsinline>
      <source :src="src" type="video/mp4" />
    </video>
  </vue-plyr>
</template>

<style scoped>
#player{
  width: 100%;
  height: 56.25%;
}
</style>