<script setup>
import MapCard from '@/components/lab/MapCard.vue'

const url = "src/assets/img/map.png"
const arr = [1,2,3,4,5]
</script>

<template>

  <div class="cards flex justify-items-center justify-center align-middle mt-10">
    <router-link v-for="i in arr" to="/map">
      <map-card :url="url"/>
    </router-link>
  </div>

</template>

<style scoped>

</style>