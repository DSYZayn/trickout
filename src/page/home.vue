<script setup>
import MyMusic from "@/components/Home/MyMusic.vue"
</script>

<template>
  <el-carousel :autoplay="false" :loop="true" type="card" height="635px">
    <el-carousel-item v-for="item in 4" :key="item" class="bg-transparent">
      <my-music/>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>



</style>