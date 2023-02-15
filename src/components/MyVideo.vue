<script setup>
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
defineProps(['src','dataPoster'])
</script>

<template>
  <div></div>
  <vue-plyr>
    <video id="player" controls playsinline :data-poster="dataPoster">
      <source :src="src" type="video/mp4" />
    </video>
  </vue-plyr>
</template>

<style scoped>
div{
  width: 100%;
  height: 56.25%;
}
</style>